import type { Metadata } from "next";
import { Reveal, SplitReveal } from "@/components/reveal";
import { BigCta } from "@/components/home/big-cta";

export const metadata: Metadata = {
  title: "About — A digital agency that ships",
  description:
    "Bricknclick is a small, senior team that runs like an in-house unit. Strategy, design, engineering, and media — under one accountable roof.",
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
    title: "Small team, senior hands",
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
  { v: "24+", l: "Bookings closed via paid funnels" },
  { v: "~17×", l: "Best blended ROAS to date" },
  { v: "2024", l: "Founded · IIM-led" },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-40 pb-24">
        <span className="mono text-[var(--muted-foreground)]">[ About — 2026 ]</span>
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
              Bricknclick is a small, senior team running ads, web, and content
              for ambitious brands. We were tired of watching agencies hand off
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

      <BigCta />
    </>
  );
}
