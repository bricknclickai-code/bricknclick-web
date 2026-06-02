"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import { Magnetic } from "../magnetic";
import { SplitReveal } from "../reveal";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative grain isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-[var(--background)] pb-12 pt-36"
    >
      <motion.div style={{ y, opacity }} className="mx-auto w-full max-w-7xl px-6">
        <h1 className="display text-[clamp(64px,14vw,260px)] text-[var(--foreground)]">
          <SplitReveal text="We don't" delay={0.05} />
          <SplitReveal text="just build." delay={0.15} />
          <span className="flex items-center gap-4">
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
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-[var(--foreground)] px-6 text-sm font-medium text-[var(--background)] transition-transform hover:scale-[1.02]"
              >
                See our work
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </Magnetic>
            <Magnetic strength={0.3}>
              <Link
                href="/contact"
                data-cursor="say hi"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-[var(--border-c)] px-6 text-sm font-medium hover:bg-[var(--card)]"
              >
                Start a project
              </Link>
            </Magnetic>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <div className="mx-auto mt-16 flex w-full max-w-7xl items-center justify-between px-6">
        <span className="mono text-[var(--muted-foreground)]">Scroll to explore ↓</span>
        <span className="mono text-[var(--muted-foreground)]">© 2026 — All rights reserved</span>
      </div>
    </section>
  );
}
