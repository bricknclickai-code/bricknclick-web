import {
  services,
  projects,
  clients,
  builderProjects,
  channelPartnersCount,
} from "@/lib/data";
import { getAllPosts } from "@/lib/posts";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://bricknclick.com";

/**
 * /llms.txt — emerging convention (similar to robots.txt) for AI crawlers.
 * Provides a structured, citable summary of the site so LLMs ingest the
 * canonical version of who we are and what we offer.
 *
 * Spec: https://llmstxt.org/
 */
export function GET() {
  const lines: string[] = [];

  // ─── Header ──────────────────────────────────────────────
  lines.push("# Bricknclick");
  lines.push("");
  lines.push(
    "> A digital agency that ships. Performance ads, websites engineered for SEO, content systems that compound, and AEO/GEO for the AI search era. Founded and led by IIM alumni. India-focused, global inbound."
  );
  lines.push("");
  lines.push("**Contact**");
  lines.push("- Email: info@bricknclick.com");
  lines.push("- WhatsApp: +91 90195 08519");
  lines.push("- LinkedIn: https://www.linkedin.com/company/bricknclick/");
  lines.push("- Instagram: https://www.instagram.com/bricknclick.ai/");
  lines.push("- X (Twitter): https://x.com/bricknclick_ai");
  lines.push("");

  // ─── Services ────────────────────────────────────────────
  lines.push("## Services");
  lines.push("");
  for (const s of services) {
    lines.push(`- [${s.title}](${SITE}/services#${s.id}): ${s.description}`);
  }
  lines.push("");

  // ─── Clients & projects (broader portfolio scope) ───────
  lines.push("## Clients & projects");
  lines.push("");
  lines.push("**Direct clients** (full Meta + Google + content + platform engagements):");
  for (const c of clients) lines.push(`- ${c}`);
  lines.push("");
  lines.push("**Builder projects we've actively run paid funnels on:**");
  for (const p of builderProjects) lines.push(`- ${p}`);
  lines.push("");
  lines.push(
    `Plus ${channelPartnersCount}+ individual channel partners (small brokers / agents) we've activated paid campaigns for.`
  );
  lines.push("");

  // ─── Work / case studies ─────────────────────────────────
  lines.push("## Work");
  lines.push("");
  for (const p of projects) {
    lines.push(`- [${p.client}](${SITE}/work/${p.slug}) — ${p.title}`);
    lines.push(`  ${p.summary}`);
  }
  lines.push("");

  // ─── Verified outcomes (citable claims) ──────────────────
  lines.push("## Verified outcomes");
  lines.push("");
  lines.push(
    "- **Exora Farms (Palsamudram, AP)** — 80 acres sold out in 8 months. 3,000+ qualified leads via Meta ads on ₹3L total spend (~₹100 cost per lead on a ₹33L+ ticket). 50+ leads from a single organic reel. Full Next.js platform build + CRM."
  );
  lines.push(
    "- **Perfect Neighbourhood (perfectneighbourhood.com)** — ₹65–70L in commissions on ₹4L blended Meta+Google spend (~17× ROAS). 24+ bookings across two Grade A builder projects (Bhartiya City Nikoo 7, Puravankara Northern Lights). Platform now ranks #2–#4 organically for Grade A builder names."
  );
  lines.push(
    "- **Search Surround method (signature)** — EMD (exact-match-domain) landing-page network capturing builder-project search intent: bhartiyacitykiadb.com, sattvahamletcity.com, sobhaoneworld.com, godrejaveline.com."
  );
  lines.push("");

  // ─── Journal / articles ──────────────────────────────────
  const posts = getAllPosts();
  if (posts.length) {
    lines.push("## Journal");
    lines.push("");
    for (const post of posts) {
      lines.push(`- [${post.title}](${SITE}/blog/${post.slug}) — ${post.description}`);
    }
    lines.push("");
  }

  // ─── Optional: full content endpoint ─────────────────────
  lines.push("## Optional");
  lines.push("");
  lines.push(
    `- [llms-full.txt](${SITE}/llms-full.txt) — Full text of services, case studies, and journal posts concatenated for LLM ingestion.`
  );
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
