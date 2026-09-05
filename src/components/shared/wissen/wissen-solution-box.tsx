import { CtaButton } from "@/components/shared/cta-button";
import { BrandTick } from "@/components/shared/brand-tick";
import type { ArMediaSolution } from "@/lib/wissen/types";

type WissenSolutionBoxProps = {
  solution: ArMediaSolution;
};

/**
 * Die wiederverwendbare "AR Media Solution"-Box: Frage → Antwort → ein
 * CtaButton zu einer echten bestehenden Leistungsseite. Bewusst zurück-
 * haltend (eine Box pro Artikel, kein wiederholter Sales-Push nach jedem
 * Absatz) — Farbwahl Sand statt Deep Forest, damit sie sich als ruhiger
 * Kontext-Hinweis liest, nicht als lauter Werbeblock mitten im Artikel.
 */
export function WissenSolutionBox({ solution }: WissenSolutionBoxProps) {
  return (
    <div className="border border-charcoal/10 bg-sand/20 px-6 py-8 sm:px-10 sm:py-10">
      <BrandTick className="h-4 w-2.5 text-charcoal/25" />
      <p className="mt-4 text-[17px] leading-relaxed font-medium text-charcoal lg:text-[19px]">
        {solution.question}
      </p>
      <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-charcoal/75">{solution.answer}</p>
      <div className="mt-6">
        <CtaButton href={solution.ctaHref} variant="outline-dark" size="sm">
          {solution.ctaLabel}
        </CtaButton>
      </div>
    </div>
  );
}
