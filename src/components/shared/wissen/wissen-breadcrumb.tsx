import Link from "next/link";
import { buildBreadcrumbJsonLd } from "@/lib/schema";

type BreadcrumbItem = { name: string; path: string };

type WissenBreadcrumbProps = {
  items: BreadcrumbItem[];
};

/**
 * Erste sichtbare Breadcrumb-Komponente der Codebase (bisher gab es nur
 * JSON-LD ohne UI, siehe schema.ts). Für den Wissensbereich sinnvoll, weil
 * die Struktur hier — anders als die bisher flachen Leistungsseiten —
 * tatsächlich drei Ebenen tief ist (Wissen → Kategorie → Artikel). UI und
 * JSON-LD werden aus denselben `items` gebaut, damit beides nie
 * auseinanderläuft.
 */
export function WissenBreadcrumb({ items }: WissenBreadcrumbProps) {
  const jsonLd = buildBreadcrumbJsonLd(items);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <span key={item.path} className="flex items-center gap-x-2">
              {i > 0 && (
                <span aria-hidden className="text-[11px] text-charcoal/40">
                  /
                </span>
              )}
              {isLast ? (
                <span className="text-[11px] font-medium tracking-[0.1em] text-charcoal/75 uppercase" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="text-[11px] font-medium tracking-[0.1em] text-charcoal/50 uppercase transition-colors hover:text-deep-forest"
                >
                  {item.name}
                </Link>
              )}
            </span>
          );
        })}
      </nav>
    </>
  );
}
