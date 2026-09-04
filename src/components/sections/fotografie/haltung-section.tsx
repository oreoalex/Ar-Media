import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { BrandMarkA } from "@/components/shared/brand-mark-a";
import { BrandTick } from "@/components/shared/brand-tick";

/**
 * Unsere Haltung. Identisches Kompositionsprinzip wie bei Unternehmen
 * (Kicker + Linie + Bild/Text-Grid, "A"-Silhouette leise im Hintergrund) —
 * volle Systemkontinuität zwischen den beiden Landingpages.
 */
export function HaltungSection() {
  return (
    <section aria-label="Wir sagen nie Lächeln" className="relative overflow-hidden bg-off-white px-6 py-24 lg:py-32">
      <BrandMarkA className="pointer-events-none absolute top-1/2 -left-[10vw] h-[80%] w-auto -translate-y-1/2 text-deep-forest opacity-[0.035] sm:-left-[7vw]" />

      <div className="relative mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[1fr_minmax(0,320px)] lg:gap-20">
        <Reveal delay={0.1} className="lg:order-1">
          <h2 className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
            Unsere Haltung
          </h2>
          <BrandTick className="mt-4 h-4 w-2.5 text-charcoal/20" />
          <p className="mt-6 max-w-xl text-[20px] leading-relaxed text-charcoal/80 lg:text-[22px] lg:leading-[1.55]">
            Deshalb fragen wir nie nach einem Lächeln. Wir schaffen die
            Bedingungen, unter denen es von selbst entsteht: genug Zeit,
            keine Anweisungen, ein Ort, an dem sich niemand beobachtet fühlt.
            Das dauert manchmal einen Moment länger als ein klassisches
            Shooting. Der Unterschied zeigt sich später, im Bild. Wir
            inszenieren nicht, wir warten, und drücken genau dann ab.
          </p>
        </Reveal>
        <Reveal className="lg:order-2">
          <div className="relative aspect-3/4 w-full overflow-hidden">
            <Image
              src="/images/fotografie/haltung-portrait.jpg"
              alt="Natürliches Portrait, entstanden ohne Anweisungen oder Posen"
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
