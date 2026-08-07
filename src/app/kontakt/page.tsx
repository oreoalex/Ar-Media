import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt zu AR Media — Projekt besprechen, Shooting anfragen oder Kita kennenlernen.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <PlaceholderPage
      kicker="Kontakt"
      title="Lass uns herausfinden, was der richtige nächste Schritt ist."
      description="Segmentierte Weiche laut Entscheidung 8 — drei eigenständige Einstiege statt eines Einheitsformulars. Inhalt folgt in der nächsten Bauphase."
      reference="IA v2.0 · Kontakt-Hub"
    />
  );
}
