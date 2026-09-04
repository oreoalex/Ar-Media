import { Reveal } from "@/components/shared/reveal";

/**
 * Kontakt · Hero. Bewusst kein großes Formular im Hero, keine klassische
 * "Kontakt"-Überschrift: eine ruhige Einladung statt einer Aufforderung.
 * Übernimmt den bereits an anderer Stelle vorgeschlagenen und angenommenen
 * Titel dieser Seite unverändert.
 */
export function HeroSection() {
  return (
    <section aria-label="Kontakt" className="bg-off-white px-6 pt-32 pb-20 lg:pt-40 lg:pb-24">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.16em] text-charcoal/75 uppercase">Kontakt</p>
          <h1 className="mt-6 font-serif text-[clamp(1.75rem,4.4vw,3rem)] leading-[1.2] font-bold tracking-tight text-charcoal">
            Lass uns herausfinden, was der richtige nächste Schritt ist.
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-[17px] leading-relaxed text-charcoal/70">
            Kein Formular, das dich in eine Schublade drängt. Ein kurzes Gespräch darüber, was du
            brauchst, und ob wir dafür die Richtigen sind.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
