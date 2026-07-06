import type { Metadata } from "next";
import { AgencyLanding, type AgencyLandingConfig } from "@/components/landing/agency-landing";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bricknclick.ai";
const PATH = "/real-estate-marketing-agency";

export const metadata: Metadata = {
  title: "Real Estate Marketing Agency in India",
  description:
    "Bricknclick is a real estate marketing agency in India for builders and brokers — performance ads, project websites, and SEO content that move units, not just clicks.",
  alternates: { canonical: PATH },
  openGraph: {
    type: "website",
    title: "Real Estate Marketing Agency in India · Bricknclick",
    description:
      "A full-stack real estate marketing agency for Indian builders — Meta & Google ads, project microsites, SEO, and AEO. 50+ EOIs from one campaign, ~17× ROAS.",
    url: `${SITE}${PATH}`,
  },
};

const config: AgencyLandingConfig = {
  place: "India",
  path: PATH,
  eyebrow: "[ Real estate marketing agency · India ]",
  h1: "The real estate marketing agency builders trust to sell out projects.",
  intro:
    "Bricknclick is a real estate marketing agency in India that runs the whole funnel — performance ads, high-converting project websites, and content that ranks. We don't sell impressions; we move units. 50+ EOIs from one Meta campaign, 3,000+ leads on ₹3L ad spend, 80 acres sold out.",
  faqs: [
    {
      q: "What does a real estate marketing agency do?",
      a: "A real estate marketing agency runs the demand engine for builders and brokers — paid ads (Meta, Google, Click-to-WhatsApp), project websites and microsites, SEO and content, and CRM. Bricknclick does all four under one roof so leads don't leak between the ad and the sales call.",
    },
    {
      q: "How do you generate real estate leads in India?",
      a: "High-intent Google Search and Meta campaigns pointed at conversion-optimized project microsites, backed by Click-to-WhatsApp for instant follow-up and SEO content that compounds organic leads. On Perfect Neighbourhood, ₹4L of blended spend produced 50+ EOIs and 15–18 bookings.",
    },
    {
      q: "Which is the best real estate marketing agency for builders in India?",
      a: "The right agency is the one that shows you units moved, not impressions. Bricknclick works with builders, brokers, and channel partners across Grade A projects (Lodha, TVS Emerald, Puravankara, Assetz, Bhartiya City) and reports on EOIs, bookings, and cost per qualified lead — the numbers that actually pay for the campaign.",
    },
    {
      q: "How much does real estate marketing cost in India?",
      a: "It depends on project ticket size and how many units you need to move, but the model matters more than the number: we've generated 3,000+ leads on ₹3L of ad spend (~₹100 per lead) and ~17× blended ROAS. We start with an audit and a 90-day plan sized to your inventory.",
    },
    {
      q: "Do you work with builders, brokers, or channel partners?",
      a: "All three. We run end-to-end platforms and funnels for brokers and aggregators, active paid campaigns for builder projects, and one-off campaigns for independent channel partners — over 20 activated to date.",
    },
  ],
};

const proServiceLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE}${PATH}#service`,
  name: "Bricknclick — Real Estate Marketing Agency",
  url: `${SITE}${PATH}`,
  image: `${SITE}/logo.png`,
  description:
    "A full-stack real estate marketing agency in India for builders and brokers — performance ads, project websites, SEO content, and AEO/GEO.",
  areaServed: { "@type": "Country", name: "India" },
  serviceType: [
    "Real estate marketing",
    "Real estate lead generation",
    "Real estate PPC advertising",
    "Real estate SEO",
    "Real estate website development",
  ],
  knowsAbout: [
    "Real estate marketing",
    "Meta ads for real estate",
    "Google ads for real estate",
    "Real estate lead generation",
    "Real estate SEO",
  ],
  telephone: "+91-90195-08519",
  email: "info@bricknclick.com",
  priceRange: "₹₹",
  sameAs: [
    "https://www.linkedin.com/company/bricknclick/",
    "https://www.instagram.com/bricknclick.ai/",
    "https://x.com/bricknclick_ai",
  ],
  parentOrganization: { "@type": "Organization", name: "Bricknclick", url: SITE },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: config.faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE },
    { "@type": "ListItem", position: 2, name: "Real Estate Marketing Agency", item: `${SITE}${PATH}` },
  ],
};

export default function Page() {
  return (
    <>
      <AgencyLanding config={config} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(proServiceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    </>
  );
}
