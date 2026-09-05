import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { GoogleAnalytics } from "@/components/shared/google-analytics";
import { ConsentBanner } from "@/components/shared/consent-banner";
import { ContactTracking } from "@/components/shared/contact-tracking";
import { SmoothScroll } from "@/components/shared/smooth-scroll";
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
// Aussagen (Creative Direction, Kapitel 3 "Typografie" — Register 2).
// Fraunces → Newsreader (sitewide, 2026-09-05 Design-Review): Fraunces gilt
// als eines der meistverwendeten "AI-generated design"-Signale bei
// Editorial-Serifen. Newsreader bleibt im selben Register (variabler
// Schriftschnitt, echtes Kursiv, literarischer statt technischer
// Charakter) und passt zur Markenstimme ("schreibt lange, literarische
// Sätze"), ohne dieses Muster zu treffen. Nur das Statement-Register
// (Register 2) ändert sich — Manrope/Register 1 (Fließtext, Struktur,
// Navigation) bleibt unverändert.
const newsreader = Newsreader({
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
    // ProfessionalService (LocalBusiness-Subtyp) zusätzlich zu Organization:
    // nur mit einem LocalBusiness-Subtyp zählt aggregateRating für
    // Google-Sterne-Snippets, auf reinem Organization nicht (Schema-Audit).
    // AR Media hat eine reale Geschäftsadresse und bedient primär die
    // Region Kiel/Schleswig-Holstein, ProfessionalService passt fachlich
    // (Kreativ-/Beratungsdienstleistung, kein Einzelhandel/Ladengeschäft).
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    slogan: siteConfig.claim,
    description: siteConfig.description,
    foundingDate: siteConfig.founded,
    logo: `${siteConfig.url}/logo-full.png`,
    image: `${siteConfig.url}/logo-full.png`,
    founder: {
      "@type": "Person",
      name: siteConfig.founder.name,
      sameAs: [siteConfig.social.linkedin],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.location.street,
      postalCode: siteConfig.location.postalCode,
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.region,
      addressCountry: siteConfig.location.countryCode,
    },
    // Reale Koordinaten, per OpenStreetMap-Nominatim für die tatsächliche
    // Adresse geokodiert (keyless, kein erfundener Wert), Local-SEO-Audit
    // bemängelte fehlende geo-Angabe auf dem LocalBusiness-Typ.
    geo: {
      "@type": "GeoCoordinates",
      latitude: 54.3567900,
      longitude: 10.0800947,
    },
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    areaServed: [
      {
        "@type": "City",
        name: siteConfig.location.city,
      },
      {
        "@type": "State",
        name: siteConfig.location.region,
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating.value,
      reviewCount: siteConfig.rating.count,
    },
    sameAs: [siteConfig.social.instagram, siteConfig.social.linkedin, siteConfig.social.googleBusiness],
  };

  return (
    <html
      lang="de"
      className={`${manrope.variable} ${newsreader.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-off-white text-charcoal">
        <SmoothScroll />
        <GoogleAnalytics />
        <ContactTracking />
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
        <ConsentBanner />
      </body>
    </html>
  );
}
