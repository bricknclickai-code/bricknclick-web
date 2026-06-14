"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { projects, type Project } from "@/lib/data";
import { eoiLabel } from "@/lib/eoi";
import { CountUp } from "../count-up";
import { Reveal, SplitReveal } from "../reveal";

export function SelectedWork() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20 md:py-32">
      <div className="mb-10 flex items-end justify-between md:mb-16">
        <div>
          <span className="mono text-[var(--muted-foreground)]">[ Selected work ]</span>
          <h2 className="display mt-4 text-[clamp(40px,6vw,96px)]">
            <SplitReveal text="Real cases." />
            <SplitReveal text="Real numbers." delay={0.1} />
          </h2>
        </div>
        <Link
          href="/work"
          data-cursor="all work"
          className="mono hidden self-end pb-3 text-[var(--muted-foreground)] hover:text-[var(--foreground)] md:inline-block"
        >
          See all work →
        </Link>
      </div>

      {/* ─── Mobile: editorial chapter cards ─────────────────────── */}
      <div className="space-y-24 md:hidden">
        {projects.map((p, i) => (
          <MobileChapterCard key={p.slug} project={p} index={i} />
        ))}
      </div>

      {/* ─── Desktop: alternating feature rows ───────────────────── */}
      <div className="hidden flex-col gap-28 md:flex lg:gap-36">
        {projects.map((p, i) => (
          <FeatureRow key={p.slug} project={p} index={i} />
        ))}
      </div>

      {/* Mobile-only "See all work" link below the cards */}
      <div className="mt-10 flex justify-center md:mt-16 md:hidden">
        <Link
          href="/work"
          className="mono inline-flex items-center gap-2 border-b border-[var(--foreground)] pb-1"
        >
          See all work
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Mobile: editorial chapter card (mirrors the desktop feature row)
   ────────────────────────────────────────────────────────────────
   - Cover with index + ongoing badges and an accent wash on tap
   - Big client name, accent headline metric, one-line summary
   - Count-up stat trio, service pills, and an accent CTA
*/
function MobileChapterCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });

  return (
    <article ref={ref} className="relative">
      {/* Eyebrow */}
      <div className="mb-4 flex items-center justify-between gap-4">
        <span className="mono text-[11px] text-[var(--muted-foreground)]">
          ({String(index + 1).padStart(2, "0")}) — {project.tagline}
        </span>
        <span className="mono shrink-0 text-[11px]" style={{ color: project.accent }}>
          {project.year}
        </span>
      </div>

      {/* Cover */}
      <Link
        href={`/work/${project.slug}`}
        className="group relative block overflow-hidden rounded-xl bg-[var(--card)]"
        aria-label={`Read the ${project.client} case`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/3] overflow-hidden"
        >
          <Image
            src={project.cover}
            alt={`${project.client} — ${project.title}`}
            fill
            sizes="(min-width: 640px) 600px, 92vw"
            className="object-cover transition-transform duration-[1400ms] group-active:scale-[1.04]"
            priority={index === 0}
          />
          {/* Accent wash on tap */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 mix-blend-multiply transition-opacity duration-500 group-active:opacity-30"
            style={{ background: project.accent }}
          />
          <span className="mono absolute left-4 top-4 rounded-full bg-black/30 px-3 py-1 text-[11px] text-white backdrop-blur-sm">
            {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </span>
          {project.status === "ongoing" && (
            <span className="mono absolute right-4 top-4 flex items-center gap-2 rounded-full bg-black/30 px-3 py-1 text-[11px] text-white backdrop-blur-sm">
              <span className="relative inline-flex h-1.5 w-1.5">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-70"
                  style={{ background: project.accent }}
                />
                <span
                  className="relative inline-flex h-1.5 w-1.5 rounded-full"
                  style={{ background: project.accent }}
                />
              </span>
              Ongoing
            </span>
          )}
        </motion.div>
      </Link>

      {/* Client + headline metric */}
      <Reveal className="mt-6">
        <h3 className="display text-[clamp(40px,12vw,60px)] leading-[0.9] tracking-[-0.035em]">
          {project.client}
        </h3>
        <p className="mt-3 text-lg font-medium" style={{ color: project.accent }}>
          {project.title}
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted-foreground)]">
          {project.summary.split(".")[0]}.
        </p>
      </Reveal>

      {/* Stat trio */}
      <Reveal delay={0.1}>
        <div className="mt-7 grid grid-cols-3 gap-3 border-t border-[var(--border-c)] pt-5">
          {project.metrics.map((m, mi) => (
            <div key={m.label}>
              <p
                className="display text-2xl leading-none tracking-[-0.02em]"
                style={{ color: project.accent }}
              >
                <CountUp value={m.value} delay={0.1 + mi * 0.08} />
              </p>
              <p className="mono mt-1.5 text-[10px] leading-snug text-[var(--muted-foreground)]">
                {eoiLabel(m.label)}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Services + CTA */}
      <Reveal delay={0.2}>
        <div className="mt-7 flex flex-wrap gap-2">
          {project.services.map((s) => (
            <span
              key={s}
              className="mono rounded-full border border-[var(--border-c)] px-3 py-1 text-[10px] text-[var(--muted-foreground)]"
            >
              {s}
            </span>
          ))}
        </div>
        <Link
          href={`/work/${project.slug}`}
          className="group mt-7 inline-flex items-center gap-3 text-sm font-medium"
          style={{ color: project.accent }}
        >
          Read the case
          <span
            aria-hidden
            className="inline-block transition-transform duration-300 group-active:translate-x-2"
          >
            →
          </span>
        </Link>
      </Reveal>
    </article>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Desktop: alternating full-width feature row
   ────────────────────────────────────────────────────────────────
   - Large parallax cover on one side, rich info panel on the other,
     zigzagging left/right per index
   - Index + ongoing badges, accent wash, and a "View case" chip on hover
   - Giant client name, accent headline metric, count-up stat trio,
     service pills, and an accent CTA — all in the project's own color
*/
function FeatureRow({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  const imgLeft = index % 2 === 0;
  const imageClass = imgLeft
    ? "md:col-span-7"
    : "md:col-start-6 md:col-span-7 md:row-start-1";
  const contentClass = imgLeft
    ? "md:col-span-5"
    : "md:col-start-1 md:col-span-5 md:row-start-1";

  return (
    <div ref={ref} className="grid items-center gap-x-10 gap-y-8 md:grid-cols-12">
      {/* Cover */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={imageClass}
      >
        <Link
          href={`/work/${project.slug}`}
          data-cursor="read case"
          className="group relative block overflow-hidden rounded-xl bg-[var(--card)]"
        >
          <div className="relative aspect-[16/11] overflow-hidden">
            <motion.div
              style={{ y: imgY }}
              className="absolute -top-[8%] left-0 h-[116%] w-full will-change-transform"
            >
              <Image
                src={project.cover}
                alt={`${project.client} — ${project.title}`}
                fill
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
                priority={index === 0}
              />
            </motion.div>

            {/* Accent wash on hover */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-25"
              style={{ background: project.accent }}
            />

            {/* Index badge */}
            <span className="mono absolute left-5 top-5 rounded-full bg-black/30 px-3 py-1 text-xs text-white backdrop-blur-sm">
              {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </span>

            {/* Ongoing status */}
            {project.status === "ongoing" && (
              <span className="mono absolute right-5 top-5 flex items-center gap-2 rounded-full bg-black/30 px-3 py-1 text-xs text-white backdrop-blur-sm">
                <span className="relative inline-flex h-1.5 w-1.5">
                  <span
                    className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-70"
                    style={{ background: project.accent }}
                  />
                  <span
                    className="relative inline-flex h-1.5 w-1.5 rounded-full"
                    style={{ background: project.accent }}
                  />
                </span>
                Ongoing
              </span>
            )}

            {/* View-case chip — slides up on hover */}
            <span className="pointer-events-none absolute bottom-5 right-5 inline-flex translate-y-3 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              View case <span aria-hidden>→</span>
            </span>
          </div>
        </Link>
      </motion.div>

      {/* Info panel */}
      <div className={contentClass}>
        <Reveal>
          <p className="mono text-[var(--muted-foreground)]">
            ({String(index + 1).padStart(2, "0")}) — {project.tagline}
          </p>
          <h3 className="display mt-4 text-[clamp(40px,4.5vw,68px)] leading-[0.95] tracking-[-0.03em]">
            {project.client}
          </h3>
          <p className="mt-4 text-xl font-medium" style={{ color: project.accent }}>
            {project.title}
          </p>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[var(--muted-foreground)]">
            {project.summary.split(".")[0]}.
          </p>
        </Reveal>

        {/* Stat trio */}
        <Reveal delay={0.1}>
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-[var(--border-c)] pt-6">
            {project.metrics.map((m, mi) => (
              <div key={m.label}>
                <p
                  className="display text-3xl leading-none tracking-[-0.02em]"
                  style={{ color: project.accent }}
                >
                  <CountUp value={m.value} delay={0.1 + mi * 0.08} />
                </p>
                <p className="mono mt-2 text-[10px] leading-snug text-[var(--muted-foreground)]">
                  {eoiLabel(m.label)}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Services + CTA */}
        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {project.services.map((s) => (
              <span
                key={s}
                className="mono rounded-full border border-[var(--border-c)] px-3 py-1 text-[10px] text-[var(--muted-foreground)]"
              >
                {s}
              </span>
            ))}
          </div>
          <Link
            href={`/work/${project.slug}`}
            data-cursor="read case"
            className="group mt-8 inline-flex items-center gap-3 text-sm font-medium"
            style={{ color: project.accent }}
          >
            Read the case
            <span
              aria-hidden
              className="inline-block transition-transform duration-300 group-hover:translate-x-2"
            >
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
