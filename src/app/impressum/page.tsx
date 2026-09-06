import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/shared/legal-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von AR Media gemäß § 5 Digitale-Dienste-Gesetz (DDG).",
  alternates: { canonical: "/impressum" },
};

/**
 * Rechtstext unverändert und vollständig wie vom Betreiber geliefert
 * übernommen (siehe Auftrag: Inhalte gelten als verbindlich, hier nur
 * gestalterisch/technisch eingebettet, nicht verfasst oder verändert).
 * Adressblock als dl/dt/dd statt Fließtext, damit er auch bei einem so
 * kurzen Text nicht wie ein loser Textblock wirkt, sondern klar
 * strukturiert ist. Kein Inhaltsverzeichnis, bei zwei Abschnitten nicht
 * sinnvoll (Schwelle liegt bei drei, siehe LegalPage).
 */
const sections: LegalSection[] = [
  {
    id: "angaben",
    title: "Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)",
    content: (
      <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-[140px_1fr]">
        <dt className="text-charcoal/75">Name</dt>
        <dd>Alexander Rieck</dd>

        <dt className="text-charcoal/75">Unternehmen</dt>
        <dd>{siteConfig.name}</dd>

        <dt className="text-charcoal/75">Anschrift</dt>
        <dd>
          {siteConfig.location.street}
          <br />
          {siteConfig.location.postalCode} {siteConfig.location.city}
          <br />
          {siteConfig.location.country}
        </dd>

        <dt className="text-charcoal/75">E-Mail</dt>
        <dd>
          <a href={`mailto:${siteConfig.contact.email}`} className="underline decoration-charcoal/30 underline-offset-4 transition-colors hover:text-deep-forest hover:decoration-deep-forest">
            {siteConfig.contact.email}
          </a>
        </dd>

        <dt className="text-charcoal/75">Telefon</dt>
        <dd>
          <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`} className="underline decoration-charcoal/30 underline-offset-4 transition-colors hover:text-deep-forest hover:decoration-deep-forest">
            {siteConfig.contact.phone}
          </a>
        </dd>

        <dt className="text-charcoal/75">Rechtsform</dt>
        <dd>Einzelunternehmer</dd>
      </dl>
    ),
  },
  {
    id: "streitbeilegung",
    title: "Streitbeilegung",
    content: (
      <>
        <p>
          Plattform der EU-Kommission zur Online-Streitbeilegung:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-charcoal/30 underline-offset-4 transition-colors hover:text-deep-forest hover:decoration-deep-forest"
          >
            ec.europa.eu/consumers/odr
          </a>
        </p>
        <p className="mt-4">
          Ich bin weder verpflichtet noch bereit, an einem Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </>
    ),
  },
];

export default function ImpressumPage() {
  return (
    <>
      <LegalPage kicker="Rechtliches" title="Impressum" sections={sections} />
      <div className="bg-off-white px-6 pb-24 lg:pb-32">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/datenschutz"
            className="text-[14px] text-charcoal/70 underline decoration-charcoal/25 underline-offset-4 transition-colors hover:text-deep-forest hover:decoration-deep-forest"
          >
            Zur Datenschutzerklärung
          </Link>
        </div>
      </div>
    </>
  );
}
