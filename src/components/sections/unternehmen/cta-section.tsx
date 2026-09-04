import { Reveal } from "@/components/shared/reveal";
import { BrandMarkR } from "@/components/shared/brand-mark-r";
import { siteConfig } from "@/lib/site-config";
import { CtaButton } from "@/components/shared/cta-button";

/**
 * Abschluss-CTA. Bewusst kraftvoller als der stille Drei-Wege-Schluss der
 * Startseite: diese Seite hat eine Funnel-Aufgabe (Marketingprojekte
 * gewinnen), also zwei klare, reibungsarme Einstiege statt nur eines
 * ruhigen Links — direkte Nachricht (mailto, keine Formularhürde) und
 * Terminanfrage (führt ins qualifizierte Kontaktformular). Kein neuer
 * Claim: "Let me show you what's already there." bleibt die alleinige
 * Signatur der Startseite.
 */
export function CtaSection() {
  return (
    <section aria-label="Projekt besprechen" className="relative overflow-hidden bg-deep-forest px-6 py-28 lg:py-36">
      <BrandMarkR className="pointer-events-none absolute -right-[6vw] -bottom-[12%] h-[70%] w-auto text-off-white opacity-[0.06] sm:-right-[4vw]" />

      <div className="relative mx-auto max-w-2xl text-center">
        <Reveal variant="fade">
          <p className="font-serif text-[clamp(1.75rem,4.2vw,2.75rem)] leading-[1.2] font-bold tracking-tight text-off-white">
            Dein Unternehmen hat bereits Substanz. Lass sie uns sichtbar
            machen.
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
            <CtaButton href="/kontakt/projekt-besprechen" variant="light">
              Termin anfragen
            </CtaButton>
            <p className="mt-3 text-[13px] text-off-white/55">Am liebsten vor Ort bei dir, gerne bei einem Kaffee</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
