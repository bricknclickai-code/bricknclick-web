"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Magnetic } from "../magnetic";
import { SplitReveal } from "../reveal";
import { RotatingWord } from "./rotating-word";
import { CountUp } from "../count-up";
import { eoiLabel } from "@/lib/eoi";

// Each rotating verb maps to a service, so the headline itself teaches the
// offer — "We don't just build / advertise / create / rank — we own it." The
// service row below highlights the matching service in sync.
const pitch = [
  { verb: "build.", service: "Web & Product" },
  { verb: "advertise.", service: "Performance Ads" },
  { verb: "create.", service: "Content & Brand" },
  { verb: "rank.", service: "AEO & GEO" },
];

const heroMetrics = [
  { value: "50+", label: "EOIs via Meta ads · 1 project" },
  { value: "80", label: "Acres sold · single project" },
  { value: "3K+", label: "Leads sourced via paid funnels" },
  { value: "100+", label: "Organic leads · zero ad spend" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Drives both the rotating headline verb and the highlighted service chip.
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduce || paused) return;
    const t = setInterval(() => setActive((p) => (p + 1) % pitch.length), 2200);
    return () => clearInterval(t);
  }, [reduce, paused]);

  return (
    <section
      ref={ref}
      className="relative grain isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-[var(--background)] pb-12 pt-24 md:pt-36"
    >
      {/* Animated orange orb — slow organic drift behind the hero copy. */}
      <div aria-hidden className="orb-bg pointer-events-none absolute inset-[-10%]" />

      {/* Hero receipts — vertical metrics stack pinned to the right gutter on xl+. */}
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
                <CountUp value={m.value} delay={0.6 + i * 0.1} />
              </p>
              <p className="mono mt-2 text-[var(--muted-foreground)]">{eoiLabel(m.label)}</p>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div style={{ y, opacity }} className="relative mx-auto w-full max-w-7xl px-6">
        {/* IIM credential strip */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex items-center gap-3 md:mb-8"
        >
          <span aria-hidden className="h-px w-8 bg-[var(--color-accent)]" />
          <span className="mono text-[var(--color-accent)]">
            IIM-led &amp; mentored
          </span>
          <span aria-hidden className="h-px w-8 bg-[var(--color-accent)]" />
        </motion.div>

        <h1 className="display text-[clamp(56px,10vw,180px)] text-[var(--foreground)]">
          <SplitReveal text="We don't" delay={0.05} />
          <span className="flex flex-wrap items-baseline gap-x-[0.18em]">
            <SplitReveal text="just" delay={0.15} />
            <RotatingWord
              words={pitch.map((p) => p.verb)}
              index={active}
              className="text-[var(--color-accent)]"
            />
          </span>
          <SplitReveal text="We own it." delay={0.25} />
        </h1>

        {/* Service row — names the offer in-fold and stays synced to the
            rotating verb. Hover a service to drive the headline yourself. */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          onMouseLeave={() => setPaused(false)}
          className="mt-8 flex flex-wrap items-center gap-2"
        >
          <span className="mono mr-1 text-[var(--muted-foreground)]">What we own:</span>
          {pitch.map((p, i) => (
            <Link
              key={p.service}
              href="/services"
              data-cursor="services"
              onMouseEnter={() => {
                setActive(i);
                setPaused(true);
              }}
              className="relative inline-flex items-center rounded-full border border-[var(--border-c)] px-3 py-1.5 text-sm"
            >
              {i === active && (
                <motion.span
                  layoutId="pitchPill"
                  aria-hidden
                  className="absolute inset-0 rounded-full bg-[var(--color-accent)]"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span
                className={`relative z-10 transition-colors duration-200 ${
                  i === active ? "text-black" : "text-[var(--muted-foreground)]"
                }`}
              >
                {p.service}
              </span>
            </Link>
          ))}
        </motion.div>

        <div className="mt-10 grid gap-10 md:grid-cols-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="md:col-span-5 md:col-start-1 text-balance text-base text-[var(--muted-foreground)] sm:text-lg"
          >
            Bricknclick is a digital agency that ships. Performance ads,
            websites engineered for speed and search, and content built like
            infrastructure — under one accountable roof.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
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

        {/* Mobile / tablet receipts — 2 metrics on phones, 4 on tablets+. */}
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
                className={`border-l border-[var(--border-c)] pl-3 first:border-l-0 first:pl-0 sm:pl-4 ${
                  i >= 2 ? "hidden sm:block" : ""
                }`}
              >
                <p className="display text-2xl leading-none text-[var(--color-accent)] sm:text-3xl">
                  <CountUp value={m.value} delay={0.95 + i * 0.08} />
                </p>
                <p className="mono mt-1.5 text-[10px] leading-snug text-[var(--muted-foreground)]">
                  {eoiLabel(m.label)}
                </p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      {/* Scroll cue — hidden on mobile. */}
      <div className="relative mx-auto mt-16 hidden w-full max-w-7xl items-center justify-between px-6 md:flex">
        <span className="mono text-[var(--muted-foreground)]">Scroll to explore ↓</span>
        <span className="mono text-[var(--muted-foreground)]">© 2026 — All rights reserved</span>
      </div>
    </section>
  );
}
