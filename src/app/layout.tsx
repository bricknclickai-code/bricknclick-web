import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LenisProvider } from "@/components/lenis-provider";
import { Cursor } from "@/components/cursor";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bricknclick.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bricknclick — A digital agency that ships",
    template: "%s · Bricknclick",
  },
  description:
    "Bricknclick is a digital agency building performance ads, modern websites, and content that ranks. We own it — from strategy to ship.",
  keywords: [
    "digital agency",
    "performance marketing agency",
    "web development agency",
    "content marketing",
    "Next.js agency",
    "SEO agency",
    "Meta ads agency",
    "Google ads agency",
    "brand content studio",
    "bricknclick",
  ],
  authors: [{ name: "Bricknclick" }],
  creator: "Bricknclick",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Bricknclick — A digital agency that ships",
    description:
      "Performance ads · Web & product · Content & brand. One accountable team. We own it.",
    siteName: "Bricknclick",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bricknclick — A digital agency that ships",
    description:
      "Performance ads · Web & product · Content & brand. One accountable team.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: siteUrl },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf7" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bricknclick",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  slogan: "We Own It",
  description:
    "A digital agency founded and led by IIM alumni — performance ads, websites engineered for SEO, and content systems that compound.",
  foundingDate: "2024",
  founder: [
    {
      "@type": "Person",
      description:
        "IIM alumnus · Bricknclick founder, leading strategy across ads, web, and content.",
    },
  ],
  knowsAbout: [
    "Performance marketing",
    "Meta ads",
    "Google ads",
    "Next.js development",
    "SEO",
    "Content strategy",
    "Real estate marketing",
  ],
  sameAs: [
    "https://www.linkedin.com/company/bricknclick/",
    "https://www.instagram.com/bricknclick.ai/",
    "https://x.com/bricknclick_ai",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: "+91-90195-08519",
      email: "info@bricknclick.com",
      contactOption: "TollFree",
      areaServed: ["IN", "Worldwide"],
      availableLanguage: ["English", "Hindi"],
    },
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "info@bricknclick.com",
      areaServed: "Worldwide",
      availableLanguage: ["English", "Hindi"],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <LenisProvider />
          <Cursor />
          <Nav />
          <main id="content">{children}</main>
          <Footer />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
