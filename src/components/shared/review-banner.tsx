import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/lib/site-config";
import { BrandStar } from "@/components/shared/brand-star";

/**
 * Zufriedenheits-Banner: lädt zufriedene Kund:innen aktiv ein, eine echte
 * Google-Bewertung zu hinterlassen. Verlinkt auf das bereits verifizierte
 * Google-Business-Profil (siteConfig.social.googleBusiness) — von dort ist
 * "Rezension schreiben" ein Klick entfernt. Bewusst KEIN direkter
 * "g.page/r/…/review"-Vorausfüll-Link: der ist Google-seitig nur über das
 * Business-Profil-Dashboard des Inhabers erzeugbar ("Rezensionen
 * anfordern"), nicht zuverlässig herleitbar, ohne eine brüchige,
 * session-gebundene Such-URL zu verwenden. Sobald der echte Kurzlink
 * vorliegt, kann `href` unten direkt darauf zeigen.
 */
export function ReviewBanner() {
  return (
    <section aria-label="Bewertung hinterlassen" className="bg-sand/25 px-6 py-16 lg:py-20">
      <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <span className="flex items-center gap-0.5" aria-hidden>
          {Array.from({ length: 5 }).map((_, i) => (
            <BrandStar key={i} className="size-4 text-deep-forest" />
          ))}
        </span>
        <p className="font-serif text-[22px] leading-snug font-bold tracking-tight text-charcoal lg:text-[26px]">
          Warst du zufrieden? Sag es gern auch anderen weiter.
        </p>
        <p className="max-w-md text-[15px] leading-relaxed text-charcoal/70">
          Eine ehrliche Google-Bewertung hilft uns mehr als jede Werbung, und dauert nur eine Minute.
        </p>
        <a
          href={siteConfig.social.googleBusiness}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-flex items-center gap-2 rounded-sm bg-deep-forest px-6 py-3 text-[14px] font-medium tracking-wide text-off-white transition-colors hover:bg-deep-forest/90"
        >
          Bewertung auf Google schreiben
        </a>
      </Reveal>
    </section>
  );
}
