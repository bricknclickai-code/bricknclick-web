import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import { Reveal, SplitReveal } from "@/components/reveal";
import { BigCta } from "@/components/home/big-cta";

type Params = { slug: string };

// Slugs that have their own bespoke /work/<slug>/page.tsx — exclude here to
// avoid route conflicts. The dynamic [slug] template stays available for any
// future case that doesn't need a bespoke layout.
const BESPOKE_SLUGS = new Set(["perfect-neighbourhood", "exora-farms"]);

export async function generateStaticParams() {
  return projects
    .filter((p) => !BESPOKE_SLUGS.has(p.slug))
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.client} — ${project.title}`,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: "article",
      title: `${project.client} · Bricknclick`,
      description: project.summary,
      images: [{ url: project.cover, width: 1200, height: 630 }],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    creator: { "@type": "Organization", name: "Bricknclick" },
    about: project.client,
    dateCreated: project.year,
    description: project.summary,
  };

  return (
    <>
      <article>
        <header className="mx-auto max-w-7xl px-6 pt-40 pb-16">
          <div className="mono flex flex-wrap items-center gap-3 text-[var(--muted-foreground)]">
            <Link href="/work" className="underline-grow">
              ← All work
            </Link>
            <span>·</span>
            <span>{project.year}</span>
            <span>·</span>
            <span className="capitalize">{project.status}</span>
          </div>
          <h1 className="display mt-8 text-[clamp(48px,9vw,160px)]">
            <SplitReveal text={project.client} />
          </h1>
          <p className="mt-6 max-w-3xl text-balance text-xl text-[var(--muted-foreground)] md:text-2xl">
            {project.title}
          </p>
          <div className="mt-10 flex flex-wrap gap-2">
            {project.services.map((s) => (
              <span
                key={s}
                className="mono rounded-full border border-[var(--border-c)] px-3 py-1 text-[var(--muted-foreground)]"
              >
                {s}
              </span>
            ))}
          </div>
        </header>

        <Reveal>
          <div className="relative mx-auto aspect-[16/9] w-full max-w-7xl overflow-hidden rounded-md md:px-6">
            <div
              className="absolute inset-0 md:left-6 md:right-6"
              style={{ background: project.accent + "20" }}
            />
            <Image
              src={project.cover}
              alt={project.client}
              width={2400}
              height={1350}
              className="relative h-full w-full object-cover md:rounded-md"
              priority
              sizes="(min-width: 1280px) 1200px, 92vw"
            />
          </div>
        </Reveal>

        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-32 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="mono text-[var(--muted-foreground)]">The brief</span>
            <h2 className="display mt-6 text-4xl md:text-5xl">
              What was on the table.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-xl text-[var(--muted-foreground)] md:text-2xl">
              {project.summary}
            </p>
          </div>
        </section>

        <section className="border-y border-[var(--border-c)] bg-[var(--card)]">
          <div className="mx-auto grid max-w-7xl gap-4 px-6 py-20 md:grid-cols-3">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="border-l border-[var(--border-c)] pl-6 first:border-l-0 first:pl-0 md:border-l md:pl-6"
              >
                <p className="display text-6xl text-[var(--color-accent)] md:text-7xl">
                  {m.value}
                </p>
                <p className="mono mt-2 text-[var(--muted-foreground)]">{m.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-32 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="mono text-[var(--muted-foreground)]">The outcome</span>
            <h2 className="display mt-6 text-4xl md:text-5xl">
              What changed.
            </h2>
          </div>
          <ul className="space-y-6 md:col-span-7 md:col-start-6">
            {project.results.map((r, i) => (
              <li
                key={i}
                className="flex items-start gap-4 border-b border-[var(--border-c)] pb-6 text-lg md:text-xl"
              >
                <span className="mono shrink-0 text-[var(--color-accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Next project */}
        <section className="border-t border-[var(--border-c)]">
          <Link
            href={`/work/${next.slug}`}
            data-cursor="next case"
            className="group relative isolate block overflow-hidden bg-[var(--card)]"
          >
            <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-24 md:grid-cols-12">
              <div className="md:col-span-6">
                <span className="mono text-[var(--muted-foreground)]">Next case →</span>
                <h3 className="display mt-4 text-[clamp(40px,8vw,128px)] transition-transform duration-700 group-hover:translate-x-4">
                  {next.client}
                </h3>
                <p className="mt-4 max-w-md text-[var(--muted-foreground)]">
                  {next.title}
                </p>
              </div>
              <div className="md:col-span-6">
                <div className="aspect-[4/3] overflow-hidden rounded-md">
                  <Image
                    src={next.cover}
                    alt={next.client}
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </Link>
        </section>
      </article>

      <BigCta />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
