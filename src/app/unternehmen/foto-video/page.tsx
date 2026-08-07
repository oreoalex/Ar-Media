import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "Foto & Video für Unternehmen",
  description:
    "Unternehmensfotografie und Businessvideo in Kiel und Schleswig-Holstein.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <PlaceholderPage
      kicker="Unternehmen · Foto & Video"
      title="Bildmaterial mit derselben Handschrift wie die private Fotografie."
      description="SEO-Landingpage laut IA v2.0 — Brücke zu Fotografie/Business-Portraits."
      reference="IA v2.0 · Brücken-Landingpage"
    />
  );
}
