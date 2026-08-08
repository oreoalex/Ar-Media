import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/shared/legal-page";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von AR Media.",
  robots: { index: false, follow: true },
};

/**
 * Layout ist fertig (identisches Gerüst wie /impressum, ToC-fähig sobald
 * genug echte Abschnitte vorliegen), der Rechtstext selbst aber bewusst
 * NICHT erfunden: Auftrag verbietet ausdrücklich, juristische Inhalte
 * selbst zu verfassen. Bleibt robots noindex, bis der echte Text vom
 * Rechtsgenerator/Datenschutzdienst eingesetzt ist, dieselbe Regel wie im
 * ursprünglichen PlaceholderPage-Zustand.
 */
const sections: LegalSection[] = [
  {
    id: "hinweis",
    title: "Inhalt folgt",
    content: (
      <p>
        Diese Seite wartet auf den finalen Text der Datenschutzerklärung vom beauftragten
        Rechtsgenerator bzw. Datenschutzdienst. Das Layout ist bereits fertig, inklusive
        Inhaltsverzeichnis sobald mehrere Abschnitte vorliegen (z. B. Verantwortlicher,
        Hosting, Kontaktformular, Cookies, Rechte der Betroffenen), damit der Text direkt
        eingesetzt werden kann, ohne dass an der Gestaltung etwas geändert werden muss.
      </p>
    ),
  },
];

export default function DatenschutzPage() {
  return <LegalPage kicker="Rechtliches" title="Datenschutzerklärung" sections={sections} />;
}
