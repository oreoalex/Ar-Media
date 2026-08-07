import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "Shooting anfragen",
  description:
    "Fotoshooting bei AR Media anfragen.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <PlaceholderPage
      kicker="Kontakt · Fotografie"
      title="Erzähl uns von deinem Anlass."
      description="Conversion-Seite laut IA v2.0. Inhalt folgt in der nächsten Bauphase."
      reference="IA v2.0 · Conversion-Seite"
    />
  );
}
