/**
 * Content for the /company-profile page — a web version of the
 * "Company Profile & Portfolio · 2026" brochure. Every number here is quoted
 * from that document, so update this file (not the page) when the deck changes.
 */

export const heroStats = [
  { value: "₹2Cr+", label: "Ad spend managed" },
  { value: "100+", label: "Projects marketed" },
  { value: "50+", label: "Live campaigns" },
];

export const credentials = [
  { value: "₹30–50", label: "Best cost per filtered lead" },
  { value: "~17×", label: "Best blended ROAS" },
  { value: "120+", label: "Acres sold out in 5 months" },
  { value: "Google + Meta", label: "Platforms managed in-house" },
];

export const positioning: { h: string; b: string; feature?: boolean }[] = [
  {
    h: "One category, deep",
    b: "We know the difference between a plot buyer, an NRI investor and a first-home family — and we never run the same funnel for all three.",
  },
  {
    h: "Site visits, not clicks",
    b: "We report on qualified enquiries, connected calls and booked site visits — the metrics your sales team is actually judged on.",
  },
  {
    h: "One team, full funnel",
    b: "Ads, landing pages, creative production, SEO and CRM plumbing sit under one roof — no hand-offs, no finger-pointing.",
  },
  {
    h: "Receipts, not slides",
    b: "Every number on this page comes from a live Google Ads or Meta Ads account. The dashboards are further down.",
    feature: true,
  },
];

export const audiences = [
  {
    h: "Builders",
    b: "Launch and sustenance campaigns for towers, plots and villa inventory.",
  },
  {
    h: "Channel partners",
    b: "Multi-project lead engines with per-project cost control and clean attribution.",
  },
  {
    h: "Independent brokers",
    b: "Lean always-on funnels that keep a pipeline warm without a media team.",
  },
];

export const brochureServices = [
  {
    n: "01",
    title: "Paid Ads That Scale",
    body: "We start lean, find the winning audiences and creatives, then scale spend without blowing up your cost per lead. Meta and Google, run daily — not set-and-forget.",
    tags: ["Meta lead-gen", "Google Search & PMax", "Retargeting"],
  },
  {
    n: "02",
    title: "High-Converting Landing Pages",
    body: "Fast, mobile-first project pages with forms, video and trust signals — designed to convert paid traffic into real enquiries, wired straight into your CRM.",
    tags: ["Project pages", "Forms + CRM", "Mobile-first"],
  },
  {
    n: "03",
    title: "SEO & Organic Growth",
    body: "Rank for project, locality and service searches so leads keep coming long after the ad budget stops — plus content that answers what buyers actually type.",
    tags: ["Locality SEO", "Content engine", "Technical fixes"],
  },
  {
    n: "04",
    title: "Website Development",
    body: "From a quick WordPress site to a custom-coded Next.js property platform — built to load fast, convert paid traffic and rank.",
    tags: ["WordPress · ₹25,000", "Next.js custom · ₹59,000+", "Maintenance on scope"],
  },
];

export const alsoHandled = [
  "Creative production",
  "Reels & walkthroughs",
  "WhatsApp lead routing",
  "CRM & reporting setup",
];

export const differentiators = [
  {
    h: "Intent before volume",
    b: "We'd rather deliver 40 leads that visit than 400 that ghost. Forms are qualified, not stripped bare.",
  },
  {
    h: "Creative made in-house",
    b: "Hooks, edits and statics produced by us, tested weekly. Fresh creative is what keeps CPL from drifting up.",
  },
  {
    h: "Daily account hygiene",
    b: "Budgets, audiences and negatives reviewed every working day — not a monthly login before the review call.",
  },
  {
    h: "Transparent access",
    b: "The ad accounts stay yours. You see the same dashboards we do, whenever you want to look.",
  },
  {
    h: "Category-only benchmarks",
    b: "We know what a plot lead should cost in Devanahalli versus a 3BHK lead in Whitefield — so bad months get caught fast.",
  },
  {
    h: "Sales-team feedback loop",
    b: "Your callers tell us which leads were junk each week, and that verdict goes straight back into targeting.",
  },
];

export const engagementSteps = [
  { n: "01", h: "Project teardown", b: "Pricing, USP and competitor ads studied before a rupee is spent." },
  { n: "02", h: "Funnel build", b: "Landing page, creatives and CRM routing live in 7–10 days." },
  { n: "03", h: "Lean test", b: "Small budgets across angles until CPL and lead quality hold." },
  { n: "04", h: "Scale & report", b: "Spend scaled on winners, with weekly numbers you can forward." },
];

export type BrochureCase = {
  slug: string;
  eyebrow: string;
  client: string;
  headline: string;
  summary: string;
  image: string;
  accent: string;
  metrics: { value: string; label: string }[];
  columns: { h: string; b: string }[];
  tags: string[];
};

export const brochureCases: BrochureCase[] = [
  {
    slug: "exora-farms",
    eyebrow: "Case study 01 · Platform · Performance · Content · CRM",
    client: "Exora Farms",
    headline: "₹3L in. 120+ acres sold out.",
    summary:
      "We built the Exora Farms platform, ran the paid funnel and engineered the content engine that sold out 120+ acres of premium managed farmland in five months — a category where buyers need education before they need a site visit.",
    image: "/work/exora-farms-1.png",
    accent: "#22C55E",
    metrics: [
      { value: "120+", label: "Acres sold out in 5 months" },
      { value: "3K+", label: "Leads on ₹3L spend" },
      { value: "50+", label: "Leads from one reel" },
    ],
    columns: [
      {
        h: "What we built",
        b: "A full booking platform with plot inventory, revenue-share calculators and enquiry routing.",
      },
      {
        h: "What we ran",
        b: "Meta lead-gen against investor and NRI audiences, retargeted with yield-led proof creatives.",
      },
      {
        h: "Why it worked",
        b: "Education-first content: buyers understood the yield model before a sales call ever happened.",
      },
    ],
    tags: ["Web & product", "Performance ads", "Content & brand"],
  },
  {
    slug: "perfect-neighbourhood",
    eyebrow: "Case study 02 · Platform · Search surround · Performance ads",
    client: "Perfect Neighbourhood",
    headline: "50+ EOIs from one Meta campaign.",
    summary:
      "We rebuilt a real-estate platform from WordPress to a full-stack Next.js product, wrapped it in a search-surround strategy, and ran the performance layer that turned browsing traffic into signed expressions of interest.",
    image: "/work/perfect-neighbourhood-1.png",
    accent: "#FF6B1A",
    metrics: [
      { value: "50+", label: "EOIs via Meta ads · 1 project" },
      { value: "24+", label: "Bookings closed" },
      { value: "~17×", label: "Blended ROAS" },
    ],
    columns: [
      {
        h: "What we built",
        b: "A Next.js property platform with search, NRI desk and referral rewards replacing a slow WordPress site.",
      },
      {
        h: "What we ran",
        b: "Meta EOI campaigns surrounded by branded and category search, feeding one qualified pipeline.",
      },
      {
        h: "Why it worked",
        b: "Speed and trust signals on the platform meant paid traffic converted instead of bouncing.",
      },
    ],
    tags: ["Web & product", "Performance ads", "Content & brand"],
  },
];

/**
 * Ad-creative walkthroughs from the portfolio spread. `url` points at the
 * YouTube video when we have it — cards without a URL render as plain tiles,
 * so paste the links in as they're confirmed.
 */
export const adCreatives: { kind: string; title: string; body: string; url?: string }[] = [
  {
    kind: "Google Ads",
    title: "Nikoo 7 — Bhartiya City",
    body: "Performance video creative for project launch.",
  },
  {
    kind: "Meta + Google",
    title: "Puravankara Northern Lights",
    body: "Lead-gen campaign creative.",
  },
  {
    kind: "Performance video",
    title: "Godrej MSR City",
    body: "Project awareness & site-visit drive.",
  },
  {
    kind: "Ad creative",
    title: "Google Ads strategy",
    body: "Search creative for a Bengaluru launch.",
  },
  {
    kind: "Ad creative",
    title: "Leads vs real buyers",
    body: "Lead-quality breakdown for partners.",
  },
  {
    kind: "Ad creative",
    title: "Godrej Doddaballapur",
    body: "Meta Ads performance walkthrough.",
  },
];

export const creativeFormats = [
  {
    h: "Video",
    b: "Founder-led explainers, walkthrough edits and 15-second hook reels cut for Meta placements.",
  },
  {
    h: "Static & carousel",
    b: "Price-led, location-led and offer-led sets, refreshed before fatigue pushes CPL up.",
  },
  {
    h: "Search & YouTube",
    b: "Intent copy for Search and skippable in-stream cuts for project awareness.",
  },
];

/** Projects currently live in our Google / Meta ad accounts. */
export const liveInAccounts = [
  "Godrej Tiara",
  "Yaduraj Scholaria",
  "Brigade Insignia",
  "Ivy Garden",
  "Sowparnika Euphoria",
  "TVS Emerald",
  "Sobha Magnum",
  "Sobha One World",
  "Godrej Soukya Road",
  "Godrej Regent Park",
  "Puravankara Northern Lights",
  "Nikoo Homes 9",
  "Assetz Codename Paradise",
  "Tata Varnam",
  "Arvind Sylva",
  "Brigade Grenada",
];

export const performanceStats = [
  { value: "₹30–50", label: "Best cost / filtered lead" },
  { value: "244", label: "Leads · single campaign" },
  { value: "9.29K", label: "Clicks · top Google account" },
  { value: "₹2Cr+", label: "Ad spend managed" },
];

export type Tier = {
  n: string;
  name: string;
  price: string;
  per?: string;
  blurb: string;
  includes: string[];
  bestFor: string;
  featured?: boolean;
};

export const tiers: Tier[] = [
  {
    n: "Tier 01",
    name: "Launch Pad",
    price: "₹35,000",
    per: "/mo",
    blurb: "For one project, one platform.",
    includes: [
      "1 project · Meta lead-gen",
      "1 landing page",
      "4 creatives / month",
      "WhatsApp lead routing",
      "Weekly report",
      "Audience & keyword research",
      "Monthly strategy call",
    ],
    bestFor: "Best for a partner testing one inventory.",
  },
  {
    n: "Tier 02",
    name: "Growth Engine",
    price: "₹65,000",
    per: "/mo",
    blurb: "For active sales teams running multiple projects.",
    includes: [
      "Up to 3 projects · Meta + Google",
      "Landing pages + CRM wiring",
      "10 creatives / month",
      "Weekly optimisation calls",
      "Lead-quality feedback loop",
      "Landing page A/B testing",
      "Shared live dashboard",
    ],
    bestFor: "Best for teams selling several projects at once.",
    featured: true,
  },
  {
    n: "Tier 03",
    name: "Sold Out",
    price: "₹1,20,000",
    per: "+",
    blurb: "Full-funnel ownership until inventory clears.",
    includes: [
      "Unlimited projects in portfolio",
      "Meta + Google + SEO",
      "Creative studio on call",
      "Dedicated strategist",
      "Dashboard + monthly review",
      "SEO & content calendar",
      "Quarterly market teardown",
    ],
    bestFor: "Best for builders clearing full inventory.",
  },
];

export const buildPricing = [
  { h: "WordPress website", price: "₹25,000", b: "Fast to launch, easy for your team to edit." },
  { h: "Custom Next.js build", price: "₹59,000+", b: "Starting price; varies with pages and features." },
  { h: "SEO retainer", price: "₹15,000/mo", b: "Locality & project rankings, content included." },
  { h: "Maintenance", price: "On scope", b: "Hosting, updates and edits, quoted per site." },
];

export const testimonials: {
  quote: string;
  name: string;
  role: string;
  tag?: string;
  featured?: boolean;
}[] = [
  {
    quote:
      "The leads we get now actually pick up the phone and show up for site visits. Quality changed completely.",
    name: "Rohan Mehta",
    role: "Channel Partner, Bengaluru",
  },
  {
    quote:
      "From strategy to execution, handled end to end. Our cost per lead dropped while bookings went up.",
    name: "Sneha Reddy",
    role: "Sales Head, Developer",
  },
  {
    quote:
      "Finally an agency that understands real estate and not just generic marketing. Reliable and responsive.",
    name: "Arjun Nair",
    role: "Broker, Whitefield",
  },
  {
    quote:
      "They migrated us from WordPress to a custom-coded Next.js site. We started ranking in the top 3 and recently closed a ₹15 Cr client off organic search. Organic SEO is the key.",
    name: "Perfect Neighbourhood",
    role: "Channel Partner, Bengaluru",
    tag: "Website + SEO",
    featured: true,
  },
];
