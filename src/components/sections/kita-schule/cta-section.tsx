import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { BrandMarkR } from "@/components/shared/brand-mark-r";
import { siteConfig } from "@/lib/site-config";

/**
 * CTA — Phase 7 (Anfrage). Gleiches Muster wie Unternehmen/Fotografie-CTA.
 * Signatur bewusst "Let me show you how good you look." auf ausdrücklichen
 * Wunsch des Auftraggebers, obwohl dieser Claim damit nicht mehr exklusiv
 * der Fotografie-Seite vorbehalten ist (Konflikt wurde vor der Umsetzung
 * angesprochen und bewusst so entschieden).
 *
 * Creative Review, Punkt 7: Headline von einer organisatorischen zu einer
 * zukunftsgerichteten, emotionalen Aussage gewechselt, im selben Stil wie
 * die bestehende Fotografie-CTA-Zeile, damit der Abschluss wie das Ende
 * einer Geschichte liest statt wie eine Formular-Aufforderung.
 */
export function CtaSection() {
  return (
    <section aria-label="Kennenlernen für deine Kita" className="relative overflow-hidden bg-deep-forest px-6 py-28 lg:py-36">
      <BrandMarkR className="pointer-events-none absolute -right-[6vw] -bottom-[12%] h-[70%] w-auto text-off-white opacity-[0.06] sm:-right-[4vw]" />

      <div className="relative mx-auto max-w-2xl text-center">
        <Reveal variant="fade">
          <p className="font-serif text-[clamp(1.75rem,4.2vw,2.75rem)] leading-[1.2] text-off-white italic">
            Vielleicht ist der schönste Moment eurer Kita noch gar nicht festgehalten.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 max-w-md mx-auto">
          <p className="text-[16px] leading-relaxed text-off-white/70">
            Kein Verkaufsgespräch, kein Vertragsdruck. Nur ein Gespräch, in dem wir eure
            Einrichtung kennenlernen.
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

          <Link href="/kontakt/kita-kennenlernen" className="group text-center sm:text-left">
            <span className="flex items-center justify-center gap-2 text-[17px] font-medium tracking-wide text-off-white sm:justify-start">
              Kennenlernen für deine Kita
              <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="mt-1.5 block text-[13px] text-off-white/55">
              Unverbindlich, ohne Verkaufsgespräch
            </span>
          </Link>
        </Reveal>

        <Reveal delay={0.25} className="mt-20 lg:mt-24">
          <p className="font-serif text-lg text-off-white/60 italic">
            „Let me show you how good you look.“
          </p>
        </Reveal>
      </div>
    </section>
  );
}
