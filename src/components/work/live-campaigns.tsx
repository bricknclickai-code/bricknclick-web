"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { SplitReveal } from "../reveal";

type Props = {
  /** If set, only render this many thumbnails + show a "See all" link to /work.
   *  Use on home (e.g. limit=6) to keep the section condensed. */
  limit?: number;
};

const stats = [
  { value: "₹20L+", label: "Ad spend managed" },
  { value: "5,200+", label: "Leads generated" },
  { value: "15+", label: "Real estate projects" },
  { value: "Google + Meta", label: "Platforms managed" },
];

// 15 dashboard screenshots in /public/campaign-ss/img1.jpeg through img15.jpeg
const dashboards = Array.from({ length: 15 }, (_, i) => i + 1);

export function LiveCampaigns({ limit }: Props = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const visible = limit ? dashboards.slice(0, limit) : dashboards;
  const showSeeAll = !!limit && limit < dashboards.length;

  return (
    <section className="border-t border-[var(--border-c)] bg-[var(--card)] py-20 md:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 max-w-3xl md:mb-16">
          <span className="mono text-[var(--muted-foreground)]">
            [ Live performance ]
          </span>
          <h2 className="display mt-4 text-[clamp(40px,7vw,108px)]">
            <SplitReveal text="Real campaigns." />
            <SplitReveal text="Real numbers." delay={0.1} className="text-[var(--color-accent)]" />
          </h2>
          <p className="mt-6 max-w-2xl text-balance text-lg text-[var(--muted-foreground)] md:text-xl">
            A snapshot of live Google &amp; Meta ad performance across our
            Bengaluru real-estate book of work. Receipts, not slides.
          </p>
        </div>

        {/* Stats panel — 4 dark cards */}
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {stats.map((s, i) => (
            <motion.li
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.15 + i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-2xl bg-[var(--foreground)] p-6 text-[var(--background)] md:p-8"
            >
              <p
                className={`display leading-none ${
                  s.value === "Google + Meta"
                    ? "text-2xl md:text-3xl lg:text-4xl"
                    : "text-4xl md:text-5xl lg:text-6xl"
                }`}
              >
                {s.value === "Google + Meta" ? (
                  s.value
                ) : (
                  <>
                    {s.value.replace("+", "")}
                    <span className="text-[var(--color-accent)]">+</span>
                  </>
                )}
              </p>
              <p className="mono mt-3 text-[10px] text-[var(--background)]/70 md:text-[11px]">
                {s.label}
              </p>
            </motion.li>
          ))}
        </ul>

        {/* Dashboard gallery */}
        <div className="mt-14 md:mt-20">
          <div className="mb-6 flex flex-wrap items-baseline justify-between gap-4">
            <span className="mono text-[var(--muted-foreground)]">
              [ {visible.length} live dashboards · Meta + Google Ads Manager ]
            </span>
            {showSeeAll ? (
              <Link
                href="/work"
                className="mono underline-grow inline-flex items-center gap-2 text-[var(--foreground)]"
              >
                See all {dashboards.length} <span aria-hidden>→</span>
              </Link>
            ) : (
              <span className="mono text-[10px] text-[var(--muted-foreground)]">
                Hover / tap to inspect
              </span>
            )}
          </div>

          <ul
            className={`grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 ${
              limit && limit <= 6 ? "lg:grid-cols-6" : "lg:grid-cols-5"
            }`}
          >
            {visible.map((n, i) => (
              <motion.li
                key={n}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.35 + i * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative aspect-[4/3] overflow-hidden rounded-md border border-[var(--border-c)] bg-[var(--background)]"
              >
                <Image
                  src={`/campaign-ss/img${n}.jpeg`}
                  alt={`Live campaign dashboard ${n}`}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover overlay with a small number label */}
                <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="mono m-3 rounded-full bg-black/60 px-2 py-1 text-[10px] text-white backdrop-blur">
                    Live · #{String(n).padStart(2, "0")}
                  </span>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
