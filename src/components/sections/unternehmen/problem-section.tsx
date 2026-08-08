import { Reveal } from "@/components/shared/reveal";

/**
 * Warum viele Unternehmen unsichtbar bleiben. Der Haken der Seite — direkt
 * nach dem Hero, bevor die Haltung erklärt wird. Bewusst kurz und ohne
 * Bild: reiner Text, der die Diagnose stellt, die "Unsere Haltung" gleich
 * danach beantwortet (Funnel-Logik: Problem → Antwort → Beweis).
 */
export function ProblemSection() {
  return (
    <section aria-label="Warum viele Unternehmen unsichtbar bleiben" className="bg-off-white px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
            Eine Beobachtung
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 font-serif text-[clamp(1.5rem,3.6vw,2.25rem)] leading-[1.3] text-charcoal italic">
            Kein Substanzproblem.
            <br />
            Ein Sichtbarkeitsproblem.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-xl text-[17px] leading-relaxed text-charcoal/70">
            Ein Logo von vor zehn Jahren. Fotos, die niemand mehr zeigen möchte.
            Ein Social-Media-Kanal, der seit Monaten stillsteht. Nach außen wirkt
            das zufällig, obwohl innen längst Haltung, Qualität und ein klares
            Warum stehen. Genau diese Lücke schließen wir.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
