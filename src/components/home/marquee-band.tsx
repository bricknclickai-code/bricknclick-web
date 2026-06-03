"use client";

import { VelocityMarquee } from "../marquee";

const words = [
  "Performance Ads",
  "Web & Product",
  "Content & Brand",
  "AEO & GEO",
  "SEO that compounds",
  "Creative that ships",
  "Be the answer",
  "We own it",
];

export function MarqueeBand() {
  return (
    <section className="border-y border-[var(--border-c)] bg-[var(--background)] py-6">
      <VelocityMarquee baseSpeed={1}>
        {words.map((w, i) => (
          <span
            key={i}
            className="display flex items-center gap-12 text-[10vw] leading-none tracking-[-0.04em] text-[var(--foreground)]"
          >
            {w}
            <span className="inline-block h-3 w-3 rounded-full bg-[var(--color-accent)]" />
          </span>
        ))}
      </VelocityMarquee>
    </section>
  );
}
