import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "Projekt besprechen",
  description:
    "Marketingprojekt mit AR Media besprechen.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <PlaceholderPage
      kicker="Kontakt · Unternehmen"
      title="Erzähl uns von deinem Unternehmen."
      description="Conversion-Seite laut IA v2.0. Inhalt folgt in der nächsten Bauphase."
      reference="IA v2.0 · Conversion-Seite"
    />
  );
}
