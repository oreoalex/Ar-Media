import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { BrandMarkA } from "@/components/shared/brand-mark-a";

/**
 * Unsere Haltung — identisches Kompositionsprinzip wie auf der Startseite
 * (Kicker + dünne Linie + Bild/Text-Grid), damit sich die Seite wie
 * dieselbe Handschrift anfühlt statt wie eine neue Vorlage. Die "A"-
 * Silhouette (echte Logogeometrie, siehe Startseite) läuft groß und leise
 * im Hintergrund — dasselbe Systemelement, nicht ein neues.
 */
export function HaltungSection() {
  return (
    <section aria-label="Unsere Haltung" className="relative overflow-hidden bg-off-white px-6 py-24 lg:py-32">
      <BrandMarkA className="pointer-events-none absolute top-1/2 -left-[10vw] h-[80%] w-auto -translate-y-1/2 text-deep-forest opacity-[0.035] sm:-left-[7vw]" />

      <div className="relative mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[1fr_minmax(0,320px)] lg:gap-20">
        <Reveal delay={0.1} className="lg:order-1">
          <h2 className="text-[11px] font-medium tracking-[0.14em] text-charcoal/45 uppercase">
            Unsere Haltung
          </h2>
          <span aria-hidden className="mt-4 block h-px w-8 bg-charcoal/20" />
          <p className="mt-6 max-w-xl text-[20px] leading-relaxed text-charcoal/80 lg:text-[22px] lg:leading-[1.55]">
            Unsere Arbeit beginnt nie mit Gestaltung. Sie beginnt mit
            Beobachtung. Bevor wir eine Marke, ein Bild oder eine Kampagne
            entwickeln, verstehen wir, was dein Unternehmen bereits ausmacht:
            Charakter, Potenzial, das Warum dahinter. Erst danach entsteht
            Gestaltung. Nicht: „Wir machen dein Unternehmen schöner.“ Sondern:
            „Wir zeigen, was es bereits ausmacht.“
          </p>
        </Reveal>
        <Reveal className="lg:order-2">
          <div className="relative aspect-3/4 w-full overflow-hidden">
            <Image
              src="/images/home/philosophie-detail.jpg"
              alt="Geprägtes Markendetail eines AR Media Branding-Projekts"
              fill
              sizes="(min-width: 1024px) 320px, 60vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
