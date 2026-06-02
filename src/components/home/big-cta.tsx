"use client";

import Link from "next/link";
import { Magnetic } from "../magnetic";
import { Reveal, SplitReveal } from "../reveal";

export function BigCta() {
  return (
    <section className="relative grain isolate overflow-hidden bg-[var(--foreground)] py-32 text-[var(--background)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <span className="mono text-[var(--background)]/60">[ Let's build something ]</span>
          <h2 className="display mt-6 text-[clamp(56px,10vw,180px)]">
            <SplitReveal text="Got a problem" />
            <SplitReveal text="worth solving?" delay={0.1} />
          </h2>
        </div>
        <Reveal className="md:col-span-4" delay={0.2}>
          <p className="mb-8 max-w-sm text-[var(--background)]/70">
            Tell us what you're working on. We'll come back within 24 hours
            with a take — even if we're not the right fit.
          </p>
          <Magnetic strength={0.35} radius={180}>
            <Link
              href="/contact"
              data-cursor="let's go"
              className="group inline-flex h-16 items-center gap-3 rounded-full bg-[var(--color-accent)] px-8 text-base font-medium text-black"
            >
              Start a project
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </Magnetic>
          <p className="mono mt-6 text-[var(--background)]/60">
            Or email: info@bricknclick.com
          </p>
        </Reveal>
      </div>
    </section>
  );
}
