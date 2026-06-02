import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
// Default: deliver to the same Gmail you authenticate with.
const TO = process.env.CONTACT_TO_EMAIL || GMAIL_USER;

// Optional Google Sheets backup. If set, every submission ALSO writes a row
// via a Google Apps Script Web App webhook. See README / .env.example.
const SHEETS_WEBHOOK_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  interests?: string[];
  budget?: string | null;
  _hp_url?: string; // honeypot — must arrive empty from real submissions
};

const EMAIL_RX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    console.error("GMAIL_USER or GMAIL_APP_PASSWORD is not set");
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 500 }
    );
  }

  let payload: Payload;
  try {
    payload = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot — silently succeed for bots so they don't retry.
  // Logging this when it fires is critical for debugging: if a real user's
  // browser autofills the hidden field, their submission vanishes invisibly,
  // and this log is the only signal that's what happened.
  if (payload._hp_url) {
    console.warn(
      "[contact] Honeypot triggered — dropping submission silently. " +
        `Field value: "${payload._hp_url.slice(0, 40)}". ` +
        "If this is a real user, suspect browser autofill on the hidden field."
    );
    return NextResponse.json({ ok: true });
  }

  const name = (payload.name || "").trim();
  const email = (payload.email || "").trim();
  const company = (payload.company || "").trim();
  const message = (payload.message || "").trim();
  const interests = Array.isArray(payload.interests) ? payload.interests : [];
  const budget = (payload.budget || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required" },
      { status: 400 }
    );
  }

  if (!EMAIL_RX.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  if (message.length > 5000) {
    return NextResponse.json({ error: "Message too long" }, { status: 400 });
  }

  const ua = request.headers.get("user-agent") || "unknown";
  const ref = request.headers.get("referer") || "direct";
  const submittedAt = new Date().toISOString();

  const data: Render = { name, email, company, message, interests, budget, ua, ref, submittedAt };

  // Fire email + sheet in parallel. If EITHER succeeds, the lead is captured.
  const [emailResult, sheetResult] = await Promise.allSettled([
    sendEmail(data),
    SHEETS_WEBHOOK_URL ? writeToSheet(data, SHEETS_WEBHOOK_URL) : Promise.resolve("skipped"),
  ]);

  if (emailResult.status === "rejected") {
    console.error("Gmail send failed:", emailResult.reason);
  }
  if (sheetResult.status === "rejected") {
    console.error("Sheet write failed:", sheetResult.reason);
  }

  const emailOk = emailResult.status === "fulfilled";
  const sheetOk = sheetResult.status === "fulfilled" && sheetResult.value !== "skipped";

  // 200 if at least one channel succeeded. The lead is in at least one inbox.
  if (emailOk || sheetOk) {
    return NextResponse.json({
      ok: true,
      delivered: { email: emailOk, sheet: sheetOk },
    });
  }

  return NextResponse.json(
    { error: "All delivery channels failed. Check server logs." },
    { status: 502 }
  );
}

// ─── helpers ──────────────────────────────────────────────────────────

async function sendEmail(d: Render): Promise<void> {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: GMAIL_USER!, pass: GMAIL_APP_PASSWORD! },
  });

  await transporter.sendMail({
    from: `"Bricknclick" <${GMAIL_USER}>`,
    to: TO,
    replyTo: d.email,
    subject: `New brief · ${d.name}${d.company ? ` · ${d.company}` : ""}`,
    text: renderText(d),
    html: renderHtml(d),
  });
}

async function writeToSheet(d: Render, url: string): Promise<void> {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(d),
    // Apps Script web apps can be slow on cold start. Give it room.
    signal: AbortSignal.timeout(10_000),
  });
  if (!res.ok) {
    throw new Error(`Sheet webhook returned ${res.status}`);
  }
}

// ─── render helpers ───────────────────────────────────────────────────

type Render = {
  name: string;
  email: string;
  company: string;
  message: string;
  interests: string[];
  budget: string;
  ua: string;
  ref: string;
  submittedAt: string;
};

function renderText(d: Render): string {
  return [
    "New brief from the bricknclick.com contact form",
    "—",
    `Name:      ${d.name}`,
    `Email:     ${d.email}`,
    d.company ? `Company:   ${d.company}` : null,
    d.interests.length ? `Interests: ${d.interests.join(", ")}` : null,
    d.budget ? `Budget:    ${d.budget}` : null,
    "",
    "Brief:",
    d.message,
    "",
    "—",
    `Submitted: ${d.submittedAt}`,
    `Referrer:  ${d.ref}`,
    `UA:        ${d.ua}`,
  ]
    .filter(Boolean)
    .join("\n");
}

function renderHtml(d: Render): string {
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:8px 16px 8px 0;color:#9a9a9a;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;font-family:ui-monospace,Menlo,monospace;white-space:nowrap;vertical-align:top;">${escape(label)}</td>
      <td style="padding:8px 0;color:#0a0a0a;font-size:15px;font-family:system-ui,sans-serif;">${escape(value)}</td>
    </tr>`;

  return `<!doctype html>
<html><body style="margin:0;background:#fafaf7;font-family:system-ui,sans-serif;color:#0a0a0a;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#fafaf7;padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="640" style="max-width:640px;background:#ffffff;border:1px solid #e4e4e1;border-radius:8px;overflow:hidden;">
        <tr><td style="background:#0a0a0a;padding:24px 28px;color:#fafafa;">
          <div style="font-family:ui-monospace,Menlo,monospace;font-size:11px;text-transform:uppercase;letter-spacing:0.12em;color:#9a9a9a;">brick<span style="color:#ff6b1a;font-style:italic;">n</span>click · new brief</div>
          <div style="font-size:28px;font-weight:700;letter-spacing:-0.04em;margin-top:6px;">${escape(d.name)}${d.company ? ` <span style="color:#9a9a9a;">·</span> ${escape(d.company)}` : ""}</div>
        </td></tr>

        <tr><td style="padding:24px 28px;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
            ${row("Email", d.email)}
            ${d.company ? row("Company", d.company) : ""}
            ${d.interests.length ? row("Interests", d.interests.join(" · ")) : ""}
            ${d.budget ? row("Budget", d.budget) : ""}
          </table>

          <div style="margin-top:24px;padding-top:24px;border-top:1px solid #e4e4e1;">
            <div style="font-family:ui-monospace,Menlo,monospace;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:#9a9a9a;margin-bottom:12px;">The brief</div>
            <div style="font-size:16px;line-height:1.6;white-space:pre-wrap;color:#0a0a0a;">${escape(d.message)}</div>
          </div>

          <div style="margin-top:32px;padding:16px;background:#fafaf7;border:1px solid #e4e4e1;border-radius:6px;">
            <a href="mailto:${escape(d.email)}?subject=Re%3A%20Your%20brief%20%C2%B7%20Bricknclick" style="display:inline-block;background:#ff6b1a;color:#0a0a0a;text-decoration:none;padding:10px 18px;border-radius:999px;font-weight:600;font-size:14px;">Reply to ${escape(d.name.split(" ")[0])} →</a>
          </div>

          <div style="margin-top:24px;font-family:ui-monospace,Menlo,monospace;font-size:11px;color:#9a9a9a;line-height:1.6;">
            Submitted: ${escape(d.submittedAt)}<br>
            Referrer:  ${escape(d.ref)}<br>
            UA:        ${escape(d.ua)}
          </div>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

function escape(s: string): string {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
