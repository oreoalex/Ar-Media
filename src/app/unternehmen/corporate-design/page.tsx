import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "Corporate Design",
  description:
    "Corporate Design und visuelle Systeme für Unternehmen in Kiel und Schleswig-Holstein.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <PlaceholderPage
      kicker="Unternehmen · Corporate Design"
      title="Ein System statt nur ein Logo."
      description="SEO-Landingpage laut IA v2.0. Inhalt folgt in der nächsten Bauphase."
      reference="IA v2.0 · Cluster-Landingpage"
    />
  );
}
