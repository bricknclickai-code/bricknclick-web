import type { Metadata } from "next";
import Link from "next/link";
import { SplitReveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Bricknclick collects, uses, and protects your data. Plain-language summary of what we keep, why, and your rights under DPDP and GDPR.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "4 June 2026";

export default function PrivacyPage() {
  return (
    <article>
      <section className="mx-auto max-w-7xl px-6 pt-40 pb-12">
        <span className="mono text-[var(--muted-foreground)]">
          [ Legal · Last updated {LAST_UPDATED} ]
        </span>
        <h1 className="display mt-6 text-[clamp(48px,9vw,160px)]">
          <SplitReveal text="Privacy" />
          <SplitReveal text="Policy." delay={0.1} className="text-[var(--color-accent)]" />
        </h1>
        <p className="mt-10 max-w-3xl text-balance text-lg text-[var(--muted-foreground)] md:text-xl">
          Short version: we collect what we need to talk to you, deliver the
          work, and keep the lights on. We don't sell your data. We don't share
          it without a clear reason. You can ask us to delete it any time.
        </p>
      </section>

      <section className="mx-auto max-w-3xl space-y-12 px-6 pb-32">
        <Section title="1. Who we are">
          <p>
            Bricknclick is a digital agency operating from India. When this
            policy says "we", "us", or "Bricknclick", that's who we mean.
          </p>
          <p>
            For any privacy question, write to{" "}
            <a href="mailto:info@bricknclick.com" className="underline-grow text-[var(--color-accent)]">
              info@bricknclick.com
            </a>
            .
          </p>
        </Section>

        <Section title="2. What we collect">
          <p>
            <strong>From the contact form:</strong> your name, email, company
            name (if you give it), the message you send, what you select for
            "interests" and "budget", and a timestamp.
          </p>
          <p>
            <strong>From WhatsApp messages or direct email:</strong> the
            content you choose to send us, plus your contact details on the
            sender side of the message.
          </p>
          <p>
            <strong>From your browser, automatically:</strong> standard
            request metadata like IP address, user-agent string, referrer, and
            timestamps. We use this to debug the site and detect spam, not to
            profile you.
          </p>
          <p>
            <strong>Analytics cookies:</strong> if we run web analytics (e.g.,
            Plausible or GA4) on a given page, that tool may set anonymous
            cookies to count visits. We don't combine analytics data with your
            contact-form submissions.
          </p>
        </Section>

        <Section title="3. Why we collect it">
          <ul>
            <li>To reply to your enquiry and discuss whether we should work together</li>
            <li>To deliver a project if we engage (invoicing, communication, account access)</li>
            <li>To keep records for tax, accounting, and contract obligations</li>
            <li>To improve the site (debugging, security, anti-spam)</li>
          </ul>
          <p>
            That's the entire list. We do not use your data for retargeting
            ads, profile-building, or third-party marketing.
          </p>
        </Section>

        <Section title="4. Who we share it with">
          <p>
            We share the minimum needed with the tools that make our work
            possible:
          </p>
          <ul>
            <li><strong>Email infrastructure</strong> — Gmail / Google Workspace, for delivering and responding to your message</li>
            <li><strong>Hosting & CDN</strong> — Vercel and Cloudflare-style providers, for serving the site</li>
            <li><strong>Spreadsheet / CRM</strong> — Google Sheets or our CRM, for tracking your enquiry through to a reply</li>
            <li><strong>Accounting / legal</strong> — if you become a client, our accountants and lawyers may see your details for tax and contract purposes</li>
          </ul>
          <p>
            We do not sell your data. We do not pass it to advertisers. We do
            not buy data about you from third parties.
          </p>
        </Section>

        <Section title="5. How long we keep it">
          <p>
            Contact-form submissions and email threads: up to 24 months from
            the last interaction. If we never engage, we delete on request or
            during our annual cleanup.
          </p>
          <p>
            Client engagement records (contracts, invoices, deliverables): as
            long as Indian accounting and tax law requires us to (currently
            8 years for tax records).
          </p>
        </Section>

        <Section title="6. Your rights">
          <p>You can ask us, at any time, to:</p>
          <ul>
            <li>See what data we hold about you</li>
            <li>Correct anything inaccurate</li>
            <li>Delete it (subject to legal-retention rules above)</li>
            <li>Stop processing it for any specific purpose</li>
            <li>Export it in a portable format</li>
          </ul>
          <p>
            Email{" "}
            <a href="mailto:info@bricknclick.com" className="underline-grow text-[var(--color-accent)]">
              info@bricknclick.com
            </a>{" "}
            with the request. We'll respond within 30 days.
          </p>
          <p>
            If you're in India, these rights are protected under the Digital
            Personal Data Protection Act, 2023. If you're in the EU/UK, similar
            rights exist under GDPR / UK GDPR.
          </p>
        </Section>

        <Section title="7. Cookies">
          <p>
            We use strictly necessary cookies for site functionality (theme
            preference, basic session state). If we add web analytics, we'll
            do so with a tool that doesn't require cross-site tracking
            cookies. We don't use third-party ad-targeting cookies on this
            site.
          </p>
          <p>
            Your browser settings can block or clear cookies any time. Doing
            so won't break the site beyond minor preferences resetting.
          </p>
        </Section>

        <Section title="8. Security">
          <p>
            Reasonable measures only: HTTPS everywhere, modern auth on the
            tools we use, access limited to the people who need it, and
            standard practice on secrets management. We are not a bank, and
            no agency-grade setup is breach-proof — but we don't store
            anything we don't need to.
          </p>
        </Section>

        <Section title="9. Children">
          <p>
            This site is for businesses and adults. We don't knowingly collect
            data from anyone under 18. If you believe a child has sent us
            information, tell us and we'll delete it.
          </p>
        </Section>

        <Section title="10. Changes to this policy">
          <p>
            We may update this page when the law, our tools, or our practices
            change. Material changes will get a new "last updated" date at
            the top. Continuing to use the site after an update means you
            accept the updated policy.
          </p>
        </Section>

        <Section title="11. Contact">
          <p>
            Privacy questions or rights requests:{" "}
            <a href="mailto:info@bricknclick.com" className="underline-grow text-[var(--color-accent)]">
              info@bricknclick.com
            </a>
          </p>
          <p>
            Or via WhatsApp:{" "}
            <a
              href="https://wa.me/919019508519"
              className="underline-grow text-[var(--color-accent)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              +91 90195 08519
            </a>
          </p>
        </Section>

        <div className="border-t border-[var(--border-c)] pt-8">
          <p className="mono text-[var(--muted-foreground)]">
            See also:{" "}
            <Link href="/terms" className="underline-grow text-[var(--foreground)]">
              Terms &amp; Conditions →
            </Link>
          </p>
        </div>
      </section>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="display text-2xl md:text-3xl">{title}</h2>
      <div className="prose-like space-y-4 text-[var(--muted-foreground)] md:text-lg">
        {children}
      </div>
    </section>
  );
}
