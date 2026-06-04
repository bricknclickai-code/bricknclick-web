import type { Metadata } from "next";
import Image from "next/image";
import { Reveal, SplitReveal } from "@/components/reveal";
import { BigCta } from "@/components/home/big-cta";

const team = [
  {
    name: "Deepak",
    title: "Performance Marketing & SEO Specialist",
    image: "/Team/deepak.png",
  },
  {
    name: "Aman",
    title: "Software Developer & Content Strategist",
    image: "/Team/aman.png",
  },
];

export const metadata: Metadata = {
  title: "About — A digital agency that ships",
  description:
    "Bricknclick is a senior team that runs like an in-house unit. Strategy, design, engineering, and media — under one accountable roof.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    n: "01",
    title: "Outcomes, not deliverables",
    body:
      "We grade ourselves on the number you grade yourself on. A pretty PDF doesn't help if the meter doesn't move.",
  },
  {
    n: "02",
    title: "Senior hands, no handoffs",
    body:
      "Every engagement runs with the people who'll actually do the work. No bait-and-switch, no junior shuffle.",
  },
  {
    n: "03",
    title: "Speed is a feature",
    body:
      "Most things in marketing are reversible. We ship, read the data, and ship again — weekly, not quarterly.",
  },
  {
    n: "04",
    title: "Plain talk only",
    body:
      "No jargon, no theatre. If we can't explain it in a sentence, we don't understand it well enough to recommend it.",
  },
];

const numbers = [
  { v: "₹65L+", l: "Client commissions · 12 mo" },
  { v: "80", l: "Acres sold for clients · single project" },
  { v: "5,200+", l: "Leads sourced via paid funnels" },
  { v: "~17×", l: "Best blended ROAS to date" },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-40 pb-24">
        <div className="inline-flex items-center gap-3">
          <span aria-hidden className="h-px w-8 bg-[var(--color-accent)]" />
          <span className="mono text-[var(--color-accent)]">
            IIM-led &amp; mentored
          </span>
          <span aria-hidden className="h-px w-8 bg-[var(--color-accent)]" />
        </div>
        <h1 className="display mt-6 text-[clamp(56px,11vw,200px)]">
          <SplitReveal text="A studio" />
          <SplitReveal text="that owns it." delay={0.1} />
        </h1>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-32 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="mono text-[var(--muted-foreground)]">Manifesto</p>
          <Reveal delay={0.1}>
            <div className="mt-10 border-l border-[var(--color-accent)] pl-5">
              <p className="mono text-[var(--color-accent)]">
                Founded & led by IIM alumni
              </p>
              <p className="display mt-3 text-2xl leading-tight md:text-3xl">
                A studio that runs like
                <br />
                an in-house team.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="space-y-6 md:col-span-7">
          <Reveal>
            <p className="text-xl text-balance md:text-2xl">
              Bricknclick is a senior team running ads, web, and content for
              ambitious brands. We were tired of watching agencies hand off
              between silos and call it a campaign. So we built one team that
              owns the outcome — end to end.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-[var(--muted-foreground)] md:text-xl">
              "Brick" because we build things that last. "Click" because the
              internet runs on attention. "We Own It" because the work doesn't
              end at delivery.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[var(--border-c)] bg-[var(--card)]">
        <div className="mx-auto grid max-w-7xl gap-y-12 px-6 py-20 md:grid-cols-4">
          {numbers.map((n) => (
            <div key={n.l} className="border-l border-[var(--border-c)] pl-6 first:border-l-0 first:pl-0 md:border-l md:pl-6 md:first:border-l-0">
              <p className="display text-6xl text-[var(--color-accent)] md:text-7xl">{n.v}</p>
              <p className="mono mt-2 text-[var(--muted-foreground)]">{n.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-32">
        <div className="mb-16">
          <span className="mono text-[var(--muted-foreground)]">[ How we think ]</span>
          <h2 className="display mt-4 text-[clamp(40px,6vw,96px)]">
            <SplitReveal text="Four things" />
            <SplitReveal text="we believe." delay={0.1} />
          </h2>
        </div>
        <ul>
          {values.map((v) => (
            <li
              key={v.n}
              className="grid grid-cols-12 gap-4 border-b border-[var(--border-c)] py-10"
            >
              <span className="mono col-span-2 text-[var(--muted-foreground)] md:col-span-1">
                {v.n}
              </span>
              <h3 className="display col-span-10 text-3xl md:col-span-4 md:text-5xl">
                {v.title}
              </h3>
              <p className="col-span-12 max-w-lg text-[var(--muted-foreground)] md:col-span-6 md:col-start-7 md:text-lg">
                {v.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* The team — founder portraits anchor the IIM-led credential
          with actual faces, not just a text claim. Circular avatars. */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-32">
        <div className="mb-12 md:mb-16">
          <span className="mono text-[var(--muted-foreground)]">[ The team ]</span>
          <h2 className="display mt-4 text-[clamp(40px,6vw,96px)]">
            <SplitReveal text="The people" />
            <SplitReveal text="behind the work." delay={0.1} />
          </h2>
        </div>

        <ul className="grid gap-12 sm:grid-cols-2 md:gap-16">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.1}>
              <article className="group flex flex-col items-center text-center">
                <div className="relative h-44 w-44 overflow-hidden rounded-full border border-[var(--border-c)] bg-[var(--card)] md:h-56 md:w-56">
                  <Image
                    src={m.image}
                    alt={`${m.name} — ${m.title}`}
                    fill
                    sizes="(min-width: 768px) 224px, 176px"
                    className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.05]"
                  />
                </div>
                <h3 className="display mt-6 text-3xl tracking-[-0.03em] md:text-4xl">
                  {m.name}
                </h3>
                <p className="mono mt-3 text-[var(--muted-foreground)]">
                  {m.title}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </section>

      <BigCta />
    </>
  );
}
