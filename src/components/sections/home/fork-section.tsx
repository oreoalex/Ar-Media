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
export function ForkSection() {
  return (
    <section aria-label="Wähle deinen Bereich" className="bg-off-white">
      <div className="grid lg:grid-cols-3">
        {paths.map((path, i) => (
          <Reveal key={path.href} delay={i * 0.08} className="h-full">
            <Link
              href={path.href}
              className="group relative flex h-[70vh] min-h-[420px] flex-col justify-end overflow-hidden lg:h-[85vh]"
            >
              <Image
                src={path.image}
                alt={path.imageAlt}
                fill
                sizes="(min-width: 1024px) 34vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent transition-opacity group-hover:from-charcoal/90" />

              <div className="relative p-8 lg:p-10">
                <p className="text-[11px] font-medium tracking-[0.16em] text-off-white/70 uppercase">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 font-sans text-2xl font-medium text-off-white lg:text-3xl">
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
