import { Reveal } from "@/components/shared/reveal";
import { BrandMarkA } from "@/components/shared/brand-mark-a";

/**
 * Was alles verbindet. Kern der ganzen Seite: der gemeinsame Nenner
 * zwischen Marketing, Fotografie und Kitafotografie, hergeleitet aus den
 * echten, vorgegebenen Fakten, nicht neu erfunden. BrandMarkA-Wasserzeichen
 * wie auf den drei Funnel-Seiten, für Systemkontinuität.
 */
export function RoterFadenSection() {
  return (
    <section aria-label="Was alles verbindet" className="relative overflow-hidden bg-off-white px-6 py-24 lg:py-32">
      <BrandMarkA className="pointer-events-none absolute top-1/2 -left-[10vw] h-[80%] w-auto -translate-y-1/2 text-deep-forest opacity-[0.035] sm:-left-[7vw]" />

      <div className="relative mx-auto max-w-2xl">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.14em] text-charcoal/45 uppercase">
            Der rote Faden
          </p>
          <span aria-hidden className="mt-4 block h-px w-8 bg-charcoal/20" />
          <p className="mt-6 text-[18px] leading-relaxed text-charcoal/80 lg:text-[19px]">
            Parallel dazu arbeitete er im Marketing. Dort fiel ihm etwas auf, das sich mit der
            Zeit als derselbe Gedanke entpuppte, der schon hinter jedem Kinderfoto steckte:
            Unternehmen haben selten ein Problem mit fehlender Qualität. Sie haben ein Problem
            mit fehlender Sichtbarkeit. Genau wie ein Kind, das sich nicht verstellen muss, um
            schön auszusehen. Genau wie ein Mensch, der schon gut aussieht, bevor ihm jemand
            sagt, wie er zu stehen hat. Aus diesem Gedanken entstand AR Media. Nichts davon
            musste neu erfunden werden. Es musste nur jemand hinsehen und zeigen, was längst
            da war.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
