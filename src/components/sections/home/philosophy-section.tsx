import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { BrandMarkA } from "@/components/shared/brand-mark-a";

/**
 * S03 · Haltung — Wireframe-Blueprint Kapitel 5, veredelt (Final Creative
 * Direction). Begründet den Claim, bevor er als Floskel gelesen werden kann.
 * Folgt jetzt direkt auf den Hero — großzügigerer Weißraum gibt dem Übergang
 * vom Bild-Hero zum ersten Text-Moment mehr Luft. "Weniger Interface, mehr
 * Magazin."
 *
 * Markensystem: die echte "A"-Silhouette aus der Wortmarke (siehe
 * brand-mark-a.tsx, exakte Ankerpunkte aus der Originaldatei) läuft groß und
 * sehr leise rechts aus der Fläche heraus — kein Icon, keine Ecke, sondern
 * eine ruhige Form, die die Sektion trägt. Das zusätzliche Hintergrundlinien-
 * Muster (Flow-Lines) wurde wieder entfernt — war zu viel neben der Silhouette.
 *
 * Das Bild löst sich rechts weich auf (mask-image) statt hart abzuschneiden
 * — löst "Bilder dürfen sanft in Hintergründe auslaufen" für einen ersten,
 * bewusst gewählten Fall ein, statt es überall gleich einzusetzen.
 */
export function PhilosophySection() {
  return (
    <section
      aria-label="Unsere Haltung"
      className="relative overflow-hidden bg-off-white px-6 py-28 lg:py-40"
    >
      <BrandMarkA
        className="pointer-events-none absolute top-1/2 -right-[8vw] h-[85%] w-auto -translate-y-1/2 text-deep-forest opacity-[0.04] sm:-right-[6vw]"
      />

      <div className="relative mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-20">
        <Reveal>
          <div
            className="relative aspect-3/4 w-full overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, black 78%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, black 78%, transparent 100%)",
            }}
          >
            <Image
              src="/images/home/philosophie-detail.jpg"
              alt="Geprägtes Markendetail eines AR Media Branding-Projekts"
              fill
              sizes="(min-width: 1024px) 280px, 60vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
            Unsere Haltung
          </h2>
          <span aria-hidden className="mt-4 block h-px w-8 bg-charcoal/20" />
          <p className="mt-6 max-w-xl text-[21px] leading-relaxed text-charcoal/80 lg:text-[24px] lg:leading-[1.5]">
            Wir erschaffen keine künstlichen Bilder oder Markenwelten. Wir suchen, was
            bereits vorhanden ist: Charakter, Potenzial, ein echter Moment. Und machen
            es sichtbar. Für ein Unternehmen bedeutet das Konsistenz. Für einen Menschen
            ein ehrliches Bild. Für ein Kind einen unverstellten Moment.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
