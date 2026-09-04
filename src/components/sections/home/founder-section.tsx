import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/lib/site-config";
import { BrandArrow } from "@/components/shared/brand-arrow";
import { BrandTick } from "@/components/shared/brand-tick";

/**
 * S06 · Der Mensch — Wireframe-Blueprint Kapitel 5, veredelt (Final Creative
 * Direction). Wechsel von "hier ist der Gründer" zu "warum gibt es AR Media"
 * — die Persönlichkeit von Alexander wird über die Motivation hinter der
 * Marke spürbar, nicht über einen Steckbrief. Das Foto ist bewusst
 * dokumentarisch (Alexander mit Kamera, mitten in der Arbeit, nicht
 * posierend) statt ein klassisches Bewerbungsfoto.
 *
 * Trägt am Ende zwei leise Elemente, die hier und nirgendwo sonst auf der
 * Startseite zusätzlich vorkommen: den Fotografie-Claim (gehört laut
 * Markendramaturgie zu diesem Gewerk — der Mensch hinter der Kamera) und
 * das Google-Bewertungssignal. Der zweite, abschließende Claim
 * ("what's already there") erscheint bewusst NICHT hier — er ist die
 * alleinige Signatur der Invitation-Section am Ende der Seite.
 */
export function FounderSection() {
  return (
    <section aria-label="Warum es AR Media gibt" className="bg-off-white px-6 py-24 lg:py-32">
      <div className="mx-auto grid max-w-4xl items-center gap-10 lg:grid-cols-[240px_1fr] lg:gap-16">
        <Reveal>
          <div className="relative aspect-3/4 w-full overflow-hidden bg-deep-forest">
            <Image
              src="/images/home/founder-alexander.jpg"
              alt={siteConfig.founder.name}
              fill
              sizes="(min-width: 1024px) 240px, 60vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
            Warum es AR Media gibt
          </h2>
          <BrandTick className="mt-3 h-4 w-2.5 text-charcoal/20" />
          <p className="mt-5 max-w-md text-[19px] leading-relaxed text-charcoal/80">
            AR Media ist nicht aus einem Businessplan entstanden, sondern aus einer
            Beobachtung: Die meisten Menschen und Marken wirken schwächer, als sie
            eigentlich sind, nicht weil ihnen etwas fehlt, sondern weil es nie sichtbar
            gemacht wurde. {siteConfig.founder.name} macht genau das zu seiner Arbeit, mit
            Kamera, strategischem Blick und der Überzeugung, dass Nähe bessere Ergebnisse
            liefert als Distanz.
          </p>
          <Link
            href="/ueber-ar-media"
            className="group mt-6 inline-flex items-center gap-2 text-[14px] font-medium tracking-wide text-charcoal/70 transition-colors hover:text-deep-forest"
          >
            Über AR Media
            <BrandArrow aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-charcoal/10 pt-6">
            <p className="font-serif text-[15px] font-bold tracking-tight text-charcoal/70">
              „Let me show you how good you look.“
            </p>
            <span className="flex items-center gap-2 text-charcoal/70">
              <span className="text-[12px] font-medium tracking-wide">
                {siteConfig.rating.value.toFixed(1).replace(".", ",")} · {siteConfig.rating.count}{" "}
                Google-Bewertungen
              </span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
