import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { KontaktFormular } from "@/components/shared/kontakt-formular";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Projekt besprechen",
  description:
    "Marketingprojekt mit AR Media besprechen: Branding, Corporate Design, Content Creation, Social Media oder eine Kampagne für dein Unternehmen in Kiel und Schleswig-Holstein.",
  alternates: { canonical: "/kontakt/projekt-besprechen" },
};

/**
 * Conversion-Seite für den Unternehmen-Zweig der segmentierten Kontakt-
 * Weiche (Entscheidung 8). Eigenes, zugeschnittenes Formular statt eines
 * generischen Projektart-Dropdowns auf der Hub-Seite, deshalb hier direkt
 * die passenden sieben Leistungen aus der Unternehmen-Navigation als
 * Auswahl, nicht erfunden.
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
            <ArrowLeft aria-hidden className="size-3.5 transition-transform group-hover:-translate-x-1" />
            Zurück
          </Link>
          <p className="mt-8 text-[11px] font-medium tracking-[0.16em] text-charcoal/75 uppercase">
            Kontakt · Unternehmen
          </p>
          <h1 className="mt-4 font-serif text-[clamp(1.5rem,3.6vw,2.25rem)] leading-[1.25] text-charcoal italic">
            Erzähl uns von deinem Unternehmen.
          </h1>
          <p className="mt-5 max-w-md text-[16px] leading-relaxed text-charcoal/70">
            Ein paar Angaben reichen für den Anfang, alles Weitere klären wir im ersten
            Gespräch. Kein Feld hier ist eine Prüfung.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <KontaktFormular
            toEmail={siteConfig.contact.email}
            subjectPrefix="Projektanfrage über die Website"
            submitLabel="Anfrage senden"
            fields={[
              { type: "text", name: "name", label: "Name", required: true },
              { type: "text", name: "unternehmen", label: "Unternehmen", required: true },
              { type: "email", name: "email", label: "E-Mail", required: true },
              { type: "tel", name: "telefon", label: "Telefon" },
              {
                type: "select",
                name: "leistung",
                label: "Worum geht es ungefähr?",
                required: true,
                options: [
                  "Branding",
                  "Corporate Design",
                  "Content Creation",
                  "Social Media",
                  "Employer Branding",
                  "Foto & Video",
                  "Kampagne",
                  "Noch unklar",
                ],
              },
              {
                type: "textarea",
                name: "nachricht",
                label: "Erzähl uns kurz davon",
                placeholder: "Was beschäftigt dich gerade, und was soll sich ändern?",
                required: true,
              },
              { type: "text", name: "budget", label: "Budget", placeholder: "z. B. noch offen" },
              { type: "text", name: "zeitrahmen", label: "Zeitrahmen", placeholder: "z. B. in den nächsten drei Monaten" },
            ]}
          />
        </Reveal>
      </div>
    </section>
  );
}
