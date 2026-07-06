import Link from "next/link";
import { Reveal, SplitReveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";
import { BigCta } from "@/components/home/big-cta";
import { projects, builderProjects } from "@/lib/data";
import { eoiLabel } from "@/lib/eoi";

export type AgencyLandingConfig = {
  /** "India" | "Bangalore" — drives copy, schema areaServed, and canonical. */
  place: string;
  path: string; // e.g. "/real-estate-marketing-agency"
  eyebrow: string; // "[ Real estate marketing agency · India ]"
  h1: string;
  intro: string;
  faqs: { q: string; a: string }[];
  /** Optional link up to the primary page (used by the geo variant). */
  primaryLink?: { href: string; label: string };
};

const heroStats = [
  { value: "50+", label: "EOIs from one Meta campaign" },
  { value: "~17×", label: "best blended ROAS" },
  { value: "3K+", label: "leads on ₹3L ad spend" },
  { value: "80", label: "acres sold out · one project" },
];

const pillars = [
  {
    n: "001",
    title: "Real estate performance ads",
    body: "Meta, Google, and Click-to-WhatsApp funnels built to produce site visits and EOIs — not vanity clicks. We test creative like product experiments and report on the one number you care about: cost per qualified lead.",
    keyword: "Meta & Google ads for real estate",
  },
  {
    n: "002",
    title: "Project websites & microsites",
    body: "Next.js project microsites and platforms engineered for sub-1s load, SEO, and lead capture. We migrate slow WordPress sites and build the search-surround networks that catch buyers at the moment of intent.",
    keyword: "Real estate website development",
  },
  {
    n: "003",
    title: "SEO & content that ranks projects",
    body: "SEO content engines, neighbourhood guides, and short-form video that rank your projects organically and compound leads long after the ad budget stops. One reel produced 50+ inbound leads on its own.",
    keyword: "Real estate SEO & content marketing",
  },
  {
    n: "004",
    title: "AEO & GEO for the AI search era",
    body: "Buyers now ask ChatGPT, Perplexity, and Google AI Overviews which builder to trust. We make sure your brand and projects get cited inside those answers — a lever most Indian real estate marketers haven't touched yet.",
    keyword: "AI search optimization for real estate",
  },
];

const differentiators = [
  {
    h: "We own the whole funnel",
    b: "Ads, website, content, and CRM under one accountable roof. No agency-vendor finger-pointing when a lead leaks between the ad and the sales call.",
  },
  {
    h: "Receipts, not decks",
    b: "Every claim on this page is a real engagement with real numbers. We grade ourselves on units moved and EOIs booked, not impressions.",
  },
  {
    h: "Built for Indian real estate",
    b: "Grade A builder projects, plotted developments, farmland, and villas — for builders, brokers, and channel partners. We know the RERA-aware, Click-to-WhatsApp reality of selling property in India.",
  },
  {
    h: "IIM-led senior team",
    b: "Strategy, design, engineering, and media run by a senior team that operates like your in-house unit — not a junior pod learning on your budget.",
  },
];

const processSteps = [
  { n: "01", h: "Audit", b: "We map your projects, funnel, and current cost per lead, then find where money is leaking." },
  { n: "02", h: "Build", b: "Microsite or platform, tracking, creative, and content — the machine that turns spend into EOIs." },
  { n: "03", h: "Launch", b: "Full-funnel campaigns go live with weekly creative tests and a dashboard you actually read." },
  { n: "04", h: "Compound", b: "Organic SEO + AEO/GEO stack on top of paid, so leads keep arriving after the budget stops." },
];

export function AgencyLanding({ config }: { config: AgencyLandingConfig }) {
  const { place } = config;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pt-40 pb-16">
        <span className="mono text-[var(--muted-foreground)]">{config.eyebrow}</span>
        <h1 className="display mt-6 text-[clamp(40px,7vw,104px)] leading-[0.95] tracking-[-0.03em]">
          <SplitReveal text={config.h1} />
        </h1>
        <p className="mt-8 max-w-2xl text-balance text-lg text-[var(--muted-foreground)] md:text-xl">
          {config.intro}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            data-cursor="start"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-[var(--foreground)] px-6 text-sm font-medium text-[var(--background)] transition-transform active:scale-[0.97]"
          >
            Start a project <span aria-hidden>→</span>
          </Link>
          <Link
            href="/work"
            data-cursor="the work"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-[var(--border-c)] px-6 text-sm font-medium transition-colors hover:bg-[var(--card)]"
          >
            See the work
          </Link>
        </div>

        {/* Stat strip */}
        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-[var(--border-c)] pt-10 md:grid-cols-4">
          {heroStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <p className="display text-[clamp(36px,5vw,64px)] leading-none text-[var(--color-accent)]">
                <CountUp value={s.value} />
              </p>
              <p className="mono mt-3 text-[11px] leading-snug text-[var(--muted-foreground)]">
                {eoiLabel(s.label)}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Trusted by (builder projects) ────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <p className="mono text-[var(--muted-foreground)]">
          [ Builder projects we've run paid funnels on ]
        </p>
        <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-lg text-[var(--foreground)]/85 md:text-xl">
          {builderProjects.map((b) => (
            <li key={b} className="display tracking-[-0.02em]">
              {b}
              <span aria-hidden className="ml-6 text-[var(--color-accent)]">·</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── What a real estate marketing agency should do ────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="mono text-[var(--muted-foreground)]">[ What we do ]</span>
          <h2 className="display mt-4 text-[clamp(32px,5vw,72px)] leading-[0.98]">
            <SplitReveal text={`A full-stack real estate`} />
            <SplitReveal text={`marketing agency.`} delay={0.1} />
          </h2>
          <p className="mt-6 text-lg text-[var(--muted-foreground)]">
            Most agencies do one slice — ads, or a website, or content — and hand you
            the integration problem. As a real estate marketing agency in {place}, we
            run all four so the funnel actually holds together.
          </p>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-14 md:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.06}>
              <article className="border-t border-[var(--border-c)] pt-6">
                <span className="mono text-[var(--color-accent)]">{p.n}</span>
                <h3 className="display mt-3 text-2xl tracking-tight md:text-3xl">{p.title}</h3>
                <p className="mono mt-1 text-[11px] text-[var(--muted-foreground)]">{p.keyword}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--muted-foreground)]">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/services"
            data-cursor="services"
            className="mono group inline-flex items-center gap-3 text-sm font-medium text-[var(--color-accent)]"
          >
            Explore all services
            <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
          </Link>
        </div>
      </section>

      {/* ── Proof / case studies ─────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <span className="mono text-[var(--muted-foreground)]">[ Proof ]</span>
        <h2 className="display mt-4 text-[clamp(32px,5vw,72px)]">
          <SplitReveal text="Real projects. Real units moved." />
        </h2>
        <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <Link href={`/work/${p.slug}`} data-cursor="read case" className="group block">
                <div className="flex items-baseline justify-between gap-4 border-t-2 pt-5" style={{ borderColor: p.accent }}>
                  <h3 className="display text-3xl tracking-tight transition-transform duration-500 group-hover:translate-x-1 md:text-4xl">
                    {p.client}
                  </h3>
                  <span className="mono shrink-0 text-[var(--muted-foreground)]">{p.year}</span>
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--muted-foreground)]">
                  {p.summary.split(".").slice(0, 2).join(".")}.
                </p>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {p.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="display text-2xl leading-none" style={{ color: p.accent }}>{m.value}</p>
                      <p className="mono mt-2 text-[10px] leading-snug text-[var(--muted-foreground)]">{eoiLabel(m.label)}</p>
                    </div>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Why us ────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
          <div>
            <span className="mono text-[var(--muted-foreground)]">[ Why {place} builders pick us ]</span>
            <h2 className="display mt-4 text-[clamp(32px,4.5vw,64px)] leading-[0.98]">
              <SplitReveal text="Why us." />
            </h2>
          </div>
          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {differentiators.map((d, i) => (
              <Reveal key={d.h} delay={i * 0.06}>
                <h3 className="display text-xl md:text-2xl">{d.h}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted-foreground)]">{d.b}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <span className="mono text-[var(--muted-foreground)]">[ How it works ]</span>
        <div className="mt-8 grid gap-x-10 gap-y-10 md:grid-cols-4">
          {processSteps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <div className="border-t border-[var(--border-c)] pt-5">
                <span className="display text-4xl text-[var(--color-accent)]">{s.n}</span>
                <h3 className="display mt-3 text-xl">{s.h}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[var(--muted-foreground)]">{s.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── FAQ (rendered + FAQPage schema) ──────────────────── */}
      <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <h2 className="display text-[clamp(32px,5vw,64px)]">
          <SplitReveal text="Questions, answered." />
        </h2>
        <dl className="mt-12 divide-y divide-[var(--border-c)] border-y border-[var(--border-c)]">
          {config.faqs.map((f) => (
            <div key={f.q} className="py-6">
              <dt className="display text-xl md:text-2xl">{f.q}</dt>
              <dd className="mt-3 text-[15px] leading-relaxed text-[var(--foreground)]/85 md:text-lg">{f.a}</dd>
            </div>
          ))}
        </dl>

        {config.primaryLink ? (
          <p className="mono mt-10 text-[var(--muted-foreground)]">
            Serving builders across India?{" "}
            <Link href={config.primaryLink.href} className="underline-grow text-[var(--color-accent)]">
              {config.primaryLink.label}
            </Link>
          </p>
        ) : null}
      </section>

      <BigCta />
    </>
  );
}
