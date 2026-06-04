import { services, projects } from "@/lib/data";
import { getAllPosts } from "@/lib/posts";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://bricknclick.com";

/**
 * /llms-full.txt — companion to /llms.txt that ships the full text content.
 * LLM-friendly retrieval target — agents that need the whole site context
 * fetch this once instead of crawling N pages.
 *
 * Spec: https://llmstxt.org/
 */
export function GET() {
  const out: string[] = [];

  out.push("# Bricknclick — Full content");
  out.push("");
  out.push(
    "A digital agency that ships. Performance ads, websites engineered for SEO, content systems that compound, and AEO/GEO for the AI search era. Founded and led by IIM alumni."
  );
  out.push("");
  out.push("---");
  out.push("");

  // ─── Services with full FAQ ────────────────────────────────
  out.push("## Services");
  out.push("");
  for (const s of services) {
    out.push(`### ${s.index} — ${s.title}`);
    out.push("");
    out.push(`**Tagline:** ${s.tagline}`);
    out.push("");
    out.push(s.description);
    out.push("");
    out.push("**Capabilities:**");
    for (const c of s.capabilities) out.push(`- ${c}`);
    out.push("");
    out.push("**Deliverables:**");
    for (const d of s.deliverables) out.push(`- ${d}`);
    out.push("");
    out.push(`**Headline metric:** ${s.metric.value} — ${s.metric.label}`);
    out.push("");
    out.push("**FAQ:**");
    for (const f of s.faqs) {
      out.push(`- Q: ${f.q}`);
      out.push(`  A: ${f.a}`);
    }
    out.push("");
    out.push(`URL: ${SITE}/services#${s.id}`);
    out.push("");
    out.push("---");
    out.push("");
  }

  // ─── Case studies ──────────────────────────────────────────
  out.push("## Case studies");
  out.push("");
  for (const p of projects) {
    out.push(`### ${p.client} — ${p.title}`);
    out.push("");
    out.push(`Year: ${p.year} · Status: ${p.status}`);
    out.push(`Services: ${p.services.join(" · ")}`);
    out.push("");
    out.push(p.summary);
    out.push("");
    out.push("**Headline metrics:**");
    for (const m of p.metrics) out.push(`- ${m.value} — ${m.label}`);
    out.push("");
    out.push("**Detailed outcomes:**");
    for (const r of p.results) out.push(`- ${r}`);
    out.push("");
    out.push(`URL: ${SITE}/work/${p.slug}`);
    out.push("");
    out.push("---");
    out.push("");
  }

  // ─── Journal posts (full content) ──────────────────────────
  out.push("## Journal");
  out.push("");
  const posts = getAllPosts();
  for (const post of posts) {
    out.push(`### ${post.title}`);
    out.push("");
    out.push(
      `Published: ${post.date} · Category: ${post.category} · Reading time: ${post.readingTime} min`
    );
    out.push("");
    out.push(post.description);
    out.push("");
    out.push(post.content);
    out.push("");
    out.push(`URL: ${SITE}/blog/${post.slug}`);
    out.push("");
    out.push("---");
    out.push("");
  }

  return new Response(out.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
