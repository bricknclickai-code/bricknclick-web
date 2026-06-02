export type Service = {
  id: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  deliverables: string[];
  metric: { value: string; label: string };
};

export const services: Service[] = [
  {
    id: "ads",
    index: "001",
    title: "Performance Ads",
    tagline: "Spend smarter. Convert harder.",
    description:
      "Full-funnel paid media across Meta, Google, and YouTube. We run creative tests like product experiments — measured, ruthless, and built to compound.",
    capabilities: [
      "Meta & Instagram ads",
      "Google Search, Performance Max & YouTube",
      "Creative testing frameworks",
      "Landing page optimization",
      "Attribution & MMM setup",
      "Lifecycle & retention",
    ],
    deliverables: [
      "Account audit + 90-day plan",
      "Creative iteration sprints",
      "Weekly performance reviews",
      "Dashboards you actually read",
    ],
    metric: { value: "~17×", label: "best blended ROAS to date" },
  },
  {
    id: "web",
    index: "002",
    title: "Web & Product",
    tagline: "Sites that load fast. Pages that rank. Products that ship.",
    description:
      "Next.js websites, marketing pages, and product surfaces built for Core Web Vitals, SEO, and conversion — engineered, not assembled.",
    capabilities: [
      "Next.js 15+ marketing sites",
      "Full-stack apps with admin dashboards & CMS",
      "WordPress → Next.js migrations",
      "Headless CMS (Sanity / Payload)",
      "Landing-page networks for paid funnels",
      "Performance & accessibility audits",
    ],
    deliverables: [
      "Design + dev in one team",
      "Sub-2s LCP targets",
      "Built-in analytics & SEO",
      "Handover docs + training",
    ],
    metric: { value: "#2–4", label: "avg. organic rank for client builders" },
  },
  {
    id: "content",
    index: "003",
    title: "Content & Brand",
    tagline: "Stories that move. Content that ranks.",
    description:
      "Brand systems, SEO content engines, AI-cloned scale content, animated explainers, and short-form video. We build content like infrastructure — designed to keep working.",
    capabilities: [
      "Brand identity & guidelines",
      "Content strategy & SEO clusters",
      "AI-cloned long-form content",
      "Animated content for hero showcases",
      "Photography & art direction",
      "Newsletter & community design",
    ],
    deliverables: [
      "Editorial calendar + briefs",
      "Monthly content production",
      "Brand kit + asset library",
      "Performance reports",
    ],
    metric: { value: "₹65L+", label: "client commissions in 12 months" },
  },
];

export type Project = {
  slug: string;
  title: string;
  client: string;
  tagline: string;
  year: string;
  services: string[];
  cover: string;
  accent: string;
  status: "shipped" | "live" | "ongoing";
  metrics: { value: string; label: string }[];
  summary: string;
  results: string[];
};

export const projects: Project[] = [
  {
    slug: "exora-farms",
    title: "₹3L in. 80 acres sold out.",
    client: "Exora Farms",
    tagline: "Platform · Performance · Content · CRM",
    year: "2025–26",
    services: ["Web & Product", "Performance Ads", "Content & Brand"],
    cover: "/work/exora-farms-1.png",
    accent: "#22C55E",
    status: "ongoing",
    metrics: [
      { value: "80", label: "Acres sold out" },
      { value: "3K+", label: "Leads on ₹3L spend" },
      { value: "50+", label: "Leads from one reel" },
    ],
    summary:
      "We built the Exora Farms platform, ran the paid funnel, and engineered the content engine that sold out 80 acres of premium farmland in eight months. ~₹100 cost per lead on a ₹33L+ ticket. One reel produced 50+ organic leads on its own.",
    results: [
      "80 acres sold out at Palsamudram, Andhra Pradesh — a single project flagship",
      "3,000+ qualified leads via Meta ads on ₹3L spend (~₹100 CPL on a ₹33L+ investment ticket)",
      "100+ leads from organic Instagram + website content — compounding the paid motion",
      "A single reel produced 50+ organic leads and over 10K reach",
      "End-to-end CRM wired into the funnel: every lead tracked from ad → site → sales call",
      "Full Next.js platform built from scratch — SEO-first, mobile-first, blog system included",
    ],
  },
  {
    slug: "perfect-neighbourhood",
    title: "₹5L in. ₹65L+ out.",
    client: "Perfect Neighbourhood",
    tagline: "Platform · Search Surround · Performance Ads · Content",
    year: "2024–26",
    services: ["Web & Product", "Performance Ads", "Content & Brand"],
    cover: "/work/perfect-neighbourhood-1.png",
    accent: "#FF6B1A",
    status: "ongoing",
    metrics: [
      { value: "₹65L+", label: "Commissions in 12 months" },
      { value: "24+", label: "Bookings closed" },
      { value: "~17×", label: "Blended ROAS" },
    ],
    summary:
      "We rebuilt a real-estate platform from WordPress to a full-stack Next.js product, then ran the ad funnel and SEO network that paid for it many times over. Two Grade A builder projects. 24+ bookings. A platform that now ranks itself.",
    results: [
      "₹4L blended ad spend → ₹65–70L in commissions on Bhartiya City Nikoo 7 (15–18 bookings)",
      "₹1L Meta-only spend on Puravankara Northern Lights → 8–9 bookings",
      "₹1.38L Google-only spend on Nikoo 7 → 80 qualified leads, 5 bookings",
      "Platform ranks #2–#4 organically for Grade A builder projects (Lodha, Godrej, Bhartiya City, and more)",
      "Search Surround EMD network captures buyer intent at the exact moment of project-name search",
    ],
  },
];

// Real signals on the clients strip. Direct clients (full engagements) listed
// first; the Bhartiya City and Puravankara projects are campaign-specific work
// run via the Perfect Neighbourhood engagement.
export const clients = [
  "Exora Farms",
  "Perfect Neighbourhood",
  "Bhartiya City Nikoo 7",
  "Puravankara Northern Lights",
];

export const trackedProjects = [
  "Lodha",
  "Godrej",
  "Sobha",
  "Sattva",
  "Prestige",
  "Brigade",
];
