import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost } from "@/lib/posts";
import { SplitReveal } from "@/components/reveal";
import { BigCta } from "@/components/home/big-cta";

type Params = { slug: string };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [post.author],
      images: post.cover ? [{ url: post.cover, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.cover ? [post.cover] : undefined,
    },
  };
}

const mdxComponents = {
  h2: (props: any) => (
    <h2
      className="display mt-16 mb-4 text-3xl tracking-tight md:text-4xl"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3 className="display mt-10 mb-3 text-2xl md:text-3xl" {...props} />
  ),
  p: (props: any) => (
    <p className="mt-6 text-lg leading-relaxed text-[var(--foreground)]/85 md:text-xl" {...props} />
  ),
  ul: (props: any) => <ul className="mt-6 space-y-3" {...props} />,
  ol: (props: any) => <ol className="mt-6 list-decimal space-y-3 pl-6" {...props} />,
  li: (props: any) => <li className="text-lg leading-relaxed text-[var(--foreground)]/85 md:text-xl" {...props} />,
  a: (props: any) => (
    <a className="underline-grow text-[var(--color-accent)]" {...props} />
  ),
  hr: () => <hr className="my-12 border-[var(--border-c)]" />,
  strong: (props: any) => <strong className="font-semibold text-[var(--foreground)]" {...props} />,
  blockquote: (props: any) => (
    <blockquote
      className="my-8 border-l-4 border-[var(--color-accent)] pl-6 text-2xl leading-snug text-balance"
      {...props}
    />
  ),
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const all = getAllPosts();
  const idx = all.findIndex((p) => p.slug === slug);
  const next = all[(idx + 1) % all.length];

  const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://bricknclick.com";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: SITE,
      sameAs: [
        "https://www.linkedin.com/company/bricknclick/",
        "https://www.instagram.com/bricknclick.ai/",
        "https://x.com/bricknclick_ai",
      ],
    },
    publisher: {
      "@type": "Organization",
      name: "Bricknclick",
      logo: { "@type": "ImageObject", url: `${SITE}/logo.png` },
    },
    image: post.cover,
    mainEntityOfPage: `${SITE}/blog/${post.slug}`,
    keywords: post.tags?.join(", "),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Journal", item: `${SITE}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${SITE}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <article>
        <header className="mx-auto max-w-3xl px-6 pt-40 pb-12">
          <div className="mono flex flex-wrap items-center gap-3 text-[var(--muted-foreground)]">
            <Link href="/blog" className="underline-grow">
              ← Journal
            </Link>
            <span>·</span>
            <span>{post.category}</span>
            <span>·</span>
            <span>
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span>· {post.readingTime} min read</span>
          </div>
          <h1 className="display mt-8 text-[clamp(40px,6vw,80px)] text-balance">
            <SplitReveal text={post.title} />
          </h1>
          <p className="mt-8 text-balance text-xl text-[var(--muted-foreground)]">
            {post.description}
          </p>
        </header>

        {post.cover ? (
          <div className="mx-auto max-w-5xl px-6">
            <div className="relative aspect-[16/9] overflow-hidden rounded-md">
              <Image
                src={post.cover}
                alt={post.title}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        ) : null}

        <div className="prose mx-auto max-w-3xl px-6 py-16">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>

        <section className="mx-auto max-w-3xl px-6 pb-20">
          <div className="rounded-2xl border border-[var(--border-c)] bg-[var(--card)] p-8">
            <p className="mono text-[var(--muted-foreground)]">Read next</p>
            <Link
              href={`/blog/${next.slug}`}
              data-cursor="read next"
              className="group mt-3 block"
            >
              <h3 className="display text-2xl transition-transform duration-500 group-hover:translate-x-2 md:text-3xl">
                {next.title}
              </h3>
              <p className="mt-2 text-[var(--muted-foreground)]">{next.description}</p>
            </Link>
          </div>
        </section>
      </article>

      <BigCta />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
