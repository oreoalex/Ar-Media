import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";

type ForkPath = {
  href: string;
  label: string;
  line: string;
  image: string;
  imageAlt: string;
};

const paths: ForkPath[] = [
  {
    href: "/unternehmen",
    label: "Unternehmen",
    line: "Ich zeige dir, wie gut deine Marke aussehen kann.",
    image: "/images/home/gabelung-unternehmen.jpg",
    imageAlt: "Fahrzeugbeschriftung der Marke „Saat für den Norden“ mit Ähren-Signet",
  },
  {
    href: "/fotografie",
    label: "Fotografie",
    line: "Ich zeige dir, wie du wirklich aussiehst.",
    image: "/images/home/gabelung-fotografie.jpg",
    imageAlt: "Jugendlicher lacht beim Spielen mit Wasserspielzeug im Freien",
  },
  {
    href: "/kita-schule",
    label: "Kita & Schule",
    line: "Ich zeige euch, wie schön dieser Moment war.",
    image: "/images/home/gabelung-kita-schule.jpg",
    imageAlt: "Kleines Mädchen kickt lachend einen Ball im Gegenlicht",
  },
];

/**
 * S04 · Die Gabelung — Wireframe-Blueprint Kapitel 5.
 * Zentrale Weiche der Seite. Drei gleich große, identisch behandelte Wege —
 * kein Bereich wirkt größer oder wichtiger (Gleichwertigkeits-Guardrail).
 * Reihenfolge = Reihenfolge der Hauptnavigation, kein Ranking.
 *
 * imageAlt beschreibt bewusst den tatsächlichen Bildinhalt, nicht die
 * Kartenüberschrift daneben (die stünde sonst redundant doppelt für
 * Screenreader-Nutzer:innen) — SXO-Audit bemängelte leeren alt-Text auf
 * allen drei Bildern, hier ist er aber kein reines Dekor-Bild, sondern
 * zeigt echten Inhalt (u. a. das reale "Saat für den Norden"-Case-Study-Foto).
 */
/*
 * bg-sand/12 statt bg-off-white (Audit-Fund P1.4, Editorial-Feel): vier
 * Startseiten-Sections in Folge (Haltung, Fork, Case Studies, Founder)
 * liefen zuvor auf identischem bg-off-white — kein tonaler Wendepunkt
 * zwischen "warum wir das tun" und "was wir anbieten". Deep Forest bleibt
 * bewusst der Invitation-Section vorbehalten (siehe dortiger Kommentar,
 * der Klimax soll einmalig bleiben). Sand als sehr sparsamer Wash (12%)
 * markiert stattdessen leise den Übergang von Haltung zu Angebot, ohne
 * selbst einen zweiten "großen Farbmoment" zu behaupten. 12% Deckkraft war
 * beim Live-Test praktisch nicht wahrnehmbar (verifiziert per Screenshot),
 * 25% ist die niedrigste Stufe, die als echter, aber weiterhin ruhiger
 * Wendepunkt sichtbar wird.
 *
 * Design-Review 2026-09-05: die frühere "01/02/03"-Nummerierung ist entfernt
 * — Unternehmen/Fotografie/Kita & Schule sind keine Schritte einer Sequenz,
 * sondern gleichrangige, parallele Bereiche (Gleichwertigkeits-Guardrail,
 * s.o.), eine Nummerierung würde eine Reihenfolge behaupten, die es nicht
 * gibt. Stattdessen eine dünne Trennlinie zwischen den drei Wegen (macht
 * das Raster explizit sichtbar statt es nur über Weißraum zu behaupten)
 * und vier "Sucher"-Eckmarken je Karte, die erst bei Hover/Fokus erscheinen
 * — ein photographischer Bezug zum Kerngeschäft statt eines generischen
 * Zierrahmens.
 */
export function ForkSection() {
  return (
    <section aria-label="Wähle deinen Bereich" className="bg-sand/25">
      <div className="grid lg:grid-cols-3 lg:divide-x lg:divide-off-white/20">
        {paths.map((path, i) => (
          <Reveal key={path.href} delay={i * 0.08} className="h-full">
            <Link
              href={path.href}
              className="brand-viewfinder group relative flex h-[70vh] min-h-[420px] flex-col justify-end overflow-hidden text-off-white lg:h-[85vh]"
            >
              <Image
                src={path.image}
                alt={path.imageAlt}
                fill
                sizes="(min-width: 1024px) 34vw, 100vw"
                className="object-cover grayscale-[65%] saturate-[0.5] transition-[filter,transform] duration-700 ease-out group-hover:scale-[1.04] group-hover:grayscale-0 group-hover:saturate-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent transition-opacity group-hover:from-charcoal/90" />

              <div className="relative p-8 lg:p-10">
                {/* "Laut & mutig"-Typografie (siehe philosophy-section.tsx/
                    proof-section.tsx): kurze 1-2-Wort-Phrase, deshalb fett +
                    Versalien statt des vorherigen mittelschweren Fließtext-
                    Gewichts. Feedback-Fix: eine feste lg:text-5xl (48px)
                    lief bei "Unternehmen" (11 Zeichen, längstes Label) in
                    der schmalen Drittel-Spalte gegen den überflüssigen
                    overflow-hidden-Rand und wurde abgeschnitten, während
                    die kürzeren Labels dieselbe Klasse problemlos trugen —
                    sichtbar "unterschiedliche" Größe, obwohl der Code
                    überall identisch war. Jetzt fluid über clamp() (skaliert
                    mit der tatsächlichen Spaltenbreite statt an einem festen
                    Breakpoint zu kippen) plus hyphens-auto als Sicherheitsnetz:
                    bricht im Zweifel sauber um, statt zu clippen — bei allen
                    drei Labels weiterhin exakt dieselbe Regel/Größe. */}
                <h2 className="[hyphens:auto] font-serif text-3xl font-bold tracking-tight text-off-white uppercase transition-colors duration-500 group-hover:text-sand lg:text-[clamp(1.75rem,3.2vw,3.25rem)]">
                  {path.label}
                </h2>
                <p className="mt-3 max-w-[26ch] text-[15px] text-off-white/85">{path.line}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
