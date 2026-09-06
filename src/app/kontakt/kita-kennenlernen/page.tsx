import type { Metadata } from "next";
import Link from "next/link";
import { BrandArrowLeft } from "@/components/shared/brand-arrow-left";
import { Reveal } from "@/components/shared/reveal";
import { KontaktFormular } from "@/components/shared/kontakt-formular";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kita kennenlernen",
  description:
    "AR Media als Kita- und Schulfotograf in Kiel und Schleswig-Holstein kennenlernen: echte Fotografie statt gestellter Mappenfotos.",
  alternates: { canonical: "/kontakt/kita-kennenlernen" },
};

/**
 * Conversion-Seite für den Kita & Schule-Zweig der segmentierten Kontakt-
 * Weiche. Bewusst "Einrichtung" statt "Unternehmen" als Feldbezeichnung,
 * eigene Zielgruppe, eigene Sprache.
 */
export default function Page() {
  return (
    <section className="bg-off-white px-6 pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-xl">
        <Reveal>
          <Link
            href="/kontakt"
            className="group inline-flex items-center gap-2 text-[13px] font-medium tracking-wide text-charcoal/70 transition-colors hover:text-deep-forest"
          >
            <BrandArrowLeft aria-hidden className="size-3.5 transition-transform group-hover:-translate-x-1" />
            Zurück
          </Link>
          <p className="mt-8 text-[11px] font-medium tracking-[0.16em] text-charcoal/75 uppercase">
            Kontakt · Kita & Schule
          </p>
          <h1 className="mt-4 font-serif text-[clamp(1.5rem,3.6vw,2.25rem)] leading-[1.25] font-bold tracking-tight text-charcoal">
            Erzählt uns von eurer Einrichtung.
          </h1>
          <p className="mt-5 max-w-md text-[16px] leading-relaxed text-charcoal/70">
            Ablauf, Termin und Datenschutz besprechen wir im ersten, unverbindlichen Gespräch.
            Hier reicht ein erster Kontakt.
          </p>
          {/* Timing-Audit (2026-09-06): siehe projekt-besprechen/page.tsx. */}
          <p className="mt-3 text-[14px] text-charcoal/55">
            Wir antworten in der Regel innerhalb weniger Werktage.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <KontaktFormular
            toEmail={siteConfig.contact.email}
            subjectPrefix="Kita-Anfrage über die Website"
            submitLabel="Anfrage senden"
            fields={[
              { type: "text", name: "name", label: "Name", required: true },
              { type: "text", name: "einrichtung", label: "Einrichtung", required: true },
              { type: "email", name: "email", label: "E-Mail", required: true },
              { type: "tel", name: "telefon", label: "Telefon" },
              {
                type: "select",
                name: "art",
                label: "Art der Einrichtung",
                required: true,
                options: ["Kita / Kindergarten", "Schule", "Sonstiges"],
              },
              {
                type: "textarea",
                name: "nachricht",
                label: "Erzählt uns kurz davon",
                placeholder: "Wie viele Kinder, welcher Zeitraum, worauf kommt es euch an?",
                required: true,
              },
            ]}
          />
        </Reveal>
      </div>
    </section>
  );
}
