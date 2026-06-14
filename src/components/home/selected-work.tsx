"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { projects, type Project } from "@/lib/data";
import { eoiLabel } from "@/lib/eoi";
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

      {/* ─── Desktop: existing asymmetric grid ───────────────────── */}
      <div className="hidden gap-x-6 gap-y-16 md:grid md:grid-cols-12">
        {projects.map((p, i) => {
          const layout =
            i === 0
              ? "md:col-span-7 md:col-start-1"
              : "md:col-span-5 md:col-start-8 md:mt-24";
          return (
            <Reveal key={p.slug} delay={i * 0.08} className={layout}>
              <DesktopProjectCard project={p} index={i} />
            </Reveal>
          );
        })}
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
   Mobile: editorial chapter card
   ────────────────────────────────────────────────────────────────
   - Huge numbered index (01, 02) in the project accent color
   - Cover image with hover/tap wash
   - Mega metric that "punches through" the image with negative margin
   - Client name in massive display
   - Other metrics in 2-col grid
   - Service pills cascade in
   - "Read the case →" in the project's accent color
*/
function MobileChapterCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });

  return (
    <article ref={ref} className="relative">
      {/* Index + year — heavy top rule in project's accent color */}
      <div
        className="mb-8 flex items-end justify-between border-b-2 pb-4"
        style={{ borderColor: project.accent }}
      >
        <motion.span
          initial={{ y: 60, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="display text-[88px] leading-[0.8] tracking-[-0.05em]"
          style={{ color: project.accent }}
        >
          {String(index + 1).padStart(2, "0")}
        </motion.span>
        <span className="mono pb-2 text-[var(--muted-foreground)]">
          {project.year}
        </span>
      </div>

      {/* Cover */}
      <Link
        href={`/work/${project.slug}`}
        className="group block"
        aria-label={`Read the ${project.client} case`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/3] overflow-hidden rounded-md bg-[var(--card)]"
        >
          <Image
            src={project.cover}
            alt={`${project.client} — ${project.title}`}
            fill
            sizes="(min-width: 640px) 600px, 92vw"
            className="object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
            priority={index === 0}
          />
          {/* Accent wash on press/hover */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-30 group-active:opacity-40"
            style={{ background: project.accent }}
          />
        </motion.div>
      </Link>

      {/* Mega metric — punches up into the image with negative margin */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative -mt-10 ml-3"
      >
        <p
          className="display text-[88px] leading-[0.85] tracking-[-0.045em]"
          style={{ color: project.accent }}
        >
          {project.metrics[0].value}
        </p>
        <p className="mono mt-2 text-[var(--muted-foreground)]">
          {eoiLabel(project.metrics[0].label)}
        </p>
      </motion.div>

      {/* Client name + tagline */}
      <Reveal delay={0.45} className="mt-10">
        <h3 className="display text-[clamp(44px,13vw,72px)] leading-[0.88] tracking-[-0.035em]">
          {project.client}
        </h3>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-[var(--muted-foreground)]">
          {project.summary.split(".")[0]}.
        </p>
      </Reveal>

      {/* Secondary metrics — 2-col grid */}
      <Reveal delay={0.55}>
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-5 border-t border-[var(--border-c)] pt-5">
          {project.metrics.slice(1).map((m) => (
            <div key={m.label}>
              <p className="display text-3xl tracking-[-0.03em]">{m.value}</p>
              <p className="mono mt-1 text-[10px] text-[var(--muted-foreground)]">
                {eoiLabel(m.label)}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Service pills cascade */}
      <Reveal delay={0.65}>
        <div className="mt-8 flex flex-wrap gap-2">
          {project.services.map((s, si) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.45,
                delay: 0.75 + si * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mono rounded-full border border-[var(--border-c)] px-3 py-1 text-[10px] text-[var(--muted-foreground)]"
            >
              {s}
            </motion.span>
          ))}
        </div>
      </Reveal>

      {/* CTA — arrow morphs on press */}
      <Reveal delay={0.85}>
        <Link
          href={`/work/${project.slug}`}
          className="mono group mt-10 inline-flex items-center gap-3 text-sm font-medium"
          style={{ color: project.accent }}
        >
          Read the case
          <span
            aria-hidden
            className="inline-block transition-transform duration-300 group-hover:translate-x-2 group-active:translate-x-3"
          >
            →
          </span>
        </Link>
      </Reveal>
    </article>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Desktop: original asymmetric card (unchanged behavior)
   ────────────────────────────────────────────────────────────── */
function DesktopProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <Link
      ref={ref}
      href={`/work/${project.slug}`}
      data-cursor="read case"
      className="group block"
    >
      <div className="relative overflow-hidden rounded-md bg-[var(--card)]">
        <motion.div style={{ y }} className="will-change-transform">
          <div className="aspect-[4/3] w-full overflow-hidden">
            <Image
              src={project.cover}
              alt={`${project.client} — ${project.title}`}
              width={1400}
              height={1050}
              className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              sizes={
                index === 0
                  ? "(min-width: 768px) 56vw, 100vw"
                  : "(min-width: 768px) 40vw, 100vw"
              }
              priority={index === 0}
            />
          </div>
        </motion.div>

        {/* Hover wash */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-30"
          style={{ background: project.accent }}
        />

        {/* Big number bottom overlay */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6">
          <p
            className="display text-3xl text-white sm:text-4xl"
            style={{ textShadow: "0 1px 12px rgba(0,0,0,0.4)" }}
          >
            <span style={{ color: project.accent }}>
              {project.metrics[0].value}
            </span>{" "}
            <span className="text-white/80">
              {eoiLabel(project.metrics[0].label, "lower")}
            </span>
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-start justify-between gap-6">
        <div>
          <p className="mono text-[var(--muted-foreground)]">
            ({String(index + 1).padStart(2, "0")}) — {project.tagline}
          </p>
          <h3 className="display mt-3 text-3xl tracking-tight transition-transform duration-500 group-hover:translate-x-1 sm:text-4xl">
            {project.client}
          </h3>
          <p className="mt-2 max-w-md text-sm text-[var(--muted-foreground)]">
            {project.title}
          </p>
        </div>
      </div>
    </Link>
  );
}
