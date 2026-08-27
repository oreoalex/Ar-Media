import { Reveal } from "@/components/shared/reveal";
import { BrandMarkA } from "@/components/shared/brand-mark-a";

/**
 * Unsere Haltung — Phase 3 (Vertrauen). Positionierung gegen klassische
 * Kitafotografie, bewusst als Kontrastliste statt als Behauptung ("wir sind
 * besser"): jede Zeile zeigt, wie es meistens läuft, und wie wir es stattdessen
 * machen. Gleiches BrandMarkA-Wasserzeichen wie auf Unternehmen/Fotografie,
 * für Systemkontinuität über alle drei Landingpages hinweg.
 *
 * Der einleitende Satz vor der Kontrastliste trägt bewusst den Gedanken "die
 * verstehen Kinder" explizit, nicht nur implizit über die Bildsprache: der
 * Master-Prompt fordert diesen Gedankenschritt ausdrücklich, vorher stand er
 * nirgends klar ausformuliert auf der Seite.
 *
 * Die "Leinwand"-Zeile ersetzt die vorherige, abstraktere Formulierung
 * ("Echte Situationen, echtes Licht") durch eine konkrete, vom Betreiber
 * bestätigte Tatsache (Content-Audit: E-E-A-T braucht konkrete, prüfbare
 * Aussagen statt austauschbarer Marketing-Sprache) — draußen, natürliches
 * Licht bevorzugt, explizit keine Studio-/Leinwand-Portraits, siehe auch
 * die FAQ in vertrauen-section.tsx.
 */
const kontraste = [
  { ohne: "Keine Mappen, die verkauft werden müssen", dafuer: "Digitale Bestellung, bei der Eltern selbst entscheiden" },
  { ohne: "Kein Kaufdruck im Kita-Alltag", dafuer: "Die Einrichtung verwaltet nichts" },
  { ohne: "Keine Portraits vor der Leinwand", dafuer: "Am liebsten draußen, bei natürlichem Licht" },
  { ohne: "Keine gestellten Standardportraits", dafuer: "Natürliche Emotionen, kuratiert statt einstudiert" },
  { ohne: "Keine Fließbandfotografie", dafuer: "Zeit für jedes Kind, so viel wie es braucht" },
  { ohne: "Kein Filter, der alle Kinder gleich aussehen lässt", dafuer: "Ruhige Farbgebung, echte Hauttöne, erkennbar bleibt jedes Kind es selbst" },
];

export function HaltungSection() {
  return (
    <section aria-label="Wir arbeiten nicht besser, wir arbeiten anders" className="relative overflow-hidden bg-off-white px-6 py-24 lg:py-32">
      <BrandMarkA className="pointer-events-none absolute top-1/2 -right-[10vw] h-[80%] w-auto -translate-y-1/2 text-deep-forest opacity-[0.035] sm:-right-[7vw]" />

      <div className="relative mx-auto max-w-3xl">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
            Unsere Haltung
          </p>
          <span aria-hidden className="mt-4 block h-px w-8 bg-charcoal/20" />
          <h2 className="mt-6 max-w-xl text-[22px] leading-relaxed text-charcoal/80 lg:text-[24px]">
            Wir arbeiten nicht besser. Wir arbeiten anders.
          </h2>
          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-charcoal/70">
            Kinder lassen sich nicht auf Kommando in Pose stellen, das wissen wir. Deshalb
            versuchen wir es gar nicht erst.
          </p>
        </Reveal>

        <ul className="mt-14 divide-y divide-charcoal/10 border-t border-charcoal/10">
          {kontraste.map((item, i) => (
            <Reveal key={item.ohne} delay={i * 0.04}>
              <li className="flex flex-col gap-1.5 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <span className="text-[15px] text-charcoal/75 line-through decoration-charcoal/25 sm:max-w-[45%]">
                  {item.ohne}
                </span>
                <span className="text-[16px] font-medium text-charcoal sm:max-w-[50%] sm:text-right">
                  {item.dafuer}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
