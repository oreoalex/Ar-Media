import Link from "next/link";
import { BrandArrow } from "@/components/shared/brand-arrow";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

type WissenArticleCardProps = {
  href: string;
  kicker?: string;
  title: string;
  description: string;
  delay?: number;
  /** "compact" für dichtere Raster (z. B. Verwandte Artikel), "default" für Kategorie-/Artikellisten. */
  size?: "default" | "compact";
};

/**
 * Neue, bewusste Kartenkomponente — die Codebase kannte bisher kein
 * "klickbare Karte mit Rahmen"-Muster (nur volltonige Bild-Links wie
 * ForkSection oder randlose Zeilenlisten wie leistungen-section.tsx).
 * Textbasiert statt bebildert, da für diese Themen keine passende
 * Fotografie existiert — ein generisches Stockfoto wäre schlimmer als gar
 * keins. Haarlinien-Rahmen statt Schatten (Taste-Skills: anti-generisches
 * SaaS-Karten-Muster), active:scale-[0.97] als eigenes Press-Feedback
 * (Emil Kowalski: "buttons must feel responsive") — bewusst hier neu
 * gebaut statt rückwirkend in cta-button.tsx, um dessen sitewide
 * Wirkradius nicht zu berühren.
 */
export function WissenArticleCard({ href, kicker, title, description, delay = 0, size = "default" }: WissenArticleCardProps) {
  return (
    <Reveal delay={delay}>
      <Link
        href={href}
        className={cn(
          "group flex h-full flex-col justify-between border border-charcoal/10 bg-off-white transition-[border-color,transform] duration-200 ease-out hover:border-charcoal/25 active:scale-[0.98]",
          size === "compact" ? "rounded-lg p-6" : "rounded-xl p-8 lg:p-10",
        )}
      >
        <div>
          {kicker && (
            <p className="text-[11px] font-medium tracking-[0.14em] text-charcoal/60 uppercase">{kicker}</p>
          )}
          <h3
            className={cn(
              "font-serif font-bold tracking-tight text-charcoal",
              size === "compact" ? "mt-2 text-[18px]" : "mt-3 text-[21px] lg:text-[23px]",
            )}
          >
            {title}
          </h3>
          <p className={cn("text-charcoal/70", size === "compact" ? "mt-2 text-[14px] leading-relaxed" : "mt-3 text-[15px] leading-relaxed")}>
            {description}
          </p>
        </div>
        <BrandArrow
          aria-hidden
          className="mt-6 size-4 shrink-0 text-charcoal/40 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:text-deep-forest"
        />
      </Link>
    </Reveal>
  );
}
