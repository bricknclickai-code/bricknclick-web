import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal, SplitReveal } from "@/components/reveal";
import { BigCta } from "@/components/home/big-cta";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://bricknclick.com";

export const metadata: Metadata = {
  title: "Exora Farms — ₹3L in. 80 acres sold out.",
  description:
    "How we built the Exora Farms platform, ran the paid funnel, and engineered the content engine that sold out 80 acres of premium farmland in eight months. 3K+ leads on ₹3L ad spend. One reel: 50+ organic leads.",
  alternates: { canonical: "/work/exora-farms" },
  openGraph: {
    title: "Exora Farms · Bricknclick",
    description:
      "₹3L in. 80 acres out. A platform, a paid motion, an organic engine, and a CRM that closed the loop on a ₹33L+ ticket.",
    images: [
      {
        url: "/work/exora-farms-1.png",
        width: 1600,
        height: 1000,
      },
    ],
  },
};

const chapters = [
  { n: "01", label: "Platform" },
  { n: "02", label: "Performance" },
  { n: "03", label: "Organic" },
  { n: "04", label: "CRM" },
];

const funnelCards = [
  {
    project: "Meta paid funnel",
    channel: "Meta · Oct 2025 → Jun 2026",
    spend: "₹3 L",
    outcome: "3,000+",
    outcomeLabel: "qualified leads",
    line1: "~₹100 cost per lead",
    line2: "On a ₹33L+ investment ticket",
    accent: "#22C55E",
  },
  {
    project: "Sold-out project",
    channel: "Palsamudram, Andhra Pradesh",
    spend: "—",
    outcome: "80 acres",
    outcomeLabel: "sold out",
    line1: "Premium agri-investment",
    line2: "Single flagship project",
    accent: "#16A34A",
  },
  {
    project: "Single reel breakout",
    channel: "Instagram · organic",
    spend: "₹0",
    outcome: "50+ leads",
    outcomeLabel: "from one piece",
    line1: "10K+ reach",
    line2: "Featured an HNI investor's story",
    accent: "#15803D",
  },
];

const platformBuild = [
  {
    h: "Next.js 15, built for SEO",
    b: "Server-rendered, mobile-first, sub-2s LCP. Sitemaps, robots, structured data on every project, blog, and article page out of the box.",
  },
  {
    h: "Blog system for inbound",
    b: "Editable blog with categories (Passive Income, Investment, Portfolio Management, Exotic Farming, Superfruit, Export Agriculture). Every article is a long-tail SEO surface that compounds.",
  },
  {
    h: "Schedule-a-visit flow",
    b: "From hero CTA → calendar booking → CRM. The fastest path from buyer intent to a sales calendar slot.",
  },
  {
    h: "WhatsApp + multi-channel inbound",
    b: "Sticky WhatsApp on every screen. Sign-in, Talk to Advisor, and Schedule-a-visit all open the same lead pipeline.",
  },
];

const crmStack = [
  {
    h: "Every lead, every source, tagged",
    b: "Meta lead form, organic Instagram DMs, website form, WhatsApp inbound — all funnel into the same CRM with source attribution intact.",
  },
  {
    h: "Real-time sync to sales",
    b: "Leads land in the sales team's inbox the moment they're captured — no manual export, no spreadsheet hand-offs.",
  },
  {
    h: "Closed-loop attribution",
    b: "When a lead converts to a booking, the source ad, creative, and channel are still attached. Future creative spend goes where it's already winning.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Exora Farms — Platform, Performance, Content, CRM",
  creator: { "@type": "Organization", name: "Bricknclick" },
  about: "Exora Farms (exorafarms.com)",
  dateCreated: "2025",
  description:
    "End-to-end engagement: Next.js platform build, paid ad funnel, organic content engine, and CRM integration. Sold out 80 acres of premium farmland on ₹3L ad spend.",
  url: `${SITE}/work/exora-farms`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE },
    { "@type": "ListItem", position: 2, name: "Work", item: `${SITE}/work` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Exora Farms",
      item: `${SITE}/work/exora-farms`,
    },
  ],
};

export default function ExoraFarmsCase() {
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
              <span>Case · Exora Farms · 2025–26</span>
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
              <SplitReveal text="₹3L in." delay={0.05} />
              <SplitReveal
                text="80 acres out."
                delay={0.2}
                className="text-[var(--color-accent)]"
              />
            </h1>

            <div className="mt-12 grid gap-10 md:grid-cols-12">
              <p className="md:col-span-7 text-balance text-xl text-[var(--muted-foreground)] sm:text-2xl">
                Eight months. One flagship project.{" "}
                <span className="text-[var(--foreground)]">Sold out.</span>{" "}
                3,000+ leads, ~₹100 per lead, on a ₹33L+ ticket.
              </p>

              <div className="md:col-span-5">
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {[
                    "Palsamudram, AP",
                    "Premium farmland · ₹33L+ / acre",
                    "Meta + Organic + CRM",
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
                    href="https://www.exorafarms.com"
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

        {/* HERO COLLAGE — 4 platform/content screens, staggered editorial grid */}
        <section className="mx-auto max-w-5xl px-6 pt-12">
          <div className="grid grid-cols-12 gap-3 md:gap-5">
            <Reveal className="col-span-12 md:col-span-8">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-[var(--border-c)] bg-[var(--card)]">
                <Image
                  src="/work/exora-farms-1.png"
                  alt="Exora Farms — desktop homepage"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 64vw, 92vw"
                  priority
                />
              </div>
            </Reveal>

            <Reveal delay={0.1} className="col-span-6 md:col-span-4">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md border border-[var(--border-c)] bg-[var(--card)]">
                <Image
                  src="/work/exora-farms-3.png"
                  alt="Exora Farms — Flipkart leader reel (10K+ reach, 50+ organic leads)"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 32vw, 50vw"
                />
              </div>
            </Reveal>

            <Reveal delay={0.2} className="col-span-6 md:col-span-3 md:col-start-3 md:-mt-10">
              <div className="relative aspect-[9/16] w-full overflow-hidden rounded-md border border-[var(--border-c)] bg-[var(--card)]">
                <Image
                  src="/work/exora-farms-2.png"
                  alt="Exora Farms — mobile blog system"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 24vw, 50vw"
                />
              </div>
            </Reveal>

            <Reveal delay={0.3} className="col-span-12 md:col-span-3 md:col-start-6 md:-mt-10">
              <div className="relative aspect-[9/16] w-full overflow-hidden rounded-md border border-[var(--border-c)] bg-[var(--card)]">
                <Image
                  src="/work/exora-farms-4.png"
                  alt="Exora Farms — mobile homepage"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 24vw, 45vw"
                />
              </div>
            </Reveal>
          </div>

          <p className="mono mt-8 text-center text-[var(--muted-foreground)]">
            Platform + content + a viral reel · exorafarms.com
          </p>
        </section>

        {/* THE BRIEF ------------------------------------------------------ */}
        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-32 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="mono text-[var(--muted-foreground)]">The brief</span>
            <h2 className="display mt-6 text-4xl md:text-5xl">
              A premium project. A cold start.
            </h2>
          </div>
          <div className="space-y-6 md:col-span-7 md:col-start-6">
            <Reveal>
              <p className="text-xl text-[var(--muted-foreground)] md:text-2xl">
                Exora Farms had a beautiful project in Palsamudram, Andhra
                Pradesh — premium farmland, 70:30 revenue-share model,
                ₹33L+ per acre. What it didn't have was a platform, a paid
                motion, an organic engine, or a way to track who was actually
                interested.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-[var(--muted-foreground)] md:text-xl">
                The mandate: build the whole stack — site, ads, content, CRM —
                and move qualified investors to a schedule-a-visit slot fast
                enough that the project would sell out before momentum cooled.
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
                <SplitReveal text="A site" />
                <SplitReveal text="built to sell." delay={0.08} />
              </h2>
              <p className="mt-6 text-[var(--muted-foreground)] md:text-lg">
                A greenfield Next.js build, SEO-first from the first commit.
                Every surface designed for one outcome: visit booked.
              </p>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <Reveal>
                <ul className="space-y-4">
                  {platformBuild.map((item) => (
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

        {/* CHAPTER 02 — PERFORMANCE -------------------------------------- */}
        <section
          id="chapter-02"
          className="scroll-mt-32 border-t border-[var(--border-c)]"
        >
          <div className="mx-auto max-w-7xl px-6 py-32">
            <div className="mb-16 grid gap-12 md:grid-cols-12">
              <div className="md:col-span-5">
                <span className="mono text-[var(--color-accent)]">02 — Performance</span>
                <h2 className="display mt-6 text-[clamp(40px,6vw,80px)]">
                  <SplitReveal text="₹3L in." />
                  <SplitReveal
                    text="3,000 leads."
                    delay={0.08}
                    className="text-[var(--color-accent)]"
                  />
                  <SplitReveal text="Sold out." delay={0.16} />
                </h2>
              </div>
              <div className="md:col-span-6 md:col-start-7">
                <Reveal>
                  <p className="text-lg text-[var(--muted-foreground)] md:text-xl">
                    A Meta-led paid funnel built for investor intent —
                    not impressions. ₹100 per qualified lead on a ₹33L ticket
                    is the kind of unit economics that compounds. We didn't
                    spend more; we spent better.
                  </p>
                </Reveal>
              </div>
            </div>

            <ul className="grid gap-4 md:grid-cols-3">
              {funnelCards.map((c, i) => (
                <Reveal key={c.project + i} delay={i * 0.08}>
                  <li className="flex h-full flex-col justify-between rounded-2xl border border-[var(--border-c)] bg-[var(--card)] p-8">
                    <div>
                      <span className="mono" style={{ color: c.accent }}>
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

        {/* CHAPTER 03 — ORGANIC ------------------------------------------ */}
        <section
          id="chapter-03"
          className="scroll-mt-32 border-t border-[var(--border-c)] bg-[var(--card)]"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-32 md:grid-cols-12">
            <div className="md:col-span-5">
              <span className="mono text-[var(--color-accent)]">03 — Organic</span>
              <h2 className="display mt-6 text-[clamp(40px,6vw,80px)]">
                <SplitReveal text="One reel." />
                <SplitReveal
                  text="50+ leads."
                  delay={0.08}
                  className="text-[var(--color-accent)]"
                />
              </h2>
              <p className="mt-6 text-[var(--muted-foreground)] md:text-lg">
                Organic isn't a side project. Done right, it compounds into
                the paid funnel — lowering CAC, raising trust, and warming
                cold audiences before the first ad ever lands.
              </p>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <div className="grid gap-4">
                <Reveal>
                  <div className="rounded-2xl border border-[var(--border-c)] bg-[var(--background)] p-8">
                    <p className="mono text-[var(--color-accent)]">The breakout</p>
                    <p className="display mt-3 text-2xl">
                      "Flipkart Leader Invested Here" — one reel, 10K+ reach,
                      50+ inbound leads, zero ad spend.
                    </p>
                    <p className="mt-3 text-[var(--muted-foreground)]">
                      A real HNI investor's story turned into a 30-second
                      narrative. It outperformed every paid creative we'd
                      shipped that month.
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={0.08}>
                  <div className="rounded-2xl border border-[var(--border-c)] bg-[var(--background)] p-8">
                    <p className="mono text-[var(--color-accent)]">The compounding layer</p>
                    <p className="display mt-3 text-2xl">
                      100+ leads from organic Instagram + website content,
                      stacked on top of the paid funnel.
                    </p>
                    <p className="mt-3 text-[var(--muted-foreground)]">
                      A blog system on the platform doubles as an SEO surface
                      — every article is a long-tail inbound asset that earns
                      visits years from now.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* CHAPTER 04 — CRM ---------------------------------------------- */}
        <section
          id="chapter-04"
          className="scroll-mt-32 border-t border-[var(--border-c)]"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-32 md:grid-cols-12">
            <div className="md:col-span-4">
              <span className="mono text-[var(--color-accent)]">04 — CRM</span>
              <h2 className="display mt-6 text-[clamp(40px,6vw,80px)]">
                <SplitReveal text="Every lead." />
                <SplitReveal text="Tracked." delay={0.08} />
              </h2>
              <p className="mt-6 text-[var(--muted-foreground)] md:text-lg">
                Without attribution, every spend decision is a guess. We
                wired the CRM into every inbound surface — so creative spend
                follows the data, not the loudest opinion in the room.
              </p>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <Reveal>
                <ul className="space-y-4">
                  {crmStack.map((item) => (
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

        {/* OUTCOMES BAND ------------------------------------------------- */}
        <section className="border-y border-[var(--border-c)] bg-[var(--foreground)] text-[var(--background)]">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <p className="mono text-[var(--background)]/60">The 8-month picture</p>
            <div className="mt-10 grid grid-cols-2 gap-y-12 md:grid-cols-4">
              {[
                { v: "80", l: "Acres sold out" },
                { v: "3K+", l: "Qualified leads (paid)" },
                { v: "~₹100", l: "Cost per lead" },
                { v: "50+", l: "Leads from one organic reel" },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
