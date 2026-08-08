import type { Metadata } from "next";
import { UnternehmenLeistungPage } from "@/components/shared/unternehmen-leistung-page";

export const metadata: Metadata = {
  title: "Corporate Design",
  description:
    "Corporate Design und visuelle Systeme für Unternehmen in Kiel und Schleswig-Holstein: Signet, Farbwelt, Typografie und Website als ein durchgängiges System.",
  keywords: ["Corporate Design Kiel", "Logo Redesign Schleswig-Holstein", "Visuelles System Unternehmen"],
  alternates: { canonical: "/unternehmen/corporate-design" },
};

export default function Page() {
  return (
    <UnternehmenLeistungPage
      kicker="Unternehmen · Corporate Design"
      title="Ein System statt nur ein Logo."
      heroText="Ein Signet allein macht eine Marke nicht wiedererkennbar. Das gelingt erst durch das System dahinter, konsequent angewendet, auf jedem Kanal."
      problemTitle="Ein Logo, das überall anders aussieht."
      problemText="Auf der Website ein anderes Grün als auf der Visitenkarte. Der Fahrzeugaufkleber sieht aus wie von einer anderen Firma als der Social-Media-Auftritt. Niemand im Team weiß genau, welche Schrift eigentlich die richtige ist. Am Ende wirkt das zufällig, obwohl das Zeichen selbst oft völlig in Ordnung ist."
      denkansatzTitle="Unser Denkansatz"
      denkansatzText="Ein bestehendes Zeichen ist selten das eigentliche Problem. Das Problem ist meistens, dass nie ein System darum gebaut wurde, das genau festlegt, welche Farben, welche Schrift, welche Anwendung dazugehören. Deshalb ersetzen wir ein bestehendes Zeichen nur, wenn es wirklich nötig ist, meistens genügt es, es in ein zeitgemäßes, konsistentes System zu überführen."
      prozessSchritte={[
        { title: "Beobachten", text: "Wir sehen uns an, was von deinem bisherigen Auftritt schon funktioniert, und was nur zufällig so aussieht, wie es aussieht." },
        { title: "Verstehen", text: "Wo genau bricht die Konsistenz, zwischen Website, Print, Fahrzeug oder Social Media?" },
        { title: "Gestalten", text: "Signet, Farbwelt, Typografie und Bildsprache, als ein System, nicht als Einzelteile." },
        { title: "Sichtbar machen", text: "Anwendung auf jeden Kanal, der für dein Unternehmen zählt, von der Visitenkarte bis zur Website." },
      ]}
      caseStudies={[
        { name: "Saat für den Norden", text: "Neues Signet, eine Farbwelt über Fahrzeug, Beschilderung und Print hinweg.", href: "/case-studies#saat" },
        { name: "Zeltlager Adlerhorst", text: "Ein rund 50 Jahre altes Zeichen in ein zeitgemäßes System überführt, ohne es zu ersetzen.", href: "/case-studies#adlerhorst" },
      ]}
      leistungenTitle="Was zu einem Corporate Design gehört"
      leistungen={[
        { title: "Signet und Wortmarke", text: "Ein Zeichen, das in jeder Größe funktioniert, vom Fahrzeug bis zum Social-Media-Profilbild." },
        { title: "Farbwelt und Typografie", text: "Feste Regeln statt Zufall, damit jede neue Anwendung automatisch zusammenpasst." },
        { title: "Bildsprache", text: "Wie Fotos und Grafiken aussehen, damit auch Bildmaterial sofort erkennbar zu deiner Marke gehört." },
        { title: "Anwendung, inklusive Website", text: "Von Visitenkarte über Beschilderung bis zur Website, dasselbe System durchgängig umgesetzt." },
      ]}
      faqs={[
        { q: "Muss mein bestehendes Logo weg?", a: "Selten. Meistens geht es darum, ein vertrautes Zeichen in ein konsistentes System zu überführen, nicht darum, bei null anzufangen, wie beim Zeltlager Adlerhorst." },
        { q: "Bekomme ich auch eine neue Website?", a: "Website-Umsetzung kann Teil eines Corporate-Design-Projekts sein, wenn sie gebraucht wird. Wie viel davon sinnvoll ist, klären wir im Gespräch." },
        { q: "Was ist der Unterschied zu Branding?", a: "Branding legt fest, wofür deine Marke steht. Corporate Design macht das sichtbar, im Zeichen, in der Farbe, in jeder Anwendung." },
        { q: "Wie viele Anwendungen sind im Projekt enthalten?", a: "Kommt auf dein Unternehmen an. Wir legen das gemeinsam fest, statt ein festes Paket vorzugeben." },
      ]}
      ctaText="Ein System, das auf jede Anwendung dieselbe Antwort gibt, das ist der Unterschied."
    />
  );
}
