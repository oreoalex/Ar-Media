import { Reveal } from "@/components/shared/reveal";
import { BrandMarkA } from "@/components/shared/brand-mark-a";

/**
 * Wie eine Zusammenarbeit beginnt. Menschlich statt technisch, direkte
 * Fortsetzung der bereits auf /unternehmen etablierten Aussage ("Die
 * meisten Projekte beginnen mit einem Gespräch, nicht mit einem fertigen
 * Briefing"), hier als eigener, ausformulierter Gedanke statt FAQ-Antwort.
 * Gleiches BrandMarkA-Wasserzeichen wie auf jeder "Denkansatz"-artigen
 * Section der Seite, kein neues Systemelement.
 */
export function ZusammenarbeitSection() {
  return (
    <section aria-label="Wie eine Zusammenarbeit beginnt" className="relative overflow-hidden bg-off-white px-6 py-24 lg:py-32">
      <BrandMarkA className="pointer-events-none absolute top-1/2 -left-[10vw] h-[80%] w-auto -translate-y-1/2 text-deep-forest opacity-[0.035] sm:-left-[7vw]" />
      <div className="relative mx-auto max-w-2xl">
        <Reveal>
          <h2 className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
            Wie eine Zusammenarbeit beginnt
          </h2>
          <span aria-hidden className="mt-4 block h-px w-8 bg-charcoal/20" />
          <p className="mt-6 text-[20px] leading-relaxed text-charcoal/80 lg:text-[22px] lg:leading-[1.55]">
            Die meisten Projekte beginnen nicht mit einem fertigen Briefing, sondern mit einer
            Nachricht: eine grobe Idee, eine Unsicherheit, manchmal nur ein Gefühl, dass etwas
            fehlt. Das reicht. Der erste Schritt ist kein Angebot, sondern ein Gespräch, in dem
            wir uns kennenlernen und gemeinsam herausfinden, ob und wie wir zusammenpassen.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
