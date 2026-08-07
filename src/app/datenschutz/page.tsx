import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung von AR Media.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <PlaceholderPage
      kicker="Rechtliches"
      title="Datenschutzerklärung"
      description="Sachlicher Inhalt, Ausnahme von der Du-Tonalität (Entscheidung 6). Rechtlich zu prüfen und final zu befüllen."
      reference="IA v2.0 · Footer-Ebene"
    />
  );
}
