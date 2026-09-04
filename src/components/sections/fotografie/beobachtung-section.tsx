import { Reveal } from "@/components/shared/reveal";

/**
 * Beobachtung. Direktes Pendant zur "Warum viele Unternehmen unsichtbar
 * bleiben"-Section: die Diagnose vor der Antwort, bewusst bildlos, damit
 * die Aussage nicht durch ein Bild abgelenkt wird.
 */
export function BeobachtungSection() {
  return (
    <section aria-label="Kaum jemand mag sich auf Fotos" className="bg-off-white px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
            Eine Beobachtung
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 font-serif text-[clamp(1.5rem,3.6vw,2.25rem)] leading-[1.3] font-bold tracking-tight text-charcoal">
            Kaum jemand mag sich auf Fotos.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-xl text-[17px] leading-relaxed text-charcoal/70">
            Nicht, weil er schlecht aussieht. Sondern weil er sich beobachtet
            fühlt, statt gesehen zu werden. Die Schultern werden steif. Das
            Lächeln wird zur Aufgabe. Und am Ende sagt jemand: „Ich bin
            einfach nicht fotogen.“ Das stimmt fast nie. Es liegt selten am
            Gesicht. Es liegt daran, wie fotografiert wird.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
