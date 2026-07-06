export type Reel = {
  /** Instagram reel/post permalink. Replace the profile fallback with the
   *  actual reel URL, e.g. "https://www.instagram.com/reel/ABC123/". */
  url: string;
  title: string;
  /** Short context line, e.g. "Exora Farms · 50+ leads". */
  meta: string;
  /** Optional 9:16 poster/thumbnail — a path in /public (e.g. "/reels/exora.jpg")
   *  or a remote URL. If omitted, a branded gradient card is shown instead. */
  poster?: string;
  accent: string;
};

export const instagramProfile = "https://www.instagram.com/bricknclick.ai/";

// ─── Reels shown in the home "Video & social" section ──────────────────────
// TODO: paste the real Instagram reel permalink into `url` for each card, and
// (optionally) drop a 9:16 thumbnail into /public/reels and set `poster`.
export const reels: Reel[] = [
  {
    url: "https://www.instagram.com/reel/DaW32idJzE2/",
    title: "Plots at ₹30 lakhs onwards",
    meta: "Real estate short-form",
    poster: "/reels/reel-1.png",
    accent: "#22C55E",
  },
  {
    url: "https://www.instagram.com/reel/DaXLfLVpqTJ/",
    title: "What ₹32,00,000 gets you in Hoskote",
    meta: "Farmland walkthrough",
    poster: "/reels/reel-2.png",
    accent: "#FF6B1A",
  },
  {
    url: "https://www.instagram.com/reel/DaXMFgDJ32v/",
    title: "5 km from Sumadhura Logistics Park",
    meta: "Location explainer",
    poster: "/reels/reel-3.png",
    accent: "#2563EB",
  },
  {
    url: "https://www.instagram.com/reel/DaPm6hFpBep/",
    title: "Right on Hennur Main Road",
    meta: "Location explainer",
    poster: "/reels/reel-4.png",
    accent: "#D946EF",
  },
  {
    url: "https://www.instagram.com/reel/DYzhyo4JXKt/",
    title: "Lodha Sadahalli",
    meta: "Builder project film",
    poster: "/reels/reel-5.png",
    accent: "#F59E0B",
  },
];
