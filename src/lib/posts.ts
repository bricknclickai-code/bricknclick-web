import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readingTime: number;
  author: string;
  cover?: string;
  tags?: string[];
};

export type Post = PostMeta & { content: string };

const ROOT = path.join(process.cwd(), "src/content/blog");

function ensureDir() {
  if (!fs.existsSync(ROOT)) fs.mkdirSync(ROOT, { recursive: true });
}

function readingTimeOf(content: string): number {
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

export function getAllPosts(): Post[] {
  ensureDir();
  const files = fs.readdirSync(ROOT).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx?$/, "");
    const raw = fs.readFileSync(path.join(ROOT, file), "utf8");
    const { data, content } = matter(raw);
    return {
      slug,
      title: data.title as string,
      description: data.description as string,
      date: data.date as string,
      category: (data.category as string) || "Journal",
      author: (data.author as string) || "Bricknclick",
      cover: data.cover as string | undefined,
      tags: (data.tags as string[]) || [],
      readingTime: readingTimeOf(content),
      content,
    } satisfies Post;
  });
  return posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function getPost(slug: string): Post | null {
  return getAllPosts().find((p) => p.slug === slug) ?? null;
}
