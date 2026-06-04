import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { SplitReveal } from "@/components/reveal";
import { BigCta } from "@/components/home/big-cta";

export const metadata: Metadata = {
  title: "Journal — Field notes on ads, web, and content",
  description:
    "Field notes from the Bricknclick team on performance marketing, Next.js, SEO, and content infrastructure.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const [latest, ...rest] = posts;

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-40 pb-16">
        <span className="mono text-[var(--muted-foreground)]">
          [ Journal — {posts.length} posts ]
        </span>
        <h1 className="display mt-6 text-[clamp(56px,11vw,200px)]">
          <SplitReveal text="Field notes." />
        </h1>
        <p className="mt-10 max-w-2xl text-balance text-lg text-[var(--muted-foreground)]">
          Practical notes from the Bricknclick team. The frameworks we run,
          the playbooks we ship, and the things we got wrong (so you don't have to).
        </p>
      </section>

      {latest ? (
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <Link
            href={`/blog/${latest.slug}`}
            data-cursor="read"
            className="group grid items-center gap-8 md:grid-cols-12"
          >
            <div className="md:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden rounded-md">
                {latest.cover ? (
                  <Image
                    src={latest.cover}
                    alt={latest.title}
                    fill
                    sizes="(min-width: 768px) 60vw, 92vw"
                    className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                ) : null}
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="mono flex flex-wrap items-center gap-3 text-[var(--muted-foreground)]">
                <span className="rounded-full border border-[var(--border-c)] px-2 py-0.5">
                  {latest.category}
                </span>
                <span>{new Date(latest.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
                <span>· {latest.readingTime} min read</span>
              </div>
              <h2 className="display mt-6 text-3xl text-balance transition-transform duration-500 group-hover:translate-x-2 md:text-5xl">
                {latest.title}
              </h2>
              <p className="mt-4 text-[var(--muted-foreground)]">{latest.description}</p>
            </div>
          </Link>
        </section>
      ) : null}

      <section className="border-t border-[var(--border-c)]">
        <ul className="mx-auto max-w-7xl">
          {rest.map((p, i) => (
            <li key={p.slug} className="border-b border-[var(--border-c)]">
              <Link
                href={`/blog/${p.slug}`}
                data-cursor="read"
                className="grid grid-cols-12 items-center gap-4 px-6 py-8 transition-colors hover:bg-[var(--card)]"
              >
                <span className="mono col-span-2 text-[var(--muted-foreground)] md:col-span-1">
                  {String(i + 2).padStart(2, "0")}
                </span>
                <div className="col-span-10 md:col-span-7">
                  <p className="mono text-[var(--color-accent)]">{p.category}</p>
                  <h3 className="display mt-2 text-2xl md:text-3xl">{p.title}</h3>
                </div>
                <span className="mono hidden text-[var(--muted-foreground)] md:col-span-2 md:block">
                  {p.readingTime} min
                </span>
                <span className="mono hidden text-right text-[var(--muted-foreground)] md:col-span-2 md:block">
                  {new Date(p.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <BigCta />
    </>
  );
}
