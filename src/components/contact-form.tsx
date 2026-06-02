"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Magnetic } from "./magnetic";

const interests = ["Ads", "Web", "Content", "Brand", "Everything"];
const budgets = ["< ₹5L", "₹5L – ₹15L", "₹15L – ₹50L", "₹50L+"];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [picked, setPicked] = useState<string[]>([]);
  const [budget, setBudget] = useState<string | null>(null);

  const toggle = (i: string) =>
    setPicked((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]));

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      company: String(fd.get("company") || ""),
      message: String(fd.get("message") || ""),
      interests: picked,
      budget,
      _hp_url: String(fd.get("_hp_url") || ""), // honeypot
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Request failed with ${res.status}`);
      setStatus("sent");
      (e.target as HTMLFormElement).reset();
      setPicked([]);
      setBudget(null);
    } catch (err) {
      console.error("Contact form submit failed", err);
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-[var(--border-c)] bg-[var(--card)] p-10"
      >
        <p className="mono text-[var(--color-accent)]">[ Brief received ]</p>
        <h3 className="display mt-4 text-4xl md:text-5xl">Thanks — we got it.</h3>
        <p className="mt-4 text-[var(--muted-foreground)]">
          Expect a personal reply within 24 hours. If it's urgent, drop us a
          line at{" "}
          <a
            href="mailto:info@bricknclick.com"
            className="underline-grow inline-block"
          >
            info@bricknclick.com
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mono mt-8 inline-flex h-10 items-center gap-2 rounded-full border border-[var(--border-c)] px-4 hover:bg-[var(--background)]"
        >
          Send another →
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-8 rounded-2xl border border-[var(--border-c)] bg-[var(--card)] p-6 md:p-10"
    >
      {/* Honeypot: off-screen, invisible to humans, named to dodge browser autofill.
          DO NOT rename to "website" / "url" / "company" / "phone" — those names
          get autofilled by Chrome/1Password and silently kill real submissions. */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: "-9999px",
          top: 0,
          width: "1px",
          height: "1px",
          overflow: "hidden",
          opacity: 0,
          pointerEvents: "none",
        }}
      >
        <label htmlFor="_hp_url">Do not fill</label>
        <input
          id="_hp_url"
          name="_hp_url"
          type="text"
          tabIndex={-1}
          autoComplete="new-password"
          defaultValue=""
        />
      </div>

      <Field label="Your name" name="name" required placeholder="e.g. Aanya Mehra" />
      <Field
        label="Email"
        name="email"
        type="email"
        required
        placeholder="you@company.com"
      />
      <Field
        label="Company / brand"
        name="company"
        placeholder="Optional — but helpful"
      />

      <div>
        <label className="mono mb-3 block text-[var(--muted-foreground)]">
          What do you need?
        </label>
        <div className="flex flex-wrap gap-2">
          {interests.map((i) => (
            <button
              key={i}
              type="button"
              onClick={() => toggle(i)}
              data-cursor={picked.includes(i) ? "unselect" : "select"}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                picked.includes(i)
                  ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-black"
                  : "border-[var(--border-c)] hover:bg-[var(--background)]"
              }`}
            >
              {i}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="mono mb-3 block text-[var(--muted-foreground)]">
          Budget range
        </label>
        <div className="flex flex-wrap gap-2">
          {budgets.map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => setBudget(b === budget ? null : b)}
              data-cursor={budget === b ? "selected" : "pick"}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                budget === b
                  ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-black"
                  : "border-[var(--border-c)] hover:bg-[var(--background)]"
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="mono mb-3 block text-[var(--muted-foreground)]" htmlFor="message">
          The brief
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Where are you stuck? What does 'won' look like in 90 days?"
          className="w-full resize-none rounded-md border border-[var(--border-c)] bg-[var(--background)] p-4 text-sm outline-none transition-colors focus:border-[var(--color-accent)]"
        />
      </div>

      <div className="flex items-center justify-between gap-4">
        <p className="mono text-xs text-[var(--muted-foreground)]">
          We reply within 24h.
        </p>
        <Magnetic strength={0.3}>
          <button
            type="submit"
            disabled={status === "sending"}
            data-cursor="send"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 text-sm font-medium text-black disabled:opacity-70"
          >
            {status === "sending" ? "Sending…" : "Send brief"}
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>
        </Magnetic>
      </div>

      {status === "error" ? (
        <p className="mono text-xs text-red-500">
          Something broke. Email us instead at info@bricknclick.com.
        </p>
      ) : null}

      <p className="mono mt-4 border-t border-[var(--border-c)] pt-4 text-xs text-[var(--muted-foreground)]">
        Prefer WhatsApp?{" "}
        <a
          href="https://wa.me/919019508519?text=Hi%20Bricknclick%2C%20I%27d%20like%20to%20discuss%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="underline-grow text-[var(--color-accent)]"
        >
          +91 90195 08519 →
        </a>
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mono mb-2 block text-[var(--muted-foreground)]" htmlFor={name}>
        {label} {required ? <span className="text-[var(--color-accent)]">*</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-md border border-[var(--border-c)] bg-[var(--background)] p-4 text-sm outline-none transition-colors focus:border-[var(--color-accent)]"
      />
    </div>
  );
}
