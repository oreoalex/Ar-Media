import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "Content Creation",
  description:
    "Laufende Content-Produktion für Unternehmen in Kiel und Schleswig-Holstein.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <PlaceholderPage
      kicker="Unternehmen · Content Creation"
      title="Content, der zur Marke passt statt sie zu verwässern."
      description="SEO-Landingpage laut IA v2.0. Inhalt folgt in der nächsten Bauphase."
      reference="IA v2.0 · Cluster-Landingpage"
    />
  );
}
