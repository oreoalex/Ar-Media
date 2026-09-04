import { Reveal } from "@/components/shared/reveal";
import { BrandMarkR } from "@/components/shared/brand-mark-r";
import { siteConfig } from "@/lib/site-config";
import { CtaButton } from "@/components/shared/cta-button";

/**
 * CTA — Phase 7 (Anfrage). Gleiches Muster wie Unternehmen/Fotografie-CTA.
 *
 * Update (UX-Audit P2.10): Die Signatur trug bisher "Let me show you how
 * good you look." — ursprünglich auf ausdrücklichen Wunsch des Auftraggebers
 * gesetzt, trotz dokumentiertem Konflikt (Claim ist eigentlich exklusiv der
 * Fotografie-Seite vorbehalten). Beim erneuten Durchsehen als zu sehr auf
 * Aussehen/Eitelkeit gemünzt für die institutionelle Zielgruppe dieser Seite
 * (Kitaleitung, nicht Privatperson) eingeordnet — auf Rückfrage vom
 * Auftraggeber selbst zur Änderung freigegeben. Neue Signatur: der eigene,
 * echte H1 der Seite ("Kinder dürfen Kinder sein.") als Klammer, dasselbe
 * Bookend-Prinzip wie bei der Startseiten-Invitation-Section.
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
          <p className="font-serif text-[clamp(1.75rem,4.2vw,2.75rem)] leading-[1.2] font-bold tracking-tight text-off-white">
            Vielleicht ist der schönste Moment eurer Kita noch gar nicht festgehalten.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 max-w-md mx-auto">
          <p className="text-[16px] leading-relaxed text-off-white/70">
            Kein Verkaufsgespräch, kein Vertragsdruck. Nur ein Gespräch, in dem wir eure
            Einrichtung kennenlernen.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-14 flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-6">
          <div className="text-center">
            <CtaButton href={`mailto:${siteConfig.contact.email}`} variant="light">
              Nachricht schreiben
            </CtaButton>
            <p className="mt-3 text-[13px] text-off-white/55">
              {siteConfig.contact.email}, wir antworten persönlich
            </p>
          </div>

          <div className="text-center">
            <CtaButton href="/kontakt/kita-kennenlernen" variant="light">
              Kennenlernen für deine Kita
            </CtaButton>
            <p className="mt-3 text-[13px] text-off-white/55">Unverbindlich, ohne Verkaufsgespräch</p>
          </div>
        </Reveal>

        <Reveal delay={0.25} className="mt-20 lg:mt-24">
          <p className="font-serif text-lg font-bold tracking-tight text-off-white/60">
            „Kinder dürfen Kinder sein.“
          </p>
        </Reveal>
      </div>
    </section>
  );
}
