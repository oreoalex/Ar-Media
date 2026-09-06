import { siteConfig } from "@/lib/site-config";

/**
 * Gemeinsame JSON-LD-Bausteine für Breadcrumb- und Service-Markup auf den
 * Leistungsseiten (Schema-Audit: BreadcrumbList fehlte site-weit,
 * Service-Schema fehlte auf allen Leistungsseiten). `provider` wird
 * bewusst als vollständiges Inline-Objekt statt als `@id`-Referenz auf den
 * Organization-Block in layout.tsx gebaut: mehrere separate
 * `<script type="application/ld+json">`-Blöcke auf einer Seite werden
 * nicht von allen Parsern zuverlässig als ein gemeinsamer Graph behandelt,
 * ein Inline-Objekt ist eindeutig und unabhängig auswertbar.
 */

const organizationRef = {
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  // Schema-Audit (2026-09-06): Google empfiehlt publisher.logo für
  // Article-Rich-Results — echtes, bereits in layout.tsx für dieselbe
  // Organization genutztes Logo-Asset, keine neue Datei.
  logo: { "@type": "ImageObject", url: `${siteConfig.url}/logo-full.png` },
};

export function buildBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export function buildArticleJsonLd({
  title,
  description,
  path,
  publishedAt,
  updatedAt,
  image,
}: {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  updatedAt: string;
  /** Absoluter oder site-relativer Pfad. Fällt beim Aufrufer auf ein echtes, bestehendes Asset zurück (z. B. /opengraph-image.jpg), nie erfunden. */
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${siteConfig.url}${path}`,
    datePublished: publishedAt,
    dateModified: updatedAt,
    author: organizationRef,
    publisher: organizationRef,
    inLanguage: "de-DE",
    ...(image ? { image: image.startsWith("http") ? image : `${siteConfig.url}${image}` } : {}),
  };
}

export function buildServiceJsonLd({
  name,
  description,
  path,
  priceFrom,
}: {
  name: string;
  description: string;
  path: string;
  /** Nur setzen, wenn ein echter, auf der Seite sichtbarer Einstiegspreis existiert. */
  priceFrom?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: organizationRef,
    areaServed: { "@type": "State", name: siteConfig.location.region },
    url: `${siteConfig.url}${path}`,
    ...(priceFrom !== undefined
      ? {
          offers: {
            "@type": "Offer",
            price: priceFrom,
            priceCurrency: "EUR",
            url: `${siteConfig.url}${path}`,
          },
        }
      : {}),
  };
}
