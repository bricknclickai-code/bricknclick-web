import type { Metadata } from "next";
import { AgencyLanding, type AgencyLandingConfig } from "@/components/landing/agency-landing";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bricknclick.ai";
const PATH = "/real-estate-marketing-agency-bangalore";

export const metadata: Metadata = {
  title: "Real Estate Marketing Agency in Bangalore",
  description:
    "Bricknclick is a real estate marketing agency in Bangalore for builders and developers — Meta & Google ads, project microsites, and SEO that book site visits and EOIs.",
  alternates: { canonical: PATH },
  openGraph: {
    type: "website",
    title: "Real Estate Marketing Agency in Bangalore · Bricknclick",
    description:
      "Bangalore's full-stack real estate marketing agency for Grade A builder projects — Lodha, TVS Emerald, Puravankara, Assetz, Bhartiya City. Ads, web, and SEO under one roof.",
    url: `${SITE}${PATH}`,
  },
};

const config: AgencyLandingConfig = {
  place: "Bangalore",
  path: PATH,
  eyebrow: "[ Real estate marketing agency · Bangalore ]",
  h1: "Bangalore's real estate marketing agency for builders and developers.",
  intro:
    "Bricknclick is a real estate marketing agency in Bangalore that turns ad spend into site visits, EOIs, and bookings for Grade A builder projects — Lodha, TVS Emerald, Puravankara, Assetz, Bhartiya City Nikoo 7. Performance ads, project microsites, and SEO under one accountable roof.",
  primaryLink: {
    href: "/real-estate-marketing-agency",
    label: "See our India-wide real estate marketing →",
  },
  faqs: [
    {
      q: "Who is the best real estate marketing agency in Bangalore?",
      a: "The agency worth hiring is the one that shows units moved. Bricknclick is a Bangalore-based real estate marketing agency that has run paid funnels for Grade A projects like Bhartiya City Nikoo 7, Puravankara Northern Lights, Lodha, TVS Emerald, and Assetz — reporting on EOIs, bookings, and cost per qualified lead rather than impressions.",
    },
    {
      q: "How do you generate real estate leads in Bangalore?",
      a: "High-intent Google Search and Meta campaigns pointed at fast, conversion-optimized project microsites, with Click-to-WhatsApp for instant follow-up. On Bhartiya City Nikoo 7, ₹4L of blended spend produced 50+ EOIs and 15–18 bookings (~17× blended ROAS).",
    },
    {
      q: "Do you work with Bangalore builders and Grade A projects?",
      a: "Yes — Grade A builder projects are our core. We've actively run Meta and Google funnels for Lodha Sadahalli, TVS Emerald Altura, Puravankara Northern Lights, Assetz Zen & Sato, and Bhartiya City Nikoo 7, for both builders and their broker channel partners.",
    },
    {
      q: "How much does real estate digital marketing cost in Bangalore?",
      a: "It scales with project ticket size and unit velocity, but the efficiency is what matters: we've delivered ~₹100 per qualified lead and ~17× blended ROAS on Bangalore projects. We start with an audit and a 90-day plan sized to your inventory.",
    },
  ],
};

const proServiceLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE}${PATH}#service`,
  name: "Bricknclick — Real Estate Marketing Agency in Bangalore",
  url: `${SITE}${PATH}`,
  image: `${SITE}/logo.png`,
  description:
    "A real estate marketing agency in Bangalore for builders and developers — performance ads, project microsites, SEO, and AEO/GEO.",
  areaServed: { "@type": "City", name: "Bengaluru" },
  serviceType: [
    "Real estate marketing",
    "Real estate lead generation",
    "Real estate PPC advertising",
    "Real estate SEO",
    "Real estate website development",
  ],
  knowsAbout: [
    "Real estate marketing Bangalore",
    "Meta ads for real estate",
    "Google ads for real estate",
    "Real estate lead generation Bangalore",
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
    { "@type": "ListItem", position: 2, name: "Real Estate Marketing Agency in Bangalore", item: `${SITE}${PATH}` },
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
