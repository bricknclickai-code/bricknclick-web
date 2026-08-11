import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal, SplitReveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";
import { Magnetic } from "@/components/magnetic";
import { eoiLabel } from "@/lib/eoi";
import {
  adCreatives,
  alsoHandled,
  audiences,
  brochureCases,
  brochureServices,
  buildPricing,
  credentials,
  creativeFormats,
  differentiators,
  engagementSteps,
  heroStats,
  liveInAccounts,
  performanceStats,
  positioning,
  testimonials,
  tiers,
} from "@/lib/brochure";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bricknclick.ai";
const PATH = "/company-profile";

export const metadata: Metadata = {
  title: "Company Profile & Portfolio 2026",
  description:
    "Bricknclick company profile — a performance marketing agency built only for real estate in Bengaluru. ₹2Cr+ ad spend managed, 100+ projects marketed, 50+ live campaigns, with case studies, live dashboards and retainer pricing.",
  alternates: { canonical: PATH },
  openGraph: {
    type: "website",
    title: "Bricknclick — Company Profile & Portfolio 2026",
    description:
      "Built only for real estate. ₹2Cr+ ad spend managed, 100+ projects marketed, 50+ live campaigns across Bengaluru apartments, plots, villas and farmland.",
    url: `${SITE}${PATH}`,
  },
};

/* 12 of the 15 dashboard screenshots — a 3×4 wall that reads as a grid. */
const dashboards = Array.from({ length: 12 }, (_, i) => i + 1);

export default function CompanyProfilePage() {
  return (
    <>
      {/* ── 00 · Cover ───────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden">
        <div
          aria-hidden
          className="orb-bg pointer-events-none absolute -top-40 left-1/2 -z-10 h-[560px] w-[900px] -translate-x-1/2 opacity-60"
        />
        <div className="mx-auto max-w-7xl px-6 pt-40 pb-20">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <span className="mono flex items-center gap-2 text-[var(--muted-foreground)]">
              <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              Built only for real estate · Bengaluru
            </span>
            <span className="mono text-[var(--muted-foreground)]">
              Company profile &amp; portfolio · 2026
            </span>
          </div>

          <h1 className="display mt-8 text-[clamp(48px,9vw,140px)] leading-[0.9]">
            <SplitReveal text="We grow" />
            <SplitReveal text="real estate" delay={0.08} />
            <SplitReveal text="brands in" delay={0.16} />
            <SplitReveal
              text="Bangalore."
              delay={0.24}
              className="text-[var(--color-accent)]"
            />
          </h1>

          <p className="mt-10 max-w-2xl text-balance text-lg text-[var(--muted-foreground)] md:text-xl">
            A performance marketing agency built only for real estate — we turn
            ad spend into booked site visits for builders, channel partners and
            brokers.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic strength={0.3}>
              <Link
                href="/contact"
                data-cursor="let's talk"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 text-sm font-medium text-black transition-transform active:scale-[0.97]"
              >
                Get a free project teardown <span aria-hidden>→</span>
              </Link>
            </Magnetic>
            <Link
              href="#engagements"
              data-cursor="pricing"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-[var(--border-c)] px-6 text-sm font-medium transition-colors hover:bg-[var(--card)]"
            >
              See retainers
            </Link>
          </div>

          <ul className="mt-16 grid gap-3 sm:grid-cols-3 md:gap-5">
            {heroStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <li className="rounded-2xl bg-[var(--foreground)] p-6 text-[var(--background)] md:p-8">
                  <p className="display text-4xl leading-none md:text-5xl lg:text-6xl">
                    <CountUp value={s.value} />
                  </p>
                  <p className="mono mt-3 text-[10px] text-[var(--background)]/70 md:text-[11px]">
                    {s.label}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>

          <p className="mt-10 border-t border-[var(--border-c)] pt-6 text-sm text-[var(--muted-foreground)]">
            <strong className="text-[var(--foreground)]">50+ live campaigns</strong>{" "}
            running across Bengaluru apartments, plots, villas &amp; farmland.
          </p>
        </div>
      </section>

      {/* ── 01 · Who we are ──────────────────────────────────── */}
      <section className="border-t border-[var(--border-c)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <span className="mono text-[var(--muted-foreground)]">[ 01 — Who we are ]</span>
          <h2 className="display mt-4 max-w-4xl text-[clamp(32px,5.5vw,80px)] leading-[0.95]">
            <SplitReveal text="A real estate marketing team," />
            <SplitReveal text="not a generalist agency." delay={0.1} />
          </h2>
          <p className="mt-8 max-w-3xl text-lg text-[var(--muted-foreground)]">
            Bricknclick exists for one category. Every campaign we run, every
            landing page we build and every creative we cut is for a plot, a
            tower, a villa or a farmland project — mostly in and around
            Bengaluru. That focus is why our cost per lead keeps falling while
            our clients&apos; site visits keep rising.
          </p>

          <ul className="mt-14 grid gap-4 md:grid-cols-2 md:gap-5">
            {positioning.map((p, i) => (
              <Reveal key={p.h} delay={i * 0.06}>
                <li
                  className={`h-full rounded-2xl border p-7 md:p-9 ${
                    p.feature
                      ? "border-transparent bg-[var(--foreground)] text-[var(--background)]"
                      : "border-[var(--border-c)] bg-[var(--card)]"
                  }`}
                >
                  <h3 className="display text-xl md:text-2xl">{p.h}</h3>
                  <p
                    className={`mt-4 text-[15px] leading-relaxed ${
                      p.feature
                        ? "text-[var(--background)]/70"
                        : "text-[var(--muted-foreground)]"
                    }`}
                  >
                    {p.b}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>

          {/* Who we work with */}
          <div className="mt-6 rounded-2xl bg-[var(--card)] p-7 md:p-9">
            <span className="mono text-[var(--muted-foreground)]">[ Who we work with ]</span>
            <div className="mt-6 grid gap-8 md:grid-cols-3">
              {audiences.map((a) => (
                <div key={a.h}>
                  <h3 className="display text-lg md:text-xl">{a.h}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted-foreground)]">
                    {a.b}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Credentials */}
          <div className="mt-16">
            <span className="mono text-[var(--muted-foreground)]">[ Credentials at a glance ]</span>
            <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-[var(--border-c)] pt-10 md:grid-cols-4">
              {credentials.map((c, i) => (
                <Reveal key={c.label} delay={i * 0.06}>
                  <p className="display text-[clamp(28px,4vw,56px)] leading-none text-[var(--color-accent)]">
                    {c.value === "Google + Meta" ? c.value : <CountUp value={c.value} />}
                  </p>
                  <p className="mono mt-3 text-[11px] leading-snug text-[var(--muted-foreground)]">
                    {c.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 02 · What we do ──────────────────────────────────── */}
      <section id="services" className="border-t border-[var(--border-c)] bg-[var(--card)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <span className="mono text-[var(--muted-foreground)]">[ 02 — What we do ]</span>
          <h2 className="display mt-4 max-w-3xl text-[clamp(32px,5.5vw,80px)] leading-[0.95]">
            <SplitReveal text="Everything to take a project" />
            <SplitReveal
              text="from launch to sold out."
              delay={0.1}
              className="text-[var(--color-accent)]"
            />
          </h2>
          <p className="mt-8 max-w-2xl text-lg text-[var(--muted-foreground)]">
            One team for ads, websites, landing pages and SEO — built around how
            real estate actually sells in Bengaluru.
          </p>

          <ul className="mt-14 divide-y divide-[var(--border-c)] border-y border-[var(--border-c)]">
            {brochureServices.map((s, i) => (
              <li key={s.n}>
                <Reveal delay={i * 0.05}>
                  <article className="grid gap-6 py-10 md:grid-cols-12 md:gap-10">
                    <div className="md:col-span-3">
                      <span className="mono text-[var(--color-accent)]">Service {s.n}</span>
                    </div>
                    <div className="md:col-span-9">
                      <h3 className="display text-2xl tracking-tight md:text-4xl">{s.title}</h3>
                      <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[var(--muted-foreground)] md:text-base">
                        {s.body}
                      </p>
                      <ul className="mt-6 flex flex-wrap gap-2">
                        {s.tags.map((t) => (
                          <li
                            key={t}
                            className="mono rounded-full border border-[var(--border-c)] bg-[var(--background)] px-3 py-1.5 text-[10px] text-[var(--muted-foreground)]"
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>

          <p className="mono mt-8 text-[var(--muted-foreground)]">
            Also handled — {alsoHandled.join(" · ")}
          </p>
        </div>
      </section>

      {/* ── 03 · Why bricknclick ─────────────────────────────── */}
      <section className="grain relative isolate overflow-hidden bg-[var(--foreground)] text-[var(--background)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <span className="mono text-[var(--background)]/60">[ 03 — Why bricknclick ]</span>
          <h2 className="display mt-4 max-w-4xl text-[clamp(32px,5.5vw,80px)] leading-[0.95]">
            <SplitReveal text="Most agencies sell leads." />
            <SplitReveal
              text="We sell site visits."
              delay={0.1}
              className="text-[var(--color-accent)]"
            />
          </h2>
          <p className="mt-8 max-w-2xl text-lg text-[var(--background)]/70">
            Channel partners don&apos;t lose money on ad spend. They lose it on
            leads that never pick up the phone. Here is how we&apos;re built
            differently.
          </p>

          <ul className="mt-14 grid gap-4 md:grid-cols-2 md:gap-5">
            {differentiators.map((d, i) => (
              <Reveal key={d.h} delay={i * 0.05}>
                <li className="h-full rounded-2xl bg-white/[0.06] p-7 md:p-8">
                  <h3 className="display text-lg text-[var(--color-accent)] md:text-xl">{d.h}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--background)]/70">
                    {d.b}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>

          {/* How an engagement runs */}
          <div className="mt-6 rounded-2xl bg-[var(--background)] p-7 text-[var(--foreground)] md:p-10">
            <span className="mono text-[var(--muted-foreground)]">[ How an engagement runs ]</span>
            <div className="mt-8 grid gap-8 md:grid-cols-4">
              {engagementSteps.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.06}>
                  <div className="border-t border-[var(--border-c)] pt-5">
                    <span className="mono text-[var(--color-accent)]">Step {s.n}</span>
                    <h3 className="display mt-3 text-xl">{s.h}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-[var(--muted-foreground)]">
                      {s.b}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <p className="mt-10 border-t border-white/10 pt-6 text-sm text-[var(--background)]/70">
            <strong className="text-[var(--background)]">50+ live campaigns</strong> and{" "}
            <strong className="text-[var(--background)]">100+ projects marketed</strong> —
            apartments, plots, villas and managed farmland, for builders and
            channel partners across Bengaluru.
          </p>
        </div>
      </section>

      {/* ── 04 / 05 · Case studies ───────────────────────────── */}
      <section id="work" className="border-t border-[var(--border-c)]">
        {brochureCases.map((c, i) => (
          <article
            key={c.slug}
            className={`mx-auto max-w-7xl px-6 py-20 md:py-28 ${
              i > 0 ? "border-t border-[var(--border-c)]" : ""
            }`}
          >
            <span className="mono text-[var(--muted-foreground)]">[ {c.eyebrow} ]</span>
            <h2 className="display mt-4 text-[clamp(36px,6vw,88px)] leading-[0.95]">
              <SplitReveal text={c.client} />
            </h2>
            <p className="display mt-4 text-xl md:text-3xl" style={{ color: c.accent }}>
              {c.headline}
            </p>
            <p className="mt-6 max-w-3xl text-lg text-[var(--muted-foreground)]">{c.summary}</p>

            <Reveal delay={0.1}>
              <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-2xl border border-[var(--border-c)] bg-[var(--card)]">
                <Image
                  src={c.image}
                  alt={`${c.client} — platform built by Bricknclick`}
                  fill
                  sizes="(min-width: 1280px) 1200px, 100vw"
                  className="object-cover"
                />
                <span className="mono absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1.5 text-[10px] text-white backdrop-blur">
                  0{i + 1} / 02
                </span>
                <span className="mono absolute right-4 top-4 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1.5 text-[10px] text-white backdrop-blur">
                  <span
                    className="inline-block h-1.5 w-1.5 rounded-full"
                    style={{ background: c.accent }}
                  />
                  Ongoing
                </span>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {c.metrics.map((m, mi) => (
                <Reveal key={m.label} delay={mi * 0.06}>
                  <div className="border-t-2 pt-5" style={{ borderColor: c.accent }}>
                    <p
                      className="display text-[clamp(36px,5vw,64px)] leading-none"
                      style={{ color: c.accent }}
                    >
                      <CountUp value={m.value} />
                    </p>
                    <p className="mono mt-3 text-[11px] leading-snug text-[var(--muted-foreground)]">
                      {eoiLabel(m.label)}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-12 grid gap-8 rounded-2xl bg-[var(--card)] p-7 md:grid-cols-3 md:p-9">
              {c.columns.map((col) => (
                <div key={col.h}>
                  <h3 className="mono" style={{ color: c.accent }}>
                    {col.h}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted-foreground)]">
                    {col.b}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {c.tags.map((t) => (
                <span
                  key={t}
                  className="mono rounded-full border border-[var(--border-c)] px-3 py-1.5 text-[10px] text-[var(--muted-foreground)]"
                >
                  {t}
                </span>
              ))}
              <Link
                href={`/work/${c.slug}`}
                data-cursor="read case"
                className="mono group ml-auto inline-flex items-center gap-3 text-[var(--color-accent)]"
              >
                Read the full case
                <span
                  aria-hidden
                  className="inline-block transition-transform duration-300 group-hover:translate-x-2"
                >
                  →
                </span>
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* ── 06 · Portfolio ───────────────────────────────────── */}
      <section className="grain relative isolate overflow-hidden bg-[var(--foreground)] text-[var(--background)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <span className="mono text-[var(--background)]/60">[ 06 — Portfolio ]</span>
          <h2 className="display mt-4 text-[clamp(32px,5.5vw,80px)] leading-[0.95]">
            <SplitReveal text="Real campaigns." />
            <SplitReveal text="Real projects." delay={0.1} />
          </h2>
          <p className="mt-8 max-w-2xl text-lg text-[var(--background)]/70">
            Ad creatives we&apos;ve produced and run for leading Bengaluru
            developments — performance video, statics and carousels cut for
            lead-gen.
          </p>

          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
            {adCreatives.map((a, i) => {
              const body = (
                <>
                  <span className="mono text-[var(--color-accent)]">{a.kind}</span>
                  <h3 className="display mt-3 text-xl">{a.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[var(--background)]/60">
                    {a.body}
                  </p>
                </>
              );
              return (
                <Reveal key={a.title} delay={i * 0.05}>
                  <li className="h-full">
                    {a.url ? (
                      <a
                        href={a.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="watch"
                        className="block h-full rounded-2xl bg-white/[0.06] p-7 transition-colors hover:bg-white/[0.12]"
                      >
                        {body}
                        <span className="mono mt-5 inline-flex items-center gap-2 text-[var(--background)]/70">
                          Watch <span aria-hidden>→</span>
                        </span>
                      </a>
                    ) : (
                      <div className="h-full rounded-2xl bg-white/[0.06] p-7">{body}</div>
                    )}
                  </li>
                </Reveal>
              );
            })}
          </ul>

          <div className="mt-6 grid gap-8 rounded-2xl bg-white/[0.06] p-7 md:grid-cols-3 md:p-9">
            {creativeFormats.map((f) => (
              <div key={f.h}>
                <h3 className="mono text-[var(--color-accent)]">{f.h}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--background)]/70">
                  {f.b}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <span className="mono text-[var(--background)]/60">[ Also live in our accounts ]</span>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {liveInAccounts.map((p) => (
                <li
                  key={p}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm text-[var(--background)]/85"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 07 · Live performance ────────────────────────────── */}
      <section className="border-t border-[var(--border-c)] bg-[var(--card)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <span className="mono text-[var(--muted-foreground)]">[ 07 — Live performance ]</span>
          <h2 className="display mt-4 text-[clamp(40px,7vw,108px)]">
            <SplitReveal text="Receipts," />
            <SplitReveal text="not slides." delay={0.1} className="text-[var(--color-accent)]" />
          </h2>
          <p className="mt-8 max-w-2xl text-lg text-[var(--muted-foreground)]">
            A snapshot of live Google &amp; Meta ad performance across our
            Bengaluru real-estate book of work. The screenshots below are taken
            straight from the accounts.
          </p>

          <ul className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 md:gap-4">
            {dashboards.map((n, i) => (
              <Reveal key={n} delay={Math.min(i, 8) * 0.04}>
                <li className="group relative aspect-[4/3] overflow-hidden rounded-md border border-[var(--border-c)] bg-[var(--background)]">
                  <Image
                    src={`/campaign-ss/img${n}.jpeg`}
                    alt={`Live Google or Meta Ads campaign dashboard ${n}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="mono m-3 rounded-full bg-black/60 px-2 py-1 text-[10px] text-white backdrop-blur">
                      Live · #{String(n).padStart(2, "0")}
                    </span>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>

          <div className="mt-10 flex justify-end">
            <Link href="/work" data-cursor="the work" className="mono underline-grow">
              See all 15 dashboards <span aria-hidden>→</span>
            </Link>
          </div>

          <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
            {performanceStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <li className="rounded-2xl bg-[var(--foreground)] p-6 text-[var(--background)] md:p-8">
                  <p className="display text-3xl leading-none md:text-4xl lg:text-5xl">
                    {s.value}
                  </p>
                  <p className="mono mt-3 text-[10px] text-[var(--background)]/70 md:text-[11px]">
                    {s.label}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>

          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-[var(--muted-foreground)]">
            Our lowest costs come from filtered lead flows — OTP-verified numbers
            and conditional-logic forms that drop unqualified enquiries before
            they reach your sales team, bringing effective cost per usable lead
            down to ₹30–50 on the right project. Figures as reported in Google
            Ads &amp; Meta Ads Manager.
          </p>
        </div>
      </section>

      {/* ── 08 · Engagements ─────────────────────────────────── */}
      <section id="engagements" className="border-t border-[var(--border-c)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <span className="mono text-[var(--muted-foreground)]">[ 08 — Engagements ]</span>
          <h2 className="display mt-4 max-w-3xl text-[clamp(32px,5.5vw,80px)] leading-[0.95]">
            <SplitReveal text="Retainers that match" />
            <SplitReveal text="how fast you want to sell." delay={0.1} />
          </h2>
          <p className="mt-8 max-w-2xl text-lg text-[var(--muted-foreground)]">
            Monthly management fee. Ad spend is billed directly to your own
            accounts, so every rupee of media stays visible to you.
          </p>

          <ul className="mt-14 grid gap-4 md:grid-cols-3 md:gap-5">
            {tiers.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <li
                  className={`flex h-full flex-col rounded-2xl border p-7 md:p-9 ${
                    t.featured
                      ? "border-transparent bg-[var(--foreground)] text-[var(--background)] md:-mt-4 md:pb-12"
                      : "border-[var(--border-c)] bg-[var(--card)]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`mono ${
                        t.featured ? "text-[var(--background)]/60" : "text-[var(--muted-foreground)]"
                      }`}
                    >
                      {t.n}
                    </span>
                    {t.featured ? (
                      <span className="mono rounded-full bg-[var(--color-accent)] px-3 py-1 text-[10px] text-black">
                        Most taken
                      </span>
                    ) : null}
                  </div>

                  <h3 className="display mt-5 text-2xl">{t.name}</h3>
                  <p className="display mt-3 text-[clamp(32px,4vw,52px)] leading-none text-[var(--color-accent)]">
                    {t.price}
                    <span className="text-lg text-current opacity-80">{t.per}</span>
                  </p>
                  <p
                    className={`mt-4 text-[15px] ${
                      t.featured ? "text-[var(--background)]/70" : "text-[var(--muted-foreground)]"
                    }`}
                  >
                    {t.blurb}
                  </p>

                  <ul className="mt-7 space-y-3 text-[15px]">
                    {t.includes.map((inc) => (
                      <li key={inc} className="flex gap-3">
                        <span aria-hidden className="text-[var(--color-accent)]">
                          ·
                        </span>
                        <span className={t.featured ? "" : "text-[var(--foreground)]/85"}>
                          {inc}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <p
                    className={`mono mt-auto pt-8 text-[10px] leading-snug ${
                      t.featured ? "text-[var(--background)]/60" : "text-[var(--muted-foreground)]"
                    }`}
                  >
                    {t.bestFor}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>

          <div className="mt-5 grid gap-8 rounded-2xl bg-[var(--card)] p-7 md:grid-cols-2 md:p-9">
            <div>
              <h3 className="display text-lg">Minimum ad spend</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted-foreground)]">
                ₹50,000/month per project so the algorithm has room to learn.
              </p>
            </div>
            <div>
              <h3 className="display text-lg">What&apos;s not included</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted-foreground)]">
                Media spend, shoot days, 3D walkthroughs and influencer fees —
                quoted separately.
              </p>
            </div>
          </div>

          {/* Websites & SEO */}
          <div className="mt-5 rounded-2xl bg-[var(--foreground)] p-7 text-[var(--background)] md:p-10">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <span className="mono text-[var(--background)]/60">[ Websites &amp; SEO ]</span>
              <span className="mono text-[var(--background)]/60">
                Standalone or bundled with a retainer
              </span>
            </div>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {buildPricing.map((b) => (
                <li key={b.h} className="rounded-xl bg-white/[0.06] p-6">
                  <h3 className="display text-lg">{b.h}</h3>
                  <p className="display mt-3 text-2xl text-[var(--color-accent)]">{b.price}</p>
                  <p className="mt-3 text-[14px] leading-relaxed text-[var(--background)]/70">
                    {b.b}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap items-baseline justify-between gap-4 border-t border-[var(--border-c)] pt-6">
            <p className="text-[15px] text-[var(--muted-foreground)]">
              Every engagement starts with a{" "}
              <strong className="text-[var(--foreground)]">free project teardown</strong> — no
              retainer until you&apos;ve seen the plan.
            </p>
            <p className="mono text-right text-[10px] leading-snug text-[var(--muted-foreground)]">
              Indicative pricing.
              <br />
              Scope quoted after teardown.
            </p>
          </div>
        </div>
      </section>

      {/* ── 09 · Testimonials ────────────────────────────────── */}
      <section className="border-t border-[var(--border-c)] bg-[var(--card)]">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <span className="mono text-[var(--muted-foreground)]">[ 09 — What clients say ]</span>
          <h2 className="display mt-4 text-[clamp(32px,5.5vw,72px)] leading-[0.95]">
            <SplitReveal text="Trusted by real" />
            <SplitReveal text="estate teams." delay={0.1} />
          </h2>

          <ul className="mt-14 space-y-4">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.06}>
                <li
                  className={`rounded-2xl border p-7 md:p-9 ${
                    t.featured
                      ? "border-transparent bg-[var(--foreground)] text-[var(--background)]"
                      : "border-[var(--border-c)] bg-[var(--background)]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      aria-label="Rated 5 out of 5"
                      className="text-[var(--color-accent)]"
                    >
                      ★★★★★
                    </span>
                    {t.tag ? (
                      <span className="mono rounded-full bg-[var(--color-accent)] px-3 py-1 text-[10px] text-black">
                        {t.tag}
                      </span>
                    ) : null}
                  </div>
                  <blockquote className="mt-5 text-lg leading-relaxed md:text-xl">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="mt-6 flex items-center gap-3">
                    <span
                      aria-hidden
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-medium ${
                        t.featured
                          ? "bg-[var(--color-accent)] text-black"
                          : "bg-[var(--card)] text-[var(--foreground)]"
                      }`}
                    >
                      {t.name.charAt(0)}
                    </span>
                    <div>
                      <p className="text-[15px] font-medium">{t.name}</p>
                      <p
                        className={`text-[13px] ${
                          t.featured
                            ? "text-[var(--background)]/60"
                            : "text-[var(--muted-foreground)]"
                        }`}
                      >
                        {t.role}
                      </p>
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>

          <p className="mono mt-10 text-[var(--muted-foreground)]">
            Referenceable clients available on request — we&apos;ll connect you with a
            partner running similar inventory.
          </p>
        </div>
      </section>

      {/* ── 10 · Next step ───────────────────────────────────── */}
      <section className="grain relative isolate overflow-hidden bg-[var(--foreground)] text-[var(--background)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <span className="mono text-[var(--background)]/60">[ 10 — Next step ]</span>
          <h2 className="display mt-6 max-w-4xl text-[clamp(40px,7vw,120px)] leading-[0.92]">
            <SplitReveal text="Let's look at your" />
            <SplitReveal text="project's numbers" delay={0.08} />
            <SplitReveal text="together." delay={0.16} />
          </h2>
          <p className="mt-8 max-w-2xl text-lg text-[var(--background)]/70">
            Send us the project, the price band and your current cost per lead.
            We&apos;ll come back with a teardown of what&apos;s leaking and what
            we&apos;d run in the first 30 days — free, no obligation.
          </p>

          <div className="mt-12 flex flex-col gap-6 rounded-2xl bg-[var(--color-accent)] p-8 text-black md:flex-row md:items-center md:justify-between md:p-10">
            <div>
              <p className="display text-2xl md:text-3xl">Get a free strategy call</p>
              <p className="mt-2 text-black/70">
                Tell us about your project — we reply within 24 hours.
              </p>
            </div>
            <Magnetic strength={0.3}>
              <Link
                href="/contact"
                data-cursor="let's go"
                className="group inline-flex h-14 shrink-0 items-center gap-3 rounded-full bg-black px-8 text-sm font-medium text-white"
              >
                Start a project
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Magnetic>
          </div>

          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <li className="rounded-2xl bg-white/[0.06] p-7">
              <p className="mono text-[var(--background)]/60">Call / WhatsApp</p>
              <a
                href="https://wa.me/919019508519?text=Hi%20Bricknclick%2C%20I%27d%20like%20a%20free%20project%20teardown."
                target="_blank"
                rel="noopener noreferrer"
                className="underline-grow display mt-3 inline-block text-xl"
              >
                +91 90195 08519
              </a>
            </li>
            <li className="rounded-2xl bg-white/[0.06] p-7">
              <p className="mono text-[var(--background)]/60">Email</p>
              <a
                href="mailto:info@bricknclick.com"
                className="underline-grow display mt-3 inline-block text-xl"
              >
                info@bricknclick.com
              </a>
            </li>
            <li className="rounded-2xl bg-white/[0.06] p-7">
              <p className="mono text-[var(--background)]/60">Office</p>
              <p className="display mt-3 text-xl">Bengaluru, Karnataka</p>
            </li>
            <li className="rounded-2xl bg-white/[0.06] p-7">
              <p className="mono text-[var(--background)]/60">Performance marketing</p>
              <p className="display mt-3 text-xl">Built only for real estate</p>
            </li>
          </ul>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </>
  );
}

/* ── Structured data ─────────────────────────────────────── */

const profileLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE}${PATH}#service`,
  name: "Bricknclick — Performance marketing built only for real estate",
  url: `${SITE}${PATH}`,
  image: `${SITE}/logo.png`,
  description:
    "A Bengaluru performance marketing agency built only for real estate — Meta and Google ads, landing pages, SEO and website development for builders, channel partners and brokers.",
  areaServed: { "@type": "City", name: "Bengaluru" },
  telephone: "+91-90195-08519",
  email: "info@bricknclick.com",
  priceRange: "₹25,000–₹1,20,000+",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  serviceType: [
    "Real estate performance marketing",
    "Real estate lead generation",
    "Landing page development",
    "Real estate SEO",
    "Website development",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Retainers and builds",
    itemListElement: [
      ...tiers.map((t) => ({
        "@type": "Offer",
        name: t.name,
        description: t.blurb,
        priceCurrency: "INR",
        price: t.price.replace(/[^\d]/g, ""),
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          priceCurrency: "INR",
          price: t.price.replace(/[^\d]/g, ""),
          unitCode: "MON",
        },
      })),
      ...buildPricing
        .filter((b) => /\d/.test(b.price))
        .map((b) => ({
          "@type": "Offer",
          name: b.h,
          description: b.b,
          priceCurrency: "INR",
          price: b.price.replace(/[^\d]/g, ""),
        })),
    ],
  },
  review: testimonials.map((t) => ({
    "@type": "Review",
    reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
    author: { "@type": "Person", name: t.name },
    reviewBody: t.quote,
  })),
  parentOrganization: { "@type": "Organization", name: "Bricknclick", url: SITE },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE },
    {
      "@type": "ListItem",
      position: 2,
      name: "Company Profile & Portfolio 2026",
      item: `${SITE}${PATH}`,
    },
  ],
};
