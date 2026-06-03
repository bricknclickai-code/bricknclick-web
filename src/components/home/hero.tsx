"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import { Magnetic } from "../magnetic";
import { SplitReveal } from "../reveal";

const heroMetrics = [
  { value: "₹65L+", label: "Client commissions" },
  { value: "80", label: "Acres sold · single project" },
  { value: "3K+", label: "Leads sourced via paid funnels" },
  { value: "50+", label: "Leads from one organic reel" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative grain isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-[var(--background)] pb-12 pt-24 md:pt-36"
    >
      {/* Animated orange orb — slow organic drift behind the hero copy.
          Absolute, pointer-events-none, sits at z-0 so content stacks above. */}
      <div aria-hidden className="orb-bg pointer-events-none absolute inset-[-10%]" />

      {/* Hero receipts — vertical metrics stack pinned to the right gutter on xl+.
          Hidden below xl so it doesn't overlap the headline. The NumbersBand
          section lower on the page covers the same proof for smaller viewports. */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute right-6 top-40 z-10 hidden w-[280px] xl:block 2xl:right-10 2xl:top-44 2xl:w-[320px]"
      >
        <p className="mono mb-5 text-[var(--muted-foreground)]">[ Receipts ]</p>
        <ul className="space-y-5">
          {heroMetrics.map((m, i) => (
            <motion.li
              key={m.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: 0.55 + i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border-t border-[var(--border-c)] pt-3"
            >
              <p className="display text-3xl leading-none text-[var(--color-accent)] 2xl:text-4xl">
                {m.value}
              </p>
              <p className="mono mt-2 text-[var(--muted-foreground)]">{m.label}</p>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div style={{ y, opacity }} className="relative mx-auto w-full max-w-7xl px-6">
        <h1 className="display text-[clamp(56px,10vw,180px)] text-[var(--foreground)]">
          <SplitReveal text="We don't" delay={0.05} />
          <SplitReveal text="just build." delay={0.15} />
          <span className="flex flex-wrap items-baseline gap-x-[0.22em]">
            <SplitReveal
              text="We own"
              delay={0.25}
              className="text-[var(--color-accent)]"
            />
            <SplitReveal text="it." delay={0.35} />
          </span>
        </h1>

        <div className="mt-12 grid gap-10 md:grid-cols-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="md:col-span-5 md:col-start-1 text-balance text-base text-[var(--muted-foreground)] sm:text-lg"
          >
            Bricknclick is a digital agency that ships. Performance ads,
            websites engineered for speed and search, and content built like
            infrastructure — under one accountable roof.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="md:col-span-4 md:col-start-9 flex flex-wrap items-center gap-3 md:justify-end"
          >
            <Magnetic strength={0.3}>
              <Link
                href="/work"
                data-cursor="see work"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-[var(--foreground)] px-6 text-sm font-medium text-[var(--background)] shadow-sm transition-all hover:scale-[1.02] active:scale-95 active:shadow-none"
              >
                See our work
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </Magnetic>
            <Magnetic strength={0.3}>
              <Link
                href="/contact"
                data-cursor="say hi"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-[var(--border-c)] px-6 text-sm font-medium transition-all hover:bg-[var(--card)] active:scale-95"
              >
                Start a project
              </Link>
            </Magnetic>
          </motion.div>
        </div>

        {/* Mobile / tablet receipts — 2 metrics on phones, 4 on tablets+.
            Hidden on xl+ (where the right-rail receipts take over). */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 border-t border-[var(--border-c)] pt-5 xl:hidden"
        >
          <ul className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4">
            {heroMetrics.map((m, i) => (
              <motion.li
                key={m.label}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.9 + i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                // Show only first 2 on phones (< sm = 640px); show all 4 from sm onward
                className={`border-l border-[var(--border-c)] pl-3 first:border-l-0 first:pl-0 sm:pl-4 ${
                  i >= 2 ? "hidden sm:block" : ""
                }`}
              >
                <p className="display text-2xl leading-none text-[var(--color-accent)] sm:text-3xl">
                  {m.value}
                </p>
                <p className="mono mt-1.5 text-[10px] leading-snug text-[var(--muted-foreground)]">
                  {m.label}
                </p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      {/* Scroll cue — hidden on mobile (the receipts above already anchor the
          fold; the down-arrow + copyright are noise on small viewports). */}
      <div className="relative mx-auto mt-16 hidden w-full max-w-7xl items-center justify-between px-6 md:flex">
        <span className="mono text-[var(--muted-foreground)]">Scroll to explore ↓</span>
        <span className="mono text-[var(--muted-foreground)]">© 2026 — All rights reserved</span>
      </div>
    </section>
  );
}
