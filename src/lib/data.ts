export type Service = {
  id: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  deliverables: string[];
  metric: { value: string; label: string };
  /** AEO-friendly FAQ. Rendered on /services + emitted as FAQPage JSON-LD. */
  faqs: { q: string; a: string }[];
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
    faqs: [
      {
        q: "Do you handle creative production or do we provide the assets?",
        a: "Both work. We have an in-house creative team that ships statics, reels, and motion on a weekly cadence — or we can plug into the brand assets you already have. Most engagements end up as a hybrid where we add velocity on top of your existing kit.",
      },
      {
        q: "How fast can you launch a campaign?",
        a: "1 week for audit + tracking setup, another week for creative production and launch. Mature accounts with existing creative can go live in 5 days.",
      },
      {
        q: "Which platforms do you optimize?",
        a: "Meta (Instagram + Facebook), Google Search, Performance Max, YouTube, and lifecycle tools (WhatsApp + email). For Indian real estate, the Meta + Click-to-WhatsApp combination produces our lowest CPL.",
      },
      {
        q: "How is performance reported?",
        a: "Weekly written review covering spend, leads, CPL, and creative-test results. Plus a live dashboard you can check daily. We grade ourselves on the same number you grade yourself on.",
      },
    ],
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
    faqs: [
      {
        q: "How long does a Next.js marketing site take?",
        a: "4–8 weeks for a marketing-only site. 8–12 weeks for a full-stack platform with admin dashboard + CMS + CRM wiring. Faster if your team accepts an opinionated stack; slower if every decision needs committee approval.",
      },
      {
        q: "Do you handle WordPress → Next.js migrations?",
        a: "Yes — it's one of our most common engagements. We audit every indexed URL before migration, ship a 301 redirect map on day one, and typically see organic traffic exceed pre-migration baseline by week 6.",
      },
      {
        q: "Do you offer ongoing maintenance after launch?",
        a: "Yes, on a monthly retainer. Most clients keep us for content updates, performance monitoring, feature additions, and SEO/AEO ongoing work after the initial build.",
      },
    ],
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
    faqs: [
      {
        q: "Do you handle brand identity from scratch?",
        a: "Yes — full visual + verbal systems: logo, type, color, voice, guidelines. We typically run a 3–4 week brand sprint that ends with a complete kit your team can use across web, paid, and print.",
      },
      {
        q: "What does your content production cycle look like?",
        a: "Monthly editorial calendar agreed at the start of the engagement, then 2 long-form posts + 4–8 short-form pieces (reels, carousels) shipped per month. One reel for Exora Farms produced 50+ inbound leads on its own.",
      },
      {
        q: "Can AI-cloned content rank in Google?",
        a: "Yes, when it's structured for E-E-A-T: real authors, real claims, real data. We use AI for scale (project descriptions, neighbourhood guides, FAQ surfaces) and human-write the strategic pieces. Indexability has been clean across our clients.",
      },
      {
        q: "Do you do video too?",
        a: "Animated content for hero showcases, short-form video for paid + organic, founder-talking-head content for B2B. We don't do high-end corporate film — that's a production-house specialty, not ours.",
      },
    ],
  },
  {
    id: "ai-search",
    index: "004",
    title: "AEO & GEO",
    tagline: "Be the answer. Not just the link.",
    description:
      "Buyers don't only Google anymore — they ask ChatGPT, Perplexity, Claude, and Google's AI Overviews. We optimize for the engines that synthesize answers, so your brand gets cited inside the AI's reply — not buried beneath it.",
    capabilities: [
      "AEO — Answer Engine Optimization (Google AI Overviews, Bing Copilot, voice)",
      "GEO — Generative Engine Optimization (ChatGPT, Perplexity, Claude, Gemini)",
      "FAQ, HowTo, QAPage schema rollout",
      "llms.txt + structured data for AI crawlers",
      "Brand entity establishment (Wikidata, Knowledge Graph, Crunchbase)",
      "AI mention tracking (Profound, Otterly, AthenaHQ)",
    ],
    deliverables: [
      "AEO/GEO audit + 90-day plan",
      "Schema rollout across key pages",
      "Citable content cluster — claims, data, definitions",
      "Quarterly AI mention & citation reports",
    ],
    metric: { value: "30%+", label: "of B2B buyers now ask AI before Google" },
    faqs: [
      {
        q: "What's the difference between AEO and GEO?",
        a: "AEO (Answer Engine Optimization) gets you cited inside Google AI Overviews, Bing Copilot, and voice assistants. GEO (Generative Engine Optimization) gets you cited inside ChatGPT, Perplexity, Claude, and Gemini. Different surfaces, overlapping techniques (FAQ schema, llms.txt, citable claims).",
      },
      {
        q: "How long until I see AI engine citations?",
        a: "6–9 months for first signs on long-tail queries. 12–18 months for measurable branded search lift. 24 months for AI citations to be a meaningful share of pipeline. AEO/GEO compounds — early-mover advantage is significant.",
      },
      {
        q: "Should I do AEO/GEO instead of SEO?",
        a: "No — AEO and GEO build ON TOP of SEO foundations. Without indexable, well-structured pages, AI engines have nothing to cite. SEO stays as the base layer; AEO and GEO are layers on top.",
      },
      {
        q: "Can you guarantee citations in ChatGPT or Perplexity?",
        a: "No — anyone who promises guaranteed AI citations is lying. What we can guarantee: the technical foundation (schema, llms.txt, citable content structure) and the off-platform footprint (Reddit, Quora, Wikidata) that makes your brand a citation candidate. The engines decide what they cite. We make sure your brand is in the running.",
      },
    ],
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

// Direct clients — brokers / aggregators we run end-to-end work for.
export const clients = [
  "ThinkPropRealty",
  "Perfect Neighbourhood",
  "Exora Farms",
  "HomePlusRealty",
  "RealDoor",
];

// Builder projects we've actively run Meta + Google paid funnels on (real
// units moved, not just rankings). Mix of three brokers' books of work.
export const builderProjects = [
  "Lodha Sadahalli",
  "TVS Emerald Altura",
  "Puravankara Northern Lights",
  "Assetz Zen & Sato",
  "Assetz 22 & Crust",
  "The MidSummer Rain Villa",
  "Bhartiya City Nikoo 7",
];

// Headline count of independent channel partners (one-off small brokers / agents)
// we've activated paid campaigns for. Aggregate, not enumerated by name.
export const channelPartnersCount = 20;
