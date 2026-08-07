import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Case Studies von AR Media: Marketing- und Fotografie-Projekte in Kiel und Schleswig-Holstein.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <PlaceholderPage
      kicker="Case Studies"
      title="Warum es gemacht wurde, wie es gelöst wurde, was es verändert hat."
      description="Zentraler, bereichsübergreifender Proof-Hub laut IA v2.0. Inhalt folgt in der nächsten Bauphase."
      reference="IA v2.0 · Proof-Hub"
    />
  );
}
