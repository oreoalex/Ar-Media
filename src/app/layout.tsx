import type { Metadata } from "next";
import { Manrope, Fraunces } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

// Register: geometrisch-ruhige Grotesk für Struktur, Navigation, Fakten
// (Creative Direction, Kapitel 3 "Typografie" — Register 1)
const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

// Statement: zurückhaltende Serif für die seltenen, emotional gewichteten
// Aussagen (Creative Direction, Kapitel 3 "Typografie" — Register 2)
const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} · ${siteConfig.claim}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Marketing Kiel",
    "Fotograf Kiel",
    "Social Media Agentur Kiel",
    "Branding Kiel",
    "Kitafotograf Kiel",
    "Portraitfotograf Kiel",
  ],
  authors: [{ name: siteConfig.founder.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} · ${siteConfig.claim}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} · ${siteConfig.claim}`,
    description: siteConfig.description,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    slogan: siteConfig.claim,
    description: siteConfig.description,
    foundingDate: siteConfig.founded,
    founder: {
      "@type": "Person",
      name: siteConfig.founder.name,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.location.street,
      postalCode: siteConfig.location.postalCode,
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.region,
      addressCountry: siteConfig.location.countryCode,
    },
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    areaServed: {
      "@type": "State",
      name: siteConfig.location.region,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating.value,
      reviewCount: siteConfig.rating.count,
    },
    sameAs: [siteConfig.social.instagram, siteConfig.social.linkedin],
  };

  return (
    <html
      lang="de"
      className={`${manrope.variable} ${fraunces.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-off-white text-charcoal">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-deep-forest focus:px-4 focus:py-2 focus:text-off-white"
        >
          Zum Inhalt springen
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
