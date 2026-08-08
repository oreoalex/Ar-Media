import { Reveal } from "@/components/shared/reveal";
import { BrandMarkR } from "@/components/shared/brand-mark-r";

/**
 * Was daraus wurde. Bewusst dunkler Rhythmus-Bruch, einziger auf dieser
 * Seite, als kurzer, manifestartiger Ruhepunkt statt einer weiteren
 * Textwand. Trägt keinen CTA, diese Seite verkauft kein Gespräch, sondern
 * eine Überzeugung, der Abschluss dafür folgt in der nächsten Section.
 */
export function HaltungHeuteSection() {
  return (
    <section aria-label="Was daraus wurde" className="relative overflow-hidden bg-deep-forest px-6 py-24 lg:py-32">
      <BrandMarkR className="pointer-events-none absolute -right-[8vw] top-1/2 h-[75%] w-auto -translate-y-1/2 text-off-white opacity-[0.05] sm:-right-[5vw]" />

      <div className="relative mx-auto max-w-xl text-center">
        <Reveal variant="fade">
          <h2 className="text-[11px] font-medium tracking-[0.14em] text-off-white/60 uppercase">
            Die Haltung heute
          </h2>
          <p className="mx-auto mt-6 max-w-md text-[16px] leading-relaxed text-off-white/70">
            Deshalb inszeniert AR Media nicht. Deshalb wird nicht behauptet, was fehlt, sondern
            gezeigt, was schon da ist, bei einer Marke genauso wie bei einem Kind auf dem
            Spielplatz.
          </p>
          <p className="mt-8 font-serif text-[clamp(1.5rem,3.2vw,2rem)] leading-[1.3] text-off-white italic">
            Drei unterschiedliche Arbeitsfelder. Eine einzige Überzeugung.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
