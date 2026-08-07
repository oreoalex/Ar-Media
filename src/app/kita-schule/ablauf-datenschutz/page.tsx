import type { Metadata } from "next";
import { AblaufDatenschutzContent } from "@/components/sections/kita-schule/ablauf-datenschutz-content";

/**
 * Bewusst weiterhin robots noindex: der Inhalt ist inhaltlich fertig und
 * bewusst ohne konkrete juristische Zusicherungen formuliert, ersetzt aber
 * keine anwaltliche Prüfung der tatsächlichen Formulierungen, bevor die
 * Seite öffentlich auffindbar ist. Die Seite selbst bleibt verlinkt und
 * erreichbar, nur nicht für Suchmaschinen gelistet.
 */
export const metadata: Metadata = {
  title: "Ablauf & Datenschutz",
  description:
    "Wie AR Media mit Fotos aus Kita- und Schulterminen umgeht: Zugriff, Sichtbarkeit und Löschung.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/kita-schule/ablauf-datenschutz" },
};

export default function Page() {
  return <AblaufDatenschutzContent />;
}
