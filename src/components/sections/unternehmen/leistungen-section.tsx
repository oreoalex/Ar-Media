import { Fragment } from "react";
import Link from "next/link";
import { Reveal } from "@/components/shared/reveal";
import { BrandArrow } from "@/components/shared/brand-arrow";
import { BrandTick } from "@/components/shared/brand-tick";
import { GhostNumeral } from "@/components/shared/ghost-numeral";

/**
 * Unsere Leistungen — bewusst kein Leistungskatalog. Jede Zeile zeigt das
 * Problem, das sie löst, nicht was sie enthält (siehe Vorgabe). Editorial
 * Liste statt Feature-Cards: nummeriert, durch dünne Linien getrennt, Ziel
 * ist jeweils die reale Unterseite aus der Hauptnavigation (interne
 * Verlinkung). Direkt darunter ein leiser Zwischen-CTA — Funnel-Logik:
 * wer hier schon überzeugt ist, muss nicht bis zum Seitenende lesen.
 *
 * UX-Audit-Fund P1.5: acht gleichrangige Zeilen ohne jede Vorsortierung
 * waren für Erstbesucher:innen (Persona A/B) ein zu großer kognitiver Block
 * vor dem CTA. Drei leise Gruppenüberschriften (kein neuer Inhalt, keine
 * neue Hierarchieebene im Markup, nur eine visuelle Gliederung derselben
 * acht Leistungen) sortieren nach "wo stehe ich gerade": Marke aufbauen
 * (noch nichts Festes da) → sichtbar bleiben (laufende Präsenz) → Menschen
 * zeigen (Foto/Video, auch für die eigenen Leute). Durchgehende 01–08-
 * Nummerierung bleibt, damit es weiterhin wie ein Fluss liest, nicht wie
 * ein Katalog mit Kategorien.
 */
const leistungen = [
  {
    label: "01",
    name: "Branding",
    outcome: "Eine klare Position, bevor ein einziges Bild entsteht.",
    href: "/unternehmen/branding",
    group: "Marke aufbauen",
  },
  {
    label: "02",
    name: "Corporate Design",
    outcome: "Menschen erkennen deine Marke wieder.",
    href: "/unternehmen/corporate-design",
  },
  {
    label: "03",
    name: "Brandkit für Neugründungen",
    outcome: "Von der Idee zur ersten sichtbaren Marke.",
    href: "/unternehmen/brandkit",
  },
  {
    label: "04",
    name: "Content Creation",
    outcome: "Aus einem Projekt wird sichtbare Substanz, nicht nur ein einzelner Post.",
    href: "/unternehmen/content-creation",
    group: "Sichtbar bleiben",
  },
  {
    label: "05",
    name: "Social Media",
    outcome: "Sichtbarkeit entsteht durch Kontinuität, nicht durch einzelne Posts.",
    href: "/unternehmen/social-media",
  },
  {
    label: "06",
    name: "Kampagnen",
    outcome: "Mehrere Kanäle, eine Botschaft, ein Ergebnis.",
    href: "/unternehmen/kampagnen",
  },
  {
    label: "07",
    name: "Foto & Video",
    outcome: "Menschen vertrauen Gesichtern, nicht Stockfotos.",
    href: "/unternehmen/foto-video",
    group: "Menschen zeigen",
  },
  {
    label: "08",
    name: "Employer Branding",
    outcome: "Gute Mitarbeiter bewerben sich lieber.",
    href: "/unternehmen/employer-branding",
  },
];

export function LeistungenSection() {
  return (
    <section aria-label="Unsere Leistungen" className="bg-off-white px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
            Unsere Leistungen
          </p>
          <BrandTick className="mt-4 h-4 w-2.5 text-charcoal/20" />
          <h2 className="mt-6 max-w-xl text-[22px] leading-relaxed text-charcoal/80 lg:text-[24px]">
            Acht Leistungsfelder, eine Idee: Sichtbarkeit.
          </h2>
        </Reveal>

        <ul className="mt-14 divide-y divide-charcoal/10 border-t border-charcoal/10">
          {leistungen.map((item, i) => (
            <Fragment key={item.href}>
              {item.group && (
                <Reveal delay={i * 0.04}>
                  <p
                    className={`text-[11px] font-medium tracking-[0.12em] text-charcoal/50 uppercase ${i === 0 ? "pb-3" : "pt-8 pb-3"}`}
                  >
                    {item.group}
                  </p>
                </Reveal>
              )}
              <li className="relative isolate">
                <GhostNumeral
                  n={item.label}
                  className="-top-2 text-[64px] text-deep-forest/[0.06] lg:-top-3 lg:text-[88px]"
                />
                <Reveal delay={i * 0.04} className="relative z-10">
                  <Link href={item.href} className="group flex items-center justify-between gap-6 py-6">
                    <span className="flex items-baseline gap-5">
                      <span className="text-[13px] text-charcoal/70">{item.label}</span>
                      <span>
                        <span className="block text-[17px] font-medium text-charcoal transition-colors group-hover:text-deep-forest lg:text-[19px]">
                          {item.name}
                        </span>
                        <span className="mt-1 block text-[14px] text-charcoal/70 lg:text-[15px]">
                          {item.outcome}
                        </span>
                      </span>
                    </span>
                    <BrandArrow
                      aria-hidden
                      className="size-4 shrink-0 text-charcoal/30 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:text-deep-forest"
                    />
                  </Link>
                </Reveal>
              </li>
            </Fragment>
          ))}
        </ul>

        <Reveal delay={0.3} className="mt-14 text-center">
          <p className="text-[15px] text-charcoal/70">
            Passt das zu deinem Unternehmen?{" "}
            <Link
              href="/kontakt/projekt-besprechen"
              className="font-medium text-charcoal underline decoration-charcoal/30 underline-offset-4 transition-colors hover:text-deep-forest hover:decoration-deep-forest"
            >
              Lass uns sprechen
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
