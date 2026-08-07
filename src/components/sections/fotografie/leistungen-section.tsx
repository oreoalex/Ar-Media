import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";

/**
 * Leistungen. Identisches System wie bei Unternehmen: editoriale Liste
 * statt Karten/Icons, jede Zeile eine emotionale Einleitung statt einer
 * Leistungsbeschreibung. Fünf gleichwertige Zeilen. Lokale SEO-Begriffe
 * (Portraitfotograf Kiel, Paarshooting Kiel, Familienshooting, Business
 * Portrait Kiel) organisch in den Zeilen verankert.
 *
 * Hochzeit ist bewusst gleichwertig gelistet, aber ohne eigene AR-Media-
 * Route: das Shooting selbst übernimmt Paul Schulz (3punktmedia.de), AR
 * Media vermittelt nur. Die Zeile verlinkt deshalb direkt extern statt auf
 * eine eigene Unterseite (external: true → anderes Icon, neuer Tab).
 */
const leistungen = [
  {
    label: "01",
    name: "Portrait",
    outcome: "Für Menschen, die sich selbst lange nicht mehr wirklich gesehen haben. Portraitfotografie in Kiel, ganz ohne die übliche Anspannung vor der Kamera.",
    href: "/fotografie/portrait",
  },
  {
    label: "02",
    name: "Paar",
    outcome: "Für zwei Menschen, die zusammen entspannter sind als einzeln. Ein Paarshooting in Kiel, das sich wie ein gemeinsamer Nachmittag anfühlt, nicht wie ein Termin.",
    href: "/fotografie/paar",
  },
  {
    label: "03",
    name: "Lifestyle",
    outcome: "Für echte Momente statt gestellter Szenen. Familien, Zuhause, der ganz normale Tag, festgehalten, ohne ihn zu verändern.",
    href: "/fotografie/lifestyle",
  },
  {
    label: "04",
    name: "Business-Portraits",
    outcome: "Für Menschen, die im Beruf mehr sind als ihr Lebenslaufbild. Ein Business-Portrait in Kiel, das nach der Person aussieht, nicht nach der Stockfoto-Version davon.",
    href: "/fotografie/business-portraits",
  },
  {
    label: "05",
    name: "Hochzeit",
    outcome: "Für zwei Menschen an ihrem wichtigsten Tag. Hochzeitsfotografie in Kiel und Schleswig-Holstein, in Kooperation mit Paul Schulz von 3punktmedia, den wir dafür empfehlen.",
    href: "https://3punktmedia.de",
    external: true,
  },
];

export function LeistungenSection() {
  return (
    <section aria-label="Fünf Anlässe, eine Haltung" className="bg-off-white px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.14em] text-charcoal/45 uppercase">
            Leistungen
          </p>
          <span aria-hidden className="mt-4 block h-px w-8 bg-charcoal/20" />
          <h2 className="mt-6 max-w-xl text-[22px] leading-relaxed text-charcoal/80 lg:text-[24px]">
            Fünf Anlässe. Eine Haltung.
          </h2>
        </Reveal>

        <ul className="mt-14 divide-y divide-charcoal/10 border-t border-charcoal/10">
          {leistungen.map((item, i) => {
            const row = (
              <>
                <span className="flex items-baseline gap-5">
                  <span className="text-[13px] text-charcoal/35">{item.label}</span>
                  <span>
                    <span className="block text-[17px] font-medium text-charcoal transition-colors group-hover:text-deep-forest lg:text-[19px]">
                      {item.name}
                    </span>
                    <span className="mt-1 block max-w-md text-[14px] leading-relaxed text-charcoal/55 lg:text-[15px]">
                      {item.outcome}
                    </span>
                  </span>
                </span>
                {item.external ? (
                  <ArrowUpRight
                    aria-hidden
                    className="size-4 shrink-0 text-charcoal/30 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-deep-forest"
                  />
                ) : (
                  <ArrowRight
                    aria-hidden
                    className="size-4 shrink-0 text-charcoal/30 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:text-deep-forest"
                  />
                )}
              </>
            );

            return (
              <Reveal key={item.href} delay={i * 0.04}>
                <li>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-6 py-6"
                    >
                      {row}
                    </a>
                  ) : (
                    <Link href={item.href} className="group flex items-center justify-between gap-6 py-6">
                      {row}
                    </Link>
                  )}
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
