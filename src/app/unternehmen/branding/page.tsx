import type { Metadata } from "next";
import { UnternehmenLeistungPage } from "@/components/shared/unternehmen-leistung-page";

export const metadata: Metadata = {
  title: "Branding Kiel",
  description:
    "Markenentwicklung für kleine und mittelständische Unternehmen in Kiel und Schleswig-Holstein: Positionierung und Markenkern, bevor ein einziges Bild entsteht.",
  keywords: ["Branding Kiel", "Markenentwicklung Schleswig-Holstein", "Markenpositionierung"],
  alternates: { canonical: "/unternehmen/branding" },
};

export default function Page() {
  return (
    <UnternehmenLeistungPage
      slug="/unternehmen/branding"
      kicker="Unternehmen · Branding"
      title="Aus vorhandenem Potenzial eine Marke entwickeln."
      heroText="Eine Marke ist keine Behauptung. Sie ist die klarste, ehrlichste Version dessen, was ein Unternehmen bereits ist, nur noch niemand in Worte gefasst hat."
      problemTitle="Ein Unternehmen mit Substanz, aber ohne Position."
      problemText="Die Arbeit ist gut, die Kunden sind zufrieden, aber wenn man fragt, wofür das Unternehmen eigentlich steht, antwortet jeder im Team etwas anderes. Marketingmaterial entsteht trotzdem, wirkt aber austauschbar, weil ihm ein gemeinsamer Anker fehlt."
      denkansatzTitle="Unser Denkansatz"
      denkansatzText="Wir beginnen nie mit der Frage, wie eine Marke wirken soll. Wir beginnen mit der Frage, was an einem Unternehmen bereits wahr ist, aber noch niemand ausgesprochen hat, der gemeinsame Nenner zwischen dem, was es tut, und dem, was es besonders macht. Erst wenn dieser Nenner gefunden ist, wird daraus eine Position, ein Name oder eine Geschichte."
      prozessSchritte={[
        { title: "Beobachten", text: "Wir schauen uns dein Unternehmen an, so wie es heute ist, nicht wie ein Formular es abfragen würde." },
        { title: "Verstehen", text: "Was macht dich aus, das dein Umfeld längst spürt, aber noch niemand ausgesprochen hat?" },
        { title: "Gestalten", text: "Daraus wird eine Position und eine Geschichte, die stille Grundlage jeder weiteren Entscheidung." },
        { title: "Sichtbar machen", text: "Diese Position wird zur Basis für Corporate Design, Content und jeden weiteren Kanal." },
      ]}
      caseStudies={[
        { name: "Saat für den Norden", text: "Eine bestehende Symbolik neu gelesen, statt ein neues Zeichen zu erfinden.", href: "/case-studies#saat" },
        {
          name: "AR Media",
          text: "Auch die eigene Marke entstand aus genau diesem Denkansatz: aus einer Ich-Marke, einem Namensmonogramm und einer Ein-Personen-Website, wurde ein eigenständiges Zeichen mit klarer Struktur.",
          href: "/case-studies#ar-media",
        },
      ]}
      leistungenTitle="Was zu einem Branding-Projekt gehört"
      leistungen={[
        { title: "Positionierung", text: "Ein Satz, der erklärt, wofür dein Unternehmen steht, den du selbst, dein Team und am Ende auch deine Kunden wiedergeben können." },
        { title: "Markenkern", text: "Der gemeinsame Nenner zwischen dem, was dein Unternehmen tut, und dem, was es besonders macht, die Grundlage für jede spätere Design- und Kommunikationsentscheidung." },
        { title: "Sprache und Tonalität", text: "Wie deine Marke klingt, nicht nur, wie sie aussieht, damit Texte, Posts und Gespräche sich wie derselbe Absender anfühlen." },
        { title: "Übergabe an Corporate Design", text: "Die Grundlage, auf der Signet, Farbwelt und Typografie erst wirklich Sinn ergeben." },
      ]}
      faqs={[
        { q: "Brauche ich danach automatisch ein neues Logo?", a: "Nein. Branding ist die Grundlage davor. Ob daraus ein neues Signet, eine Anpassung oder vorerst nichts wird, entscheidet sich danach, das ist Corporate Design, ein eigener, oft folgender Schritt." },
        { q: "Ich habe schon ein Logo, brauche ich trotzdem Branding?", a: "Ein Logo ist kein Branding. Viele Unternehmen haben ein Zeichen, aber keine Position dahinter, genau da setzen wir an, unabhängig davon, wie das bestehende Design aussieht." },
        { q: "Wie lange dauert ein Branding-Projekt?", a: "Das hängt vom Unternehmen ab, nicht von einem Paket. Deshalb beginnt jedes Projekt mit einem Gespräch, in dem wir das gemeinsam einschätzen." },
        { q: "Was, wenn im Team unterschiedliche Vorstellungen bestehen?", a: "Das ist eher die Regel als die Ausnahme, und einer der Gründe, warum Branding ein eigener Schritt ist statt einer Nebenbei-Entscheidung." },
        { q: "Ich habe noch kein Unternehmen, nur eine Idee, ist das trotzdem etwas für mich?", a: "Eher unser Brandkit für Neugründungen, ein kompakteres Angebot genau für diesen Moment. Branding setzt meist bei einem bereits laufenden Unternehmen an, das schon Substanz hat, aber noch keine Position." },
      ]}
      ctaText="Bevor wir gestalten, wollen wir verstehen, was dein Unternehmen bereits ausmacht."
    />
  );
}
