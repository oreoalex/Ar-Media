import type { Metadata } from "next";
import { UnternehmenLeistungPage } from "@/components/shared/unternehmen-leistung-page";

export const metadata: Metadata = {
  title: "Foto & Video für Unternehmen",
  description:
    "Unternehmensfotografie und Businessvideo in Kiel und Schleswig-Holstein: echte Menschen und echte Situationen statt Stockfotos.",
  keywords: ["Unternehmensfotografie Kiel", "Business Video Schleswig-Holstein", "Teamfotos Firma"],
  openGraph: {
    title: "Foto & Video für Unternehmen · AR Media",
    description:
      "Unternehmensfotografie und Businessvideo in Kiel und Schleswig-Holstein: echte Menschen und echte Situationen statt Stockfotos.",
  },
  twitter: {
    title: "Foto & Video für Unternehmen · AR Media",
    description:
      "Unternehmensfotografie und Businessvideo in Kiel und Schleswig-Holstein: echte Menschen und echte Situationen statt Stockfotos.",
  },
  alternates: { canonical: "/unternehmen/foto-video" },
};

export default function Page() {
  return (
    <UnternehmenLeistungPage
      kicker="Unternehmen · Foto & Video"
      title="Bildmaterial mit derselben Handschrift wie die private Fotografie."
      heroText="Menschen vertrauen Gesichtern, nicht Stockfotos."
      problemTitle="Bilder, die niemand wiedererkennt."
      problemText="Stockfotos oder veraltetes Bildmaterial, weil eigene Fotografie teuer oder aufwendig wirkt. Das Ergebnis: eine Website, die aussieht wie tausend andere, und kein einziges Gesicht, das potenzielle Kunden tatsächlich wiedererkennen würden."
      denkansatzTitle="Unser Denkansatz"
      denkansatzText="Die Fotografie für Unternehmen folgt bei uns derselben Haltung wie die private Fotografie: keine gestellten Posen, keine künstliche Inszenierung, sondern Menschen und Situationen, wie sie tatsächlich sind. Genau das schafft Vertrauen, das ein Stockfoto nie schaffen kann."
      prozessSchritte={[
        { title: "Beobachten", text: "Wo entsteht in deinem Unternehmen bereits das, was sich zu zeigen lohnt, im Team, im Alltag, im Produkt?" },
        { title: "Verstehen", text: "Wofür wird das Material gebraucht, Website, Social Media, Print, oder alles zusammen?" },
        { title: "Gestalten", text: "Foto- oder Videotermin, der sich an eurem Alltag orientiert, nicht an einem starren Ablaufplan." },
        { title: "Sichtbar machen", text: "Eine bearbeitete Auswahl, einsetzbar über alle Kanäle hinweg." },
      ]}
      caseStudies={[
        { name: "Zeltlager Adlerhorst", text: "Von Luftaufnahmen des Geländes bis zu laufender Eventfotografie.", href: "/case-studies#adlerhorst" },
        { name: "Royal Charming", text: "Echte Aufnahmen der Zuchthündin und der Welpen statt Symbolbildern.", href: "/case-studies#royal-charming" },
        { name: "Business-Portraits", text: "Für einzelne Mitarbeitende statt eines ganzen Teams: Business-Portraits auf unserer Fotografie-Seite.", href: "/fotografie/business-portraits" },
      ]}
      leistungenTitle="Was zu Foto & Video gehört"
      leistungen={[
        { title: "Teamfotos", text: "Echte Gesichter für Website, Karriereseite und Social Media." },
        { title: "Produkt- und Eventfotografie", text: "Dokumentation, die tatsächlich zeigt, was bei euch passiert." },
        { title: "Unternehmensvideo", text: "Bewegtbild, das erklärt oder zeigt, wofür Text allein nicht reicht." },
        { title: "Luftaufnahmen", text: "Für Gelände, Veranstaltungsorte oder Projekte, die sich aus der Vogelperspektive besser erzählen lassen." },
      ]}
      faqs={[
        { q: "Was, wenn wir noch kein Bildkonzept haben?", a: "Das entwickeln wir gemeinsam, meistens im Zusammenspiel mit Corporate Design, damit das Bildmaterial zur Marke passt." },
        { q: "Wie lange dauert ein Fototermin?", a: "Kommt auf den Umfang an, wir legen das im Vorgespräch fest, inklusive eines konkreten Liefertermins." },
        { q: "Auch Video?", a: "Ja, von kurzen Social-Media-Clips bis zu längeren Unternehmensvideos." },
        { q: "Braucht ihr dafür einen Drohnenschein?", a: "Ja, für Luftaufnahmen gelten feste rechtliche Vorgaben, die wir einhalten." },
      ]}
      ctaText="Ein Gesicht, das man wiedererkennt, wirkt mehr als jedes perfekte Stockfoto."
    />
  );
}
