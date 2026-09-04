import { Reveal } from "@/components/shared/reveal";

/**
 * Über AR Media · Hero. Bewusst bildlos, anders als die Heros der drei
 * Funnel-Seiten (Unternehmen/Fotografie/Kita & Schule): diese Seite ist
 * keine Landingpage, sondern ein Vertrauens-Essay, kein "Jetzt anfragen"
 * am Anfang.
 *
 * H1 bewusst kurz ("Über AR Media") statt des Statement-Satzes: eine
 * frühere Version trug den Markenkern direkt in der H1, Google zeigte
 * daraufhin in der Suche den reinen Statement-Satz als Seitentitel an
 * statt "Über AR Media" — die H1 war die einzige starke Textzeile ohne
 * Identifikationsmerkmal.
 *
 * H1 steht jetzt allein, mit spürbarem Weißraum darunter, bevor das
 * Sichtbarkeits-Zitat als eigener Moment folgt (eigener Reveal-Block,
 * eigenes Timing) statt direkt im selben Atemzug darunter zu kleben —
 * das Zitat soll ankommen, nicht nur die nächste Zeile sein.
 */
export function HeroSection() {
  return (
    <section aria-label="Über AR Media" className="bg-off-white px-6 pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <h1 className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
            Über AR Media
          </h1>
        </Reveal>

        <Reveal delay={0.15} className="mt-20 lg:mt-28">
          <p className="mx-auto max-w-xl font-serif text-[clamp(1.9rem,4.6vw,3rem)] leading-[1.2] font-bold tracking-tight text-charcoal">
            Manche Dinge muss man nicht verändern. Nur sichtbar machen.
          </p>
          <p className="mx-auto mt-6 max-w-lg text-[17px] leading-relaxed text-charcoal/70">
            Kein Lebenslauf. Eine Haltung, die sich durch alles zieht, was hier entsteht, für
            Unternehmen, für Menschen, für Kinder.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
