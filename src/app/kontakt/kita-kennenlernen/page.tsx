import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "Kita kennenlernen",
  description:
    "AR Media als Kita- oder Schulfotograf kennenlernen.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <PlaceholderPage
      kicker="Kontakt · Kita & Schule"
      title="Erzählt uns von eurer Einrichtung."
      description="Conversion-Seite laut IA v2.0. Inhalt folgt in der nächsten Bauphase."
      reference="IA v2.0 · Conversion-Seite"
    />
  );
}
