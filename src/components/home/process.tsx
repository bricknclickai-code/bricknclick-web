"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { SplitReveal } from "../reveal";

const steps = [
  {
    n: "01",
    title: "Listen",
    body:
      "We start with your business — not a deck. Where are you stuck, where are you spending, what would 'won' look like in 90 days?",
  },
  {
    n: "02",
    title: "Map",
    body:
      "A short, sharp plan. The mix of ads, web, and content that fits the moment — with the numbers we'll grade ourselves on.",
  },
  {
    n: "03",
    title: "Ship",
    body:
      "One team, one cadence. Weekly progress, monthly review. No 'agency time' — we move at the speed of in-house.",
  },
  {
    n: "04",
    title: "Own it",
    body:
      "The work doesn't end at delivery. We stay accountable for the result, not the deliverable. That's the whole point.",
  },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineH = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative mx-auto max-w-7xl px-6 py-32">
      <div className="mb-16">
        <span className="mono text-[var(--muted-foreground)]">[ How we work ]</span>
        <h2 className="display mt-4 text-[clamp(40px,6vw,96px)]">
          <SplitReveal text="Four steps." />
          <SplitReveal text="No theatre." delay={0.1} />
        </h2>
      </div>

      <div className="relative grid grid-cols-1 gap-x-8 md:grid-cols-12">
        <div className="absolute bottom-0 left-[15px] top-0 hidden w-px bg-[var(--border-c)] md:left-[calc(8.333%-1px)] md:block" />
        <motion.div
          style={{ height: lineH }}
          className="absolute left-[15px] top-0 hidden w-px bg-[var(--color-accent)] md:left-[calc(8.333%-1px)] md:block"
        />

        {steps.map((s, i) => (
          <div
            key={s.n}
            className="relative grid grid-cols-12 gap-4 border-b border-[var(--border-c)] py-10 md:col-span-12"
          >
            <span className="mono col-span-2 text-[var(--muted-foreground)] md:col-span-1">
              {s.n}
            </span>
            <h3 className="display col-span-10 text-3xl md:col-span-4 md:text-5xl">
              {s.title}
            </h3>
            <p className="col-span-12 max-w-md text-[var(--muted-foreground)] md:col-span-6 md:col-start-7 md:text-lg">
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
