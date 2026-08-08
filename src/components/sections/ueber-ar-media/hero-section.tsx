import { Reveal } from "@/components/shared/reveal";

/**
 * Über AR Media · Hero. Bewusst bildlos, anders als die Heros der drei
 * Funnel-Seiten (Unternehmen/Fotografie/Kita & Schule): diese Seite ist
 * keine Landingpage, sondern ein Vertrauens-Essay, kein "Jetzt anfragen"
 * am Anfang. Die H1 trägt direkt den Markenkern als Satz, keine separate
 * Behauptung darüber.
 */
export function HeroSection() {
  return (
    <section aria-label="Manche Dinge muss man nicht verändern" className="bg-off-white px-6 pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
            Über AR Media
          </p>
          <h1 className="mx-auto mt-5 max-w-xl font-serif text-[clamp(1.9rem,4.6vw,3rem)] leading-[1.2] text-charcoal italic">
            Manche Dinge muss man nicht verändern. Nur sichtbar machen.
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-[17px] leading-relaxed text-charcoal/70">
            Kein Lebenslauf. Eine Haltung, die sich durch alles zieht, was hier entsteht, für
            Unternehmen, für Menschen, für Kinder.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
