import type { Metadata } from "next";
import Link from "next/link";
import { SplitReveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Plain-language Terms & Conditions for Bricknclick — what you can expect from the site and any engagement with us.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "4 June 2026";

export default function TermsPage() {
  return (
    <article>
      <section className="mx-auto max-w-7xl px-6 pt-40 pb-12">
        <span className="mono text-[var(--muted-foreground)]">
          [ Legal · Last updated {LAST_UPDATED} ]
        </span>
        <h1 className="display mt-6 text-[clamp(48px,9vw,160px)]">
          <SplitReveal text="Terms &" />
          <SplitReveal text="Conditions." delay={0.1} className="text-[var(--color-accent)]" />
        </h1>
        <p className="mt-10 max-w-3xl text-balance text-lg text-[var(--muted-foreground)] md:text-xl">
          Short version: use the site responsibly, don't misrepresent
          yourself, and remember that any actual engagement with us will be
          governed by a separate signed agreement (SOW or MSA) — not this
          page.
        </p>
      </section>

      <section className="mx-auto max-w-3xl space-y-12 px-6 pb-32">
        <Section title="1. Acceptance">
          <p>
            By visiting bricknclick.com (the "Site"), submitting a form,
            messaging us on WhatsApp, or otherwise contacting us, you agree
            to these Terms and our{" "}
            <Link href="/privacy" className="underline-grow text-[var(--color-accent)]">
              Privacy Policy
            </Link>
            . If you do not agree, please don't use the Site.
          </p>
        </Section>

        <Section title="2. About Bricknclick">
          <p>
            Bricknclick is a digital agency based in India offering
            performance ads, web &amp; product engineering, content &amp;
            brand systems, and AEO/GEO services to clients in India and
            abroad. Anything on this Site is for general information unless
            we've explicitly contracted with you.
          </p>
        </Section>

        <Section title="3. Services and engagements">
          <p>
            Pages describing our services, case studies, and metrics are
            illustrative — they describe past or typical engagements, not
            guarantees of future outcomes for you.
          </p>
          <p>
            If we engage, the work will be governed by a separate written
            agreement (Statement of Work, Master Services Agreement, or
            equivalent). That document — not this page — defines deliverables,
            timelines, fees, confidentiality, and ownership for our work
            together.
          </p>
          <p>
            No content on this Site constitutes a binding offer or contract
            until a signed agreement is in place.
          </p>
        </Section>

        <Section title="4. Intellectual property">
          <p>
            All content on the Site — including the brand mark, copy, code,
            design, case studies, and blog posts — is owned by Bricknclick or
            our clients (with permission) and protected by Indian and
            international copyright and trademark law.
          </p>
          <p>You may:</p>
          <ul>
            <li>Read the content for your own information</li>
            <li>Quote short excerpts with attribution and a link back</li>
            <li>Share links to our pages</li>
          </ul>
          <p>You may not:</p>
          <ul>
            <li>Republish significant portions without written permission</li>
            <li>Use our brand mark or visual assets in your own materials</li>
            <li>Train commercial AI models on our content without permission</li>
            <li>Misrepresent your relationship with us</li>
          </ul>
        </Section>

        <Section title="5. Your obligations">
          <p>When you use the Site or contact us, you agree to:</p>
          <ul>
            <li>Provide accurate information about yourself and your business</li>
            <li>Not use the Site to send spam, malware, or abusive content</li>
            <li>Not attempt to access systems, data, or features you weren't given access to</li>
            <li>Not scrape or systematically download content (the contact form is for genuine enquiries)</li>
          </ul>
        </Section>

        <Section title="6. Third-party links and tools">
          <p>
            We may link to third-party sites, embed third-party tools, or
            reference third-party services (e.g., Google, Meta, WhatsApp,
            Resend, Fontshare, Unsplash). We don't control those services
            and aren't responsible for their content, policies, or
            availability.
          </p>
        </Section>

        <Section title="7. Disclaimers">
          <p>
            The Site is provided "as-is" for general information. We make
            reasonable efforts to keep it accurate and current, but we don't
            warrant:
          </p>
          <ul>
            <li>That the Site will be available without interruption</li>
            <li>That all information is up-to-date or complete</li>
            <li>That marketing outcomes described in case studies will recur for any other client</li>
            <li>That any specific business result will follow from following our advice</li>
          </ul>
          <p>
            Marketing is variable. Past outcomes don't predict future ones.
            Any performance claim on this Site refers to a specific past
            engagement and is not a forecast for yours.
          </p>
        </Section>

        <Section title="8. Limitation of liability">
          <p>
            To the maximum extent permitted by Indian law, Bricknclick is
            not liable for any indirect, incidental, special, consequential,
            or punitive damages arising from your use of the Site — including
            lost profits, lost data, or lost opportunities.
          </p>
          <p>
            Where liability cannot be excluded, our total liability for any
            claim related to the Site (separate from a signed engagement
            agreement) is capped at the amount you have paid us in the prior
            12 months, or ₹10,000 — whichever is greater.
          </p>
        </Section>

        <Section title="9. Indemnity">
          <p>
            You agree to indemnify and hold Bricknclick harmless from any
            claim, loss, or expense arising from your violation of these
            Terms, your misuse of the Site, or your infringement of
            third-party rights through your use of the Site.
          </p>
        </Section>

        <Section title="10. Governing law and disputes">
          <p>
            These Terms are governed by the laws of India. Any dispute
            arising from them will be subject to the exclusive jurisdiction
            of courts in Bengaluru, Karnataka, India.
          </p>
          <p>
            We prefer to resolve issues directly. Before any formal dispute,
            please email{" "}
            <a href="mailto:info@bricknclick.com" className="underline-grow text-[var(--color-accent)]">
              info@bricknclick.com
            </a>{" "}
            so we can try to fix it.
          </p>
        </Section>

        <Section title="11. Changes to these Terms">
          <p>
            We may update these Terms when the Site changes or the law
            changes. Material updates will reflect a new "last updated" date
            at the top. Continuing to use the Site after an update means
            you accept the updated Terms.
          </p>
        </Section>

        <Section title="12. Severability">
          <p>
            If any clause of these Terms is found unenforceable, the rest of
            the Terms remain in full effect.
          </p>
        </Section>

        <Section title="13. Contact">
          <p>
            Questions about these Terms:{" "}
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
            <Link href="/privacy" className="underline-grow text-[var(--foreground)]">
              Privacy Policy →
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
