import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects, type Project } from "@/lib/data";
import { Reveal, SplitReveal } from "@/components/reveal";
import { BigCta } from "@/components/home/big-cta";
import { Magnetic } from "@/components/magnetic";
import { LiveCampaigns } from "@/components/work/live-campaigns";

export const metadata: Metadata = {
  title: "Work — Selected case studies",
  description:
    "Selected case studies from Bricknclick. Real numbers, real outcomes — Exora Farms (sold out 80 acres on ₹3L) and Perfect Neighbourhood (₹65L+ commissions on ₹6L).",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-40 pb-16">
        <span className="mono text-[var(--muted-foreground)]">
          [ Selected work — {projects.length} engagements ]
        </span>
        <h1 className="display mt-6 text-[clamp(56px,11vw,200px)]">
          <SplitReveal text="The work." />
        </h1>
        <p className="mt-10 max-w-2xl text-balance text-lg text-[var(--muted-foreground)]">
          A short list, on purpose. Each case is a real engagement with real
          numbers — the kind we'd want a future client to see before they call.
        </p>
      </section>

      <LiveCampaigns />

      <section className="border-t border-[var(--border-c)]">
        {projects.map((project, i) => (
          <FeaturedCaseRow key={project.slug} project={project} index={i} />
        ))}
      </section>

      <section className="border-t border-[var(--border-c)] bg-[var(--card)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-32 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="mono text-[var(--muted-foreground)]">[ Coming soon ]</span>
            <h2 className="display mt-4 text-[clamp(40px,6vw,80px)]">
              <SplitReveal text="More cases" />
              <SplitReveal text="shipping" delay={0.08} />
              <SplitReveal text="this quarter." delay={0.16} />
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-lg text-[var(--muted-foreground)] md:text-xl">
              We'd rather publish a case with real numbers than ten with
              borrowed ones. The next set drops as it clears client approval.
            </p>
            <div className="mt-10">
              <Magnetic strength={0.3}>
                <Link
                  href="/contact"
                  data-cursor="let's talk"
                  className="group inline-flex h-12 items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 text-sm font-medium text-black"
                >
                  Start a project
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>
      </section>

      <BigCta />
    </>
  );
}

function FeaturedCaseRow({ project, index }: { project: Project; index: number }) {
  // Alternate image/text sides for visual rhythm
  const imageFirst = index % 2 === 0;
  return (
    <Link
      href={`/work/${project.slug}`}
      data-cursor="view case"
      className="group block border-b border-[var(--border-c)]"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-12 md:py-32">
        <div
          className={
            imageFirst ? "md:col-span-6 md:col-start-1" : "md:col-span-6 md:col-start-7 md:row-start-1"
          }
        >
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-md">
              <Image
                src={project.cover}
                alt={`${project.client} — ${project.title}`}
                fill
                sizes="(min-width: 768px) 50vw, 92vw"
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                priority={index === 0}
              />
              <div
                className="pointer-events-none absolute inset-0 opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-30"
                style={{ background: project.accent }}
              />
            </div>
          </Reveal>
        </div>

        <div
          className={`flex flex-col justify-between ${
            imageFirst ? "md:col-span-6 md:col-start-7" : "md:col-span-6 md:col-start-1 md:row-start-1"
          }`}
        >
          <div>
            <h2 className="display text-[clamp(40px,8vw,128px)] leading-[0.9] transition-transform duration-500 group-hover:translate-x-2">
              {project.client}
            </h2>
            <p className="display mt-4 text-2xl text-[var(--muted-foreground)] md:text-3xl">
              {project.title}
            </p>
            <p className="mt-6 max-w-md text-[var(--muted-foreground)]">
              {project.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.services.map((s) => (
                <span
                  key={s}
                  className="mono rounded-full border border-[var(--border-c)] px-3 py-1 text-[10px] text-[var(--muted-foreground)]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-[var(--border-c)] pt-6">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <p
                  className="display text-3xl md:text-4xl"
                  style={{ color: project.accent }}
                >
                  {m.value}
                </p>
                <p className="mono mt-2 text-[10px] text-[var(--muted-foreground)]">
                  {m.label}
                </p>
              </div>
            ))}
          </div>

          <span className="mono mt-10 inline-flex items-center gap-2 self-start text-[var(--foreground)] transition-transform group-hover:translate-x-1">
            Read the case →
          </span>
        </div>
      </div>
    </Link>
  );
}
