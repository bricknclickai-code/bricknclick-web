import type { MetadataRoute } from "next";
import { projects } from "@/lib/data";
import { getAllPosts } from "@/lib/posts";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://bricknclick.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/real-estate-marketing-agency",
    "/real-estate-marketing-agency-bangalore",
    "/services",
    "/company-profile",
    "/work",
    "/about",
    "/blog",
    "/contact",
  ].map((path) => ({
    url: `${SITE}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    // Money landing pages get top priority alongside the homepage.
    priority:
      path === "" || path.startsWith("/real-estate-marketing-agency") ? 1 : 0.8,
  }));

  const legalRoutes = ["/privacy", "/terms"].map((path) => ({
    url: `${SITE}${path}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  const workRoutes = projects.map((p) => ({
    url: `${SITE}/work/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = getAllPosts().map((p) => ({
    url: `${SITE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...workRoutes, ...blogRoutes, ...legalRoutes];
}
