import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "Branding",
  description:
    "Markenentwicklung für kleine und mittelständische Unternehmen in Kiel und Schleswig-Holstein.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <PlaceholderPage
      kicker="Unternehmen · Branding"
      title="Aus vorhandenem Potenzial eine Marke entwickeln."
      description="SEO-Landingpage laut IA v2.0. Inhalt folgt in der nächsten Bauphase."
      reference="IA v2.0 · Cluster-Landingpage"
    />
  );
}
