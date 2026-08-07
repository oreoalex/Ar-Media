import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { BrandMarkR } from "@/components/shared/brand-mark-r";
import { siteConfig } from "@/lib/site-config";

/**
 * Abschluss-CTA. Gleiches Muster wie Unternehmen-CTA (zwei reibungsarme
 * Einstiege, BrandMarkR als Bookend zur "A"-Silhouette in der Haltung-
 * Section), aber mit dem zweiten Markenclaim als leiser Signatur: "Let me
 * show you how good you look." gehört laut Markendramaturgie zu diesem
 * Gewerk — hier ist sein eigentlicher Bestimmungsort, nicht die Startseite.
 * "Let me show you what's already there." bleibt exklusiv der Startseite
 * vorbehalten.
 */
export function CtaSection() {
  return (
    <section aria-label="Shooting anfragen" className="relative overflow-hidden bg-deep-forest px-6 py-28 lg:py-36">
      <BrandMarkR className="pointer-events-none absolute -right-[6vw] -bottom-[12%] h-[70%] w-auto text-off-white opacity-[0.06] sm:-right-[4vw]" />

      <div className="relative mx-auto max-w-2xl text-center">
        <Reveal variant="fade">
          <p className="font-serif text-[clamp(1.75rem,4.2vw,2.75rem)] leading-[1.2] text-off-white italic">
            Vielleicht ist dein Lieblingsbild eins, das es noch gar nicht gibt.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 max-w-md mx-auto">
          <p className="text-[16px] leading-relaxed text-off-white/70">
            Kein Verkaufsgespräch. Kein Paket, das du vorher verstehen musst.
            Nur ein Gespräch, bei dem wir uns kennenlernen, und der Rest
            ergibt sich.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-14 flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-14">
          <a href={`mailto:${siteConfig.contact.email}`} className="group text-center sm:text-left">
            <span className="flex items-center justify-center gap-2 text-[17px] font-medium tracking-wide text-off-white sm:justify-start">
              Nachricht schreiben
              <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="mt-1.5 block text-[13px] text-off-white/55">
              {siteConfig.contact.email}, wir antworten persönlich
            </span>
          </a>

          <Link href="/kontakt/shooting-anfragen" className="group text-center sm:text-left">
            <span className="flex items-center justify-center gap-2 text-[17px] font-medium tracking-wide text-off-white sm:justify-start">
              Shooting anfragen
              <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="mt-1.5 block text-[13px] text-off-white/55">
              Wir beginnen mit einem Gespräch
            </span>
          </Link>
        </Reveal>

        <Reveal delay={0.25} className="mt-20 lg:mt-24">
          <p className="font-serif text-lg text-off-white/50 italic">
            „Let me show you how good you look.“
          </p>
        </Reveal>
      </div>
    </section>
  );
}
