import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/shared/legal-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von AR Media.",
  alternates: { canonical: "/datenschutz" },
};

/**
 * Rechtstext vom Betreiber geliefert (siehe Auftrag: juristische Inhalte
 * werden nicht selbst verfasst). Platzhalter im gelieferten Entwurf wurden
 * gegen tatsächlich verifizierte Fakten aus diesem Repository ersetzt,
 * nicht erfunden:
 * - E-Mail/Telefon: siteConfig.contact (bereits realer Wert)
 * - Hosting: Vercel, per `curl -I` gegen die Live-Seite bestätigt
 *   (`server: Vercel`, Region fra1)
 * - Kontaktaufnahme: tatsächlich reine mailto:/tel:-Links (kein Formular,
 *   keine serverseitige Verarbeitung/Speicherung durch AR Media selbst,
 *   siehe grep über alle Kontaktseiten) — genauer als der Entwurf, der
 *   noch generisch "Formular" nannte
 * - GA4-Konfiguration: gegen google-analytics.tsx und consent-banner.tsx
 *   verifiziert (Consent Mode v2, Default denied, nur analytics_storage,
 *   kein ad_storage/Werbetracking) statt des Hinweises "muss noch
 *   geprüft werden" im Entwurf
 * - Abschnitt 9 (eingebundene Dienste): Repository-weit nach iframes/
 *   externen Scripts durchsucht, außer GA4 nichts gefunden (kein Maps-
 *   Embed, kein externes Bestell-/Galeriesystem) — Liste durch die
 *   tatsächliche Aussage "aktuell keine" ersetzt statt spekulativer
 *   Aufzählung möglicher Dienste
 *
 * Weiterhin offen (nicht verifizierbar aus dem Repository, Betreiber
 * sollte bestätigen): ob eine Auftragsverarbeitungsvereinbarung mit
 * Vercel im Vercel-Account tatsächlich akzeptiert wurde. Vercel bietet
 * eine standardmäßig an (vercel.com/legal/dpa), das allein steht hier
 * aber nicht.
 */
const sections: LegalSection[] = [
  {
    id: "verantwortlicher",
    title: "1. Verantwortlicher",
    content: (
      <>
        <p>Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist:</p>
        <p className="mt-4">
          {siteConfig.name}
          <br />
          {siteConfig.founder.name}
          <br />
          {siteConfig.location.street}
          <br />
          {siteConfig.location.postalCode} {siteConfig.location.city}
          <br />
          {siteConfig.location.country}
        </p>
        <p className="mt-4">
          E-Mail:{" "}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="underline decoration-charcoal/30 underline-offset-4 transition-colors hover:text-deep-forest hover:decoration-deep-forest"
          >
            {siteConfig.contact.email}
          </a>
          <br />
          Telefon:{" "}
          <a
            href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
            className="underline decoration-charcoal/30 underline-offset-4 transition-colors hover:text-deep-forest hover:decoration-deep-forest"
          >
            {siteConfig.contact.phone}
          </a>
        </p>
      </>
    ),
  },
  {
    id: "allgemeine-hinweise",
    title: "2. Allgemeine Hinweise",
    content: (
      <>
        <p>
          Der Schutz deiner persönlichen Daten ist uns wichtig. Wir verarbeiten personenbezogene
          Daten nur, soweit dies für den Betrieb dieser Website, die Kommunikation mit dir, die
          Bearbeitung von Anfragen oder – sofern du eingewilligt hast – für die Verbesserung
          unseres digitalen Angebots erforderlich ist.
        </p>
        <p className="mt-4">
          Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder
          identifizierbare Person beziehen können. Welche Daten konkret verarbeitet werden, hängt
          davon ab, wie du unsere Website nutzt.
        </p>
      </>
    ),
  },
  {
    id: "aufruf",
    title: "3. Aufruf unserer Website",
    content: (
      <>
        <p>
          Beim Aufruf unserer Website werden technisch notwendige Informationen verarbeitet,
          damit die Website ausgeliefert und sicher betrieben werden kann. Dazu können
          insbesondere gehören:
        </p>
        <ul className="mt-4 list-disc space-y-1.5 pl-5">
          <li>IP-Adresse</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>aufgerufene Seite</li>
          <li>Referrer-URL</li>
          <li>Informationen zum verwendeten Browser und Betriebssystem</li>
          <li>technische Verbindungs- und Zugriffsdaten</li>
        </ul>
        <p className="mt-4">
          Die Verarbeitung erfolgt zur technischen Bereitstellung, Stabilität und Sicherheit der
          Website. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse
          liegt in einem sicheren, stabilen und funktionierenden Betrieb der Website.
        </p>
      </>
    ),
  },
  {
    id: "hosting",
    title: "4. Hosting",
    content: (
      <>
        <p>
          Unsere Website wird bei Vercel betrieben (Vercel Inc., 340 S Lemon Ave #4133, Walnut,
          CA 91789, USA, europäische Auslieferung über ein Rechenzentrum in Frankfurt am Main).
          Dabei werden die für die Auslieferung der Website erforderlichen technischen Daten
          verarbeitet.
        </p>
        <p className="mt-4">
          Vercel bietet eine Vereinbarung zur Auftragsverarbeitung nach Art. 28 DSGVO an, abrufbar
          unter{" "}
          <a
            href="https://vercel.com/legal/dpa"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-charcoal/30 underline-offset-4 transition-colors hover:text-deep-forest hover:decoration-deep-forest"
          >
            vercel.com/legal/dpa
          </a>
          . Weitere Informationen zum Datenschutz bei Vercel:{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-charcoal/30 underline-offset-4 transition-colors hover:text-deep-forest hover:decoration-deep-forest"
          >
            vercel.com/legal/privacy-policy
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "kontaktaufnahme",
    title: "5. Kontaktaufnahme",
    content: (
      <>
        <p>
          Auf unserer Website gibt es verschiedene Möglichkeiten, mit uns Kontakt aufzunehmen.
          Alle Kontaktwege auf dieser Website sind einfache E-Mail- und Telefonlinks: Ein Klick
          öffnet dein eigenes E-Mail-Programm oder deine Telefon-App, die Nachricht wird direkt
          über deinen eigenen E-Mail-Anbieter verschickt. Es gibt kein Formular auf dieser
          Website, das Daten an einen Server von {siteConfig.name} überträgt oder dort
          speichert.
        </p>
        <p className="mt-4">
          Wenn du uns auf diesem Weg kontaktierst, verarbeiten wir die von dir übermittelten
          Daten, insbesondere Name, E-Mail-Adresse, Telefonnummer sofern angegeben, Inhalte
          deiner Nachricht und weitere Angaben, die du freiwillig übermittelst, ausschließlich
          zur Bearbeitung deiner Anfrage und zur anschließenden Kommunikation mit dir.
        </p>
        <p className="mt-4">
          Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO, soweit deine Anfrage auf die Anbahnung
          oder Durchführung eines Vertrags gerichtet ist. Bei sonstigen Anfragen erfolgt die
          Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse
          besteht darin, Anfragen zu beantworten und mit Interessenten und Kunden zu
          kommunizieren.
        </p>
      </>
    ),
  },
  {
    id: "anfragearten",
    title: "6. Projekt- und Shooting-Anfragen",
    content: (
      <p>
        Je nach Anfrage (Unternehmen, Fotografie oder Kita &amp; Schule) führen die Kontaktwege
        auf dieser Website zu unterschiedlichen, thematisch passenden E-Mail- und
        Telefonverbindungen. Wir erheben grundsätzlich nur die Daten, die für die jeweilige
        Anfrage und deren Bearbeitung erforderlich sind. Die unterschiedlichen Kontaktwege
        dienen dazu, Anfragen möglichst direkt dem passenden Angebot zuzuordnen.
      </p>
    ),
  },
  {
    id: "google-analytics",
    title: "7. Google Analytics",
    content: (
      <>
        <p>
          Diese Website verwendet Google Analytics 4, einen Dienst der Google Ireland Limited,
          Gordon House, Barrow Street, Dublin 4, Irland. Google Analytics hilft uns dabei zu
          verstehen, wie Besucher unsere Website nutzen und welche Bereiche unseres Angebots
          besonders relevant sind.
        </p>
        <p className="mt-4">
          Der Einsatz erfolgt über Google Consent Mode v2: Beim ersten Seitenaufruf ist jede
          Datenerhebung standardmäßig deaktiviert (Status „denied“ für Analyse- und
          Werbesignale). Erst wenn du im Cookie-Banner ausdrücklich zustimmst, wird Google
          Analytics aktiv. Wir setzen ausschließlich das Statistik-Signal ein (
          <span className="italic">analytics_storage</span>); Werbetracking oder
          Personalisierung (<span className="italic">ad_storage</span>,{" "}
          <span className="italic">ad_user_data</span>,{" "}
          <span className="italic">ad_personalization</span>) sind auf dieser Website technisch
          nicht vorgesehen und bleiben dauerhaft deaktiviert.
        </p>
        <p className="mt-4">
          Dabei können unter anderem Informationen über Seitenaufrufe, Interaktionen, verwendete
          Geräte, technische Merkmale und die Herkunft des Websitebesuchs verarbeitet werden.
        </p>
        <p className="mt-4">
          Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO. Du kannst eine erteilte Einwilligung
          jederzeit über den Link „Cookie-Einstellungen“ im Footer mit Wirkung für die Zukunft
          widerrufen.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "8. Cookies und Einwilligungen",
    content: (
      <>
        <p>
          Unsere Website verwendet Cookies bzw. vergleichbare Technologien. Dabei unterscheiden
          wir zwischen technisch notwendigen Technologien und solchen, die erst nach deiner
          Einwilligung eingesetzt werden.
        </p>
        <p className="mt-4">Technisch notwendige Technologien dienen beispielsweise dazu,</p>
        <ul className="mt-4 list-disc space-y-1.5 pl-5">
          <li>die Website technisch bereitzustellen,</li>
          <li>Sicherheitsfunktionen zu ermöglichen,</li>
          <li>deine Cookie-Einstellungen zu speichern.</li>
        </ul>
        <p className="mt-4">
          Für die nicht notwendige Analyse-Technologie (Google Analytics, siehe Abschnitt 7)
          holen wir vor deren Einsatz deine Einwilligung ein. Du kannst deine Auswahl jederzeit
          über den Link „Cookie-Einstellungen“ im Footer ändern oder widerrufen.
        </p>
      </>
    ),
  },
  {
    id: "eingebundene-inhalte",
    title: "9. Eingebundene Inhalte und externe Dienste",
    content: (
      <p>
        Über Google Analytics (siehe Abschnitt 7) hinaus bindet diese Website aktuell keine
        externen Dienste, Inhalte oder Widgets Dritter ein — kein Kartendienst, kein
        Video-Embed, kein externes Bestell- oder Galeriesystem. Die verwendeten Schriftarten
        werden beim Bau der Website selbst eingebettet und beim Seitenaufruf nicht von einem
        externen Schriftdienst nachgeladen. Sollte sich das ändern, wird dieser Abschnitt
        entsprechend aktualisiert.
      </p>
    ),
  },
  {
    id: "speicherdauer",
    title: "10. Speicherdauer",
    content: (
      <p>
        Wir speichern personenbezogene Daten nur so lange, wie dies für den jeweiligen Zweck
        erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen. Wie lange einzelne
        Daten gespeichert werden, hängt deshalb vom jeweiligen Verarbeitungsvorgang ab. Anfragen
        und geschäftliche Kommunikation können darüber hinaus aufbewahrungspflichtigen
        gesetzlichen Vorgaben unterliegen.
      </p>
    ),
  },
  {
    id: "rechte",
    title: "11. Deine Rechte",
    content: (
      <>
        <p>Du hast nach Maßgabe der gesetzlichen Voraussetzungen insbesondere folgende Rechte:</p>
        <ul className="mt-4 list-disc space-y-1.5 pl-5">
          <li>Auskunft über die zu deiner Person gespeicherten Daten.</li>
          <li>Berichtigung unrichtiger oder unvollständiger Daten.</li>
          <li>Löschung deiner personenbezogenen Daten.</li>
          <li>Einschränkung der Verarbeitung.</li>
          <li>Datenübertragbarkeit, soweit die gesetzlichen Voraussetzungen erfüllt sind.</li>
          <li>
            Widerspruch gegen bestimmte Verarbeitungen, insbesondere soweit diese auf Art. 6 Abs.
            1 lit. e oder f DSGVO beruhen.
          </li>
        </ul>
        <p className="mt-4">
          Eine erteilte Einwilligung kannst du jederzeit mit Wirkung für die Zukunft widerrufen.
        </p>
      </>
    ),
  },
  {
    id: "beschwerderecht",
    title: "12. Beschwerderecht bei einer Aufsichtsbehörde",
    content: (
      <>
        <p>
          Du hast das Recht, dich bei einer Datenschutzaufsichtsbehörde über die Verarbeitung
          deiner personenbezogenen Daten zu beschweren. Zuständig ist insbesondere die für
          unseren Sitz zuständige Datenschutzaufsichtsbehörde. Für Schleswig-Holstein ist dies:
        </p>
        <p className="mt-4">
          Unabhängiges Landeszentrum für Datenschutz Schleswig-Holstein (ULD)
          <br />
          Holstenstraße 98
          <br />
          24103 Kiel
          <br />
          Deutschland
        </p>
        <p className="mt-4">
          Weitere Informationen und Kontaktdaten findest du auf der Website des ULD.
        </p>
      </>
    ),
  },
  {
    id: "ssl-tls",
    title: "13. SSL-/TLS-Verschlüsselung",
    content: (
      <p>
        Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
        Inhalte eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennst du unter
        anderem daran, dass die Adresszeile des Browsers mit „https://“ beginnt und ein
        Schloss-Symbol angezeigt wird.
      </p>
    ),
  },
  {
    id: "aktualitaet",
    title: "14. Aktualität dieser Datenschutzerklärung",
    content: (
      <p>
        Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich technische,
        rechtliche oder organisatorische Änderungen ergeben. Es gilt jeweils die auf dieser
        Website veröffentlichte aktuelle Fassung. Stand: 27. August 2026.
      </p>
    ),
  },
];

export default function DatenschutzPage() {
  return (
    <>
      <LegalPage kicker="Rechtliches" title="Datenschutzerklärung" sections={sections} />
      <div className="bg-off-white px-6 pb-24 lg:pb-32">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/impressum"
            className="text-[14px] text-charcoal/70 underline decoration-charcoal/25 underline-offset-4 transition-colors hover:text-deep-forest hover:decoration-deep-forest"
          >
            Zum Impressum
          </Link>
        </div>
      </div>
    </>
  );
}
