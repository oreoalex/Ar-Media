import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "Social Media",
  description:
    "Social-Media-Strategie und -Betreuung für Unternehmen in Kiel und Schleswig-Holstein.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <PlaceholderPage
      kicker="Unternehmen · Social Media"
      title="Von planlosem Posten zu konsistenter Präsenz."
      description="Performance-fähige Landingpage laut IA v2.0 (Problem → Potenzial → Lösung). Inhalt folgt in der nächsten Bauphase."
      reference="IA v2.0 · Performance-Landingpage"
    />
  );
}
