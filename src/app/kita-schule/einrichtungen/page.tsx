import type { Metadata } from "next";
import { EinrichtungenContent } from "@/components/sections/kita-schule/einrichtungen-content";

export const metadata: Metadata = {
  title: "Für Einrichtungen",
  description:
    "Kitafotografie und Schulfotografie für Einrichtungen in Kiel und Schleswig-Holstein, ohne Organisationsaufwand für Kitaleitung und Träger.",
  keywords: ["Kitafotograf für Einrichtungen", "Schulfotografie Organisation Kiel"],
  openGraph: {
    images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630, alt: "AR Media – Signet und Wortmarke" }],
    title: "Für Einrichtungen · AR Media",
    description:
      "Kitafotografie und Schulfotografie für Einrichtungen in Kiel und Schleswig-Holstein, ohne Organisationsaufwand für Kitaleitung und Träger.",
  },
  twitter: {
    images: [{ url: "/twitter-image.jpg", width: 1200, height: 630, alt: "AR Media – Signet und Wortmarke" }],
    title: "Für Einrichtungen · AR Media",
    description:
      "Kitafotografie und Schulfotografie für Einrichtungen in Kiel und Schleswig-Holstein, ohne Organisationsaufwand für Kitaleitung und Träger.",
  },
  alternates: { canonical: "/kita-schule/einrichtungen" },
};

export default function Page() {
  return <EinrichtungenContent />;
}
