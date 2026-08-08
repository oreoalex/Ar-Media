import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { BrandMarkR } from "@/components/shared/brand-mark-r";
import { siteConfig } from "@/lib/site-config";

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
          <p className="font-serif text-[clamp(1.75rem,4.2vw,2.75rem)] leading-[1.2] text-off-white italic">
            Dein Unternehmen hat bereits Substanz. Lass sie uns sichtbar
            machen.
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

          <Link href="/kontakt/projekt-besprechen" className="group text-center sm:text-left">
            <span className="flex items-center justify-center gap-2 text-[17px] font-medium tracking-wide text-off-white sm:justify-start">
              Termin anfragen
              <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="mt-1.5 block text-[13px] text-off-white/55">
              Am liebsten vor Ort bei dir, gerne bei einem Kaffee
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
