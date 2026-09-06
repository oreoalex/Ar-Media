import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { BrandMarkA } from "@/components/shared/brand-mark-a";
import { BrandTick } from "@/components/shared/brand-tick";

/**
 * Design-Review 2026-09-06: der frühere "Kippmoment" (ein generischer
 * Decoy-Text, der per gsap ScrollTrigger-Pin entlang eines Risses aufreißt
 * und die echte Markenhaltung freilegt) ist auf Nutzerwunsch entfernt.
 * Die echte Haltung steht jetzt direkt da, mit einem einfachen Reveal beim
 * Eintritt in den Viewport — kein Pin, kein Riss, kein Decoy-Text.
 */
export function PhilosophySection() {
  return (
    <section aria-label="Unsere Haltung" className="relative overflow-hidden bg-off-white px-6 py-28 lg:py-40">
      <BrandMarkA className="pointer-events-none absolute top-1/2 -right-[8vw] h-[85%] w-auto -translate-y-1/2 text-deep-forest opacity-[0.04] sm:-right-[6vw]" />

      <Reveal className="relative mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-20">
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
        <div>
          <h2 className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">Unsere Haltung</h2>
          <BrandTick className="mt-4 h-4 w-2.5 text-charcoal/20" />
          {/* "Laut & Mutig"-Typografie (Runde-3-Exploration): Text als
              dominante grafische Masse statt höflicher Fließtext-Zeile —
              fett statt kursiv, deutlich größer, enge Laufweite. Bewusst
              NICHT in Versalien: die echte Marken-Stimme schreibt lange,
              literarische Sätze (siehe brand voice), Versalien funktionieren
              im Referenz-PDF nur für kurze 2-3-Wort-Phrasen und würden einen
              ganzen Satz weniger lesbar machen, nicht lauter wirken lassen. */}
          {/* text-balance statt der globalen p-Voreinstellung text-wrap:pretty
              (siehe globals.css): dieser Satz funktioniert trotz <p>-Tag als
              Display-Headline der Sektion (46px, fett, Fraunces) — für
              Headline-Maßstab liefert eine ausbalancierte Zeilenverteilung ein
              ruhigeres, "schwereres" Satzbild als reine Waisenwort-Vermeidung
              (Typografie-Audit: "Headlines should feel heavy and intentional"). */}
          <p className="mt-6 max-w-xl text-balance font-serif text-[32px] leading-[1.08] font-bold tracking-tight text-deep-forest lg:text-[46px]">
            Wir erschaffen keine künstlichen Bilder oder Markenwelten.
          </p>
          <p className="mt-4 max-w-xl text-[19px] leading-relaxed text-charcoal/80 lg:text-[21px] lg:leading-[1.6]">
            Wir suchen, was bereits vorhanden ist: Charakter, Potenzial, ein echter Moment. Und
            machen es sichtbar. Für ein Unternehmen bedeutet das Konsistenz. Für einen Menschen ein
            ehrliches Bild. Für ein Kind einen unverstellten Moment.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
