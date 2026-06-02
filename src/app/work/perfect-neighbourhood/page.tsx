import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal, SplitReveal } from "@/components/reveal";
import { BigCta } from "@/components/home/big-cta";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://bricknclick.com";

export const metadata: Metadata = {
  title: "Perfect Neighbourhood — ₹5L in. ₹65L+ out.",
  description:
    "How we rebuilt a real-estate platform from WordPress to Next.js and ran the ad funnel and SEO network that paid for it. ₹65L+ commissions, 24+ bookings, #2–#4 organic ranking for Grade A builder projects.",
  alternates: { canonical: "/work/perfect-neighbourhood" },
  openGraph: {
    title: "Perfect Neighbourhood · Bricknclick",
    description:
      "₹4L → ₹65–70L on Bhartiya City Nikoo 7. ₹1L → 8–9 bookings on Puravankara Northern Lights. A platform that now ranks itself.",
    images: [
      {
        url: "/work/perfect-neighbourhood-1.png",
        width: 1600,
        height: 1000,
      },
    ],
  },
};

const chapters = [
  { n: "01", label: "Platform" },
  { n: "02", label: "Search Surround" },
  { n: "03", label: "Ad Funnel" },
  { n: "04", label: "Content Engine" },
];

const funnelCards = [
  {
    project: "Bhartiya City Nikoo 7",
    channel: "Meta + Google · blended",
    spend: "₹4 L",
    outcome: "₹65–70 L",
    outcomeLabel: "in commissions",
    line1: "15–18 bookings",
    line2: "~17× blended ROAS",
    accent: "#FF6B1A",
  },
  {
    project: "Bhartiya City Nikoo 7",
    channel: "Google Ads only",
    spend: "₹1.38 L",
    outcome: "80 leads",
    outcomeLabel: "qualified",
    line1: "5 bookings closed",
    line2: "₹27.6K cost per booking",
    accent: "#FF8B3D",
  },
  {
    project: "Puravankara Northern Lights",
    channel: "Meta only",
    spend: "₹1 L",
    outcome: "8–9 bookings",
    outcomeLabel: "in one campaign",
    line1: "Direct-to-builder pipeline",
    line2: "Repeatable creative motion",
    accent: "#F4A261",
  },
];

const emdDomains = [
  { domain: "bhartiyacitykiadb.com", target: "Bhartiya City KIADB" },
  { domain: "sattvahamletcity.com", target: "Sattva Hamlet City" },
  { domain: "sobhaoneworld.com", target: "Sobha One World" },
  { domain: "godrejaveline.com", target: "Godrej Aveline" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Perfect Neighbourhood — Platform + Performance + Content",
  creator: { "@type": "Organization", name: "Bricknclick" },
  about: "Perfect Neighbourhood (perfectneighbourhood.com)",
  dateCreated: "2024",
  description:
    "Full-stack Next.js platform rebuild, Search Surround EMD network, and performance ad funnel for a real-estate aggregator. ₹65L+ commissions on ~₹6.4L blended ad spend.",
  url: `${SITE}/work/perfect-neighbourhood`,
};

export default function PerfectNeighbourhoodCase() {
  return (
    <>
      <article>
        {/* HERO ---------------------------------------------------------- */}
        <header className="relative grain isolate overflow-hidden bg-[var(--background)] pt-40 pb-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mono flex flex-wrap items-center gap-3 text-[var(--muted-foreground)]">
              <Link href="/work" className="underline-grow">
                ← All work
              </Link>
              <span>·</span>
              <span>Case · Perfect Neighbourhood · 2024–26</span>
              <span>·</span>
              <span className="flex items-center gap-2">
                <span className="relative inline-flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                </span>
                Ongoing
              </span>
            </div>

            <h1 className="display mt-10 text-[clamp(64px,14vw,260px)] text-[var(--foreground)]">
              <SplitReveal text="₹5L in." delay={0.05} />
              <SplitReveal
                text="₹65L+ out."
                delay={0.2}
                className="text-[var(--color-accent)]"
              />
            </h1>

            <div className="mt-12 grid gap-10 md:grid-cols-12">
              <p className="md:col-span-7 text-balance text-xl text-[var(--muted-foreground)] sm:text-2xl">
                One year. Two Grade A builder projects.{" "}
                <span className="text-[var(--foreground)]">24+ bookings.</span>{" "}
                A platform that now ranks itself.
              </p>

              <div className="md:col-span-5">
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {[
                    "Bhartiya City Nikoo 7",
                    "Puravankara Northern Lights",
                    "Perfect Neighbourhood Platform",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="mono inline-flex items-center rounded-full border border-[var(--border-c)] px-3 py-1 text-[var(--muted-foreground)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 md:flex md:justify-end">
                  <a
                    href="https://www.perfectneighbourhood.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="visit live"
                    className="group inline-flex h-11 items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 text-sm font-medium text-black transition-transform hover:-translate-y-0.5"
                  >
                    Visit live site
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* CHAPTER NAV --------------------------------------------------- */}
        <nav
          aria-label="Chapters"
          className="sticky top-20 z-10 hidden border-y border-[var(--border-c)] bg-[var(--background)]/80 backdrop-blur md:block"
        >
          <ol className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3">
            {chapters.map((c) => (
              <li key={c.n} className="mono flex items-center gap-3 text-[var(--muted-foreground)]">
                <a href={`#chapter-${c.n}`} className="hover:text-[var(--foreground)]">
                  <span className="text-[var(--color-accent)]">{c.n}</span> — {c.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* HERO COLLAGE — 4 platform screenshots, staggered editorial grid */}
        <section className="mx-auto max-w-5xl px-6 pt-12">
          <div className="grid grid-cols-12 gap-3 md:gap-5">
            <Reveal className="col-span-12 md:col-span-7">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-[var(--border-c)] bg-[var(--card)]">
                <Image
                  src="/work/perfect-neighbourhood-1.png"
                  alt="Perfect Neighbourhood — homepage"
                  width={1200}
                  height={750}
                  className="h-full w-full object-cover"
                  sizes="(min-width: 768px) 56vw, 100vw"
                  priority
                />
              </div>
            </Reveal>

            <Reveal delay={0.1} className="col-span-6 md:col-span-5 md:mt-10">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-[var(--border-c)] bg-[var(--card)]">
                <Image
                  src="/work/perfect-neighbourhood-2.png"
                  alt="Perfect Neighbourhood — feature"
                  width={900}
                  height={675}
                  className="h-full w-full object-cover"
                  sizes="(min-width: 768px) 40vw, 50vw"
                />
              </div>
            </Reveal>

            <Reveal delay={0.2} className="col-span-6 md:col-span-5 md:col-start-2 md:-mt-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-[var(--border-c)] bg-[var(--card)]">
                <Image
                  src="/work/perfect-neighbourhood-3.png"
                  alt="Perfect Neighbourhood — listings"
                  width={900}
                  height={675}
                  className="h-full w-full object-cover"
                  sizes="(min-width: 768px) 40vw, 50vw"
                />
              </div>
            </Reveal>

            <Reveal delay={0.3} className="col-span-12 md:col-span-6 md:col-start-7">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-[var(--border-c)] bg-[var(--card)]">
                <Image
                  src="/work/perfect-neighbourhood-4.png"
                  alt="Perfect Neighbourhood — detail"
                  width={1100}
                  height={687}
                  className="h-full w-full object-cover"
                  sizes="(min-width: 768px) 48vw, 100vw"
                />
              </div>
            </Reveal>
          </div>

          <p className="mono mt-8 text-center text-[var(--muted-foreground)]">
            Platform screens · perfectneighbourhood.com
          </p>
        </section>

        {/* THE BRIEF ------------------------------------------------------ */}
        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-32 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="mono text-[var(--muted-foreground)]">The brief</span>
            <h2 className="display mt-6 text-4xl md:text-5xl">
              A real estate platform stuck in second gear.
            </h2>
          </div>
          <div className="space-y-6 md:col-span-7 md:col-start-6">
            <Reveal>
              <p className="text-xl text-[var(--muted-foreground)] md:text-2xl">
                Perfect Neighbourhood ran a real-estate aggregator on a WordPress
                stack that couldn't keep up with the buyers it was attracting.
                Pages loaded slow. The ad funnel leaked. Builders watched their
                marketing spend miss the mark — and their patience thin.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-[var(--muted-foreground)] md:text-xl">
                The mandate: rebuild the platform from the ground up, and run
                the ad + SEO motion that turns Google's real-estate intent into
                actual site visits, leads, and signed bookings. Not pretty
                metrics. Bookings.
              </p>
            </Reveal>
          </div>
        </section>

        {/* CHAPTER 01 — PLATFORM ----------------------------------------- */}
        <section
          id="chapter-01"
          className="scroll-mt-32 border-t border-[var(--border-c)] bg-[var(--card)]"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-32 md:grid-cols-12">
            <div className="md:col-span-4">
              <span className="mono text-[var(--color-accent)]">01 — Platform</span>
              <h2 className="display mt-6 text-[clamp(40px,6vw,80px)]">
                <SplitReveal text="WordPress" />
                <SplitReveal text="to Next.js." delay={0.08} />
              </h2>
              <p className="mt-6 text-[var(--muted-foreground)] md:text-lg">
                A full-stack rebuild. Real estate is a content-heavy, intent-heavy
                domain — the stack has to keep up.
              </p>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <Reveal>
                <ul className="space-y-4">
                  {[
                    {
                      h: "Next.js 15 + App Router",
                      b: "Server components, edge rendering, image and font optimization out of the box. Page-level metadata and canonical URLs on every route.",
                    },
                    {
                      h: "Custom admin dashboard",
                      b: "The Perfect Neighbourhood team manages builders, projects, units, lead inbox, and ad UTMs from one panel — no engineering bottleneck.",
                    },
                    {
                      h: "Headless CMS",
                      b: "Builder profiles, project pages, photo galleries, and floorplans all editable without code. New project? Live in an hour.",
                    },
                    {
                      h: "SEO-first architecture",
                      b: "Sitemaps, robots, JSON-LD (Organization, RealEstateListing, BreadcrumbList) generated dynamically per project page. Mobile-first, accessible, sub-2s LCP.",
                    },
                  ].map((item) => (
                    <li
                      key={item.h}
                      className="border-b border-[var(--border-c)] pb-4"
                    >
                      <p className="display text-2xl">{item.h}</p>
                      <p className="mt-2 text-[var(--muted-foreground)]">{item.b}</p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CHAPTER 02 — SEARCH SURROUND ---------------------------------- */}
        <section
          id="chapter-02"
          className="scroll-mt-32 border-t border-[var(--border-c)]"
        >
          <div className="mx-auto max-w-7xl px-6 py-32">
            <div className="grid gap-12 md:grid-cols-12">
              <div className="md:col-span-5">
                <span className="mono text-[var(--color-accent)]">02 — Search Surround</span>
                <h2 className="display mt-6 text-[clamp(40px,6vw,80px)]">
                  <SplitReveal text="Own the SERP." />
                  <SplitReveal text="At the moment" delay={0.08} />
                  <SplitReveal text="of intent." delay={0.16} />
                </h2>
              </div>

              <div className="md:col-span-7 md:col-start-6">
                <Reveal>
                  <p className="text-xl text-[var(--muted-foreground)] md:text-2xl">
                    Real-estate buyers don't search for "apartments in Bangalore."
                    They Google the project name they just saw on a hoarding —{" "}
                    <em>"Bhartiya City Nikoo 7"</em>, <em>"Sobha One World"</em>,
                    <em> "Godrej Aveline"</em>. That's the highest-intent moment in
                    the entire funnel.
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-6 text-lg text-[var(--muted-foreground)] md:text-xl">
                    The Search Surround method owns that moment. Alongside the
                    Perfect Neighbourhood platform — which now ranks{" "}
                    <span className="text-[var(--foreground)]">#2–#4 organically</span>{" "}
                    for Grade A builder queries — we operate a network of EMD
                    (exact-match-domain) landing pages, each one purpose-built to
                    capture intent at the project-name search.
                  </p>
                </Reveal>
              </div>
            </div>

            <Reveal delay={0.15}>
              <div className="mt-16">
                <p className="mono mb-6 text-[var(--muted-foreground)]">
                  The network · 4 live domains
                </p>
                <ul className="grid gap-3 md:grid-cols-2">
                  {emdDomains.map((d) => (
                    <li
                      key={d.domain}
                      className="group flex items-center justify-between rounded-md border border-[var(--border-c)] bg-[var(--card)] px-6 py-5 transition-colors hover:bg-[var(--background)]"
                    >
                      <div>
                        <p className="display text-xl tracking-tight">{d.domain}</p>
                        <p className="mono mt-1 text-[var(--muted-foreground)]">
                          → captures: {d.target}
                        </p>
                      </div>
                      <span className="mono text-[var(--color-accent)]">live</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CHAPTER 03 — AD FUNNEL ---------------------------------------- */}
        <section
          id="chapter-03"
          className="scroll-mt-32 border-t border-[var(--border-c)] bg-[var(--card)]"
        >
          <div className="mx-auto max-w-7xl px-6 py-32">
            <div className="mb-16 grid gap-12 md:grid-cols-12">
              <div className="md:col-span-5">
                <span className="mono text-[var(--color-accent)]">03 — Ad Funnel</span>
                <h2 className="display mt-6 text-[clamp(40px,6vw,80px)]">
                  <SplitReveal text="₹6.4L in." />
                  <SplitReveal
                    text="28+ bookings"
                    delay={0.08}
                    className="text-[var(--color-accent)]"
                  />
                  <SplitReveal text="out." delay={0.16} />
                </h2>
              </div>
              <div className="md:col-span-6 md:col-start-7">
                <Reveal>
                  <p className="text-lg text-[var(--muted-foreground)] md:text-xl">
                    Three campaigns. Two Grade A builder projects. Meta and
                    Google running in lockstep with the platform and the EMD
                    network. The point of paid media in real estate isn't
                    impressions — it's qualified site visits that close.
                  </p>
                </Reveal>
              </div>
            </div>

            <ul className="grid gap-4 md:grid-cols-3">
              {funnelCards.map((c, i) => (
                <Reveal key={c.project + i} delay={i * 0.08}>
                  <li className="flex h-full flex-col justify-between rounded-2xl border border-[var(--border-c)] bg-[var(--background)] p-8">
                    <div>
                      <span
                        className="mono"
                        style={{ color: c.accent }}
                      >
                        {c.channel}
                      </span>
                      <p className="display mt-3 text-2xl">{c.project}</p>
                    </div>

                    <div className="mt-12 space-y-6">
                      <div className="flex items-baseline justify-between gap-2 border-b border-[var(--border-c)] pb-4">
                        <span className="mono text-[var(--muted-foreground)]">spend</span>
                        <span className="display text-3xl">{c.spend}</span>
                      </div>
                      <div>
                        <p
                          className="display text-5xl leading-none"
                          style={{ color: c.accent }}
                        >
                          {c.outcome}
                        </p>
                        <p className="mono mt-2 text-[var(--muted-foreground)]">
                          {c.outcomeLabel}
                        </p>
                      </div>
                      <ul className="mono space-y-1 text-[var(--muted-foreground)]">
                        <li>· {c.line1}</li>
                        <li>· {c.line2}</li>
                      </ul>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* CHAPTER 04 — CONTENT ENGINE ----------------------------------- */}
        <section
          id="chapter-04"
          className="scroll-mt-32 border-t border-[var(--border-c)]"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-32 md:grid-cols-12">
            <div className="md:col-span-5">
              <span className="mono text-[var(--color-accent)]">04 — Content Engine</span>
              <h2 className="display mt-6 text-[clamp(40px,6vw,80px)]">
                <SplitReveal text="Creative" />
                <SplitReveal text="at scale." delay={0.08} />
              </h2>
              <p className="mt-6 text-[var(--muted-foreground)] md:text-lg">
                Real estate eats creative. Every project, every floor plan,
                every micro-market needs its own story — at a velocity that
                in-house teams can't sustain.
              </p>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <div className="grid gap-4">
                <Reveal>
                  <div className="rounded-2xl border border-[var(--border-c)] bg-[var(--card)] p-8">
                    <p className="mono text-[var(--color-accent)]">
                      AI-cloned long-form content
                    </p>
                    <p className="display mt-3 text-2xl">
                      Project descriptions, neighbourhood guides, and SEO content
                      produced at platform scale.
                    </p>
                    <p className="mt-3 text-[var(--muted-foreground)]">
                      Every builder project gets its own indexable, ranking-ready
                      page — without a content writer per launch.
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={0.08}>
                  <div className="rounded-2xl border border-[var(--border-c)] bg-[var(--card)] p-8">
                    <p className="mono text-[var(--color-accent)]">
                      Animated hero content
                    </p>
                    <p className="display mt-3 text-2xl">
                      Animated project showcases that lift CTR and hold time on
                      paid creative.
                    </p>
                    <p className="mt-3 text-[var(--muted-foreground)]">
                      The same creative engine that feeds the ad funnel feeds
                      the platform — one motion, two distribution channels.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* OUTCOMES BAND ------------------------------------------------- */}
        <section className="border-y border-[var(--border-c)] bg-[var(--foreground)] text-[var(--background)]">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <p className="mono text-[var(--background)]/60">The 12-month picture</p>
            <div className="mt-10 grid grid-cols-2 gap-y-12 md:grid-cols-4">
              {[
                { v: "₹65L+", l: "Commissions generated" },
                { v: "24+", l: "Bookings closed" },
                { v: "80+", l: "Qualified leads (1 campaign)" },
                { v: "#2–4", l: "Avg organic rank, Grade A" },
              ].map((m) => (
                <div key={m.l} className="border-l border-[var(--background)]/15 pl-6 first:border-l-0 first:pl-0 md:border-l md:pl-6 md:first:border-l-0">
                  <p className="display text-6xl text-[var(--color-accent)] md:text-7xl">
                    {m.v}
                  </p>
                  <p className="mono mt-2 text-[var(--background)]/60">{m.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>

      <BigCta />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
