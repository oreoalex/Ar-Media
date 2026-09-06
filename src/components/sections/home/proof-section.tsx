"use client";

import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { BrandArrow } from "@/components/shared/brand-arrow";
import { BrandTick } from "@/components/shared/brand-tick";

/**
 * S05 · Beweis in Bewegung — Wireframe-Blueprint Kapitel 5, veredelt.
 * Erweitert auf drei Projekte — je eines mit klarem Bezug zu Unternehmen,
 * Kita & Schule und (im Wechsel) Fotografie/Unternehmen — bewusst gemischt
 * statt nach Kategorie sortiert, um dieselbe Handschrift über alle Bereiche
 * hinweg zu zeigen. Reihenfolge: Saat für den Norden zuerst (stärkstes,
 * vollständigstes Material — editorialer Einstieg), dann der Kita-Moment
 * (Kontrast: von Marken-Polish zu menschlicher Nähe), dann Royal Charming.
 *
 * Royal Charming bewusst NICHT vollflächig: Das offizielle Logo lebt in
 * kräftigem Bordeaux — auf voller Fläche würde es die stärkste Farbe der
 * ganzen Seite tragen und AR Medias eigene, gerade erst etablierte visuelle
 * Konsistenz an der exponiertesten Stelle der Startseite unterlaufen. Das
 * Logo bleibt unverändert (keine Umfärbung — das wäre unehrlich gegenüber
 * dem Kunden), bekommt aber ein Passepartout in AR Medias eigener Farbe:
 * authentisch für Royal Charming, aber AR Media bleibt Rahmengeber der Seite.
 *
 * Romeike & Partner bewusst noch nicht aufgenommen: Für dieses Projekt
 * liegt aktuell kein reales Bild-/Logomaterial vor, nur Vertragsunterlagen —
 * ein Platzhalter würde dem Prinzip "keine erfundenen Ergebnisse" widersprechen.
 * Sobald echtes Material vorliegt, wird es als vierter, gleichwertiger Eintrag ergänzt.
 *
 * Final Creative Direction: aus "Portfolio" wird "Referenz" — jedes Projekt
 * trägt jetzt seinen echten Leistungsumfang statt nur einer Kategorie. Das
 * verschiebt die Aussage von "AR Media zeigt Bilder" zu "AR Media löst
 * Probleme". Leistungsangaben stammen direkt vom Studio (Stand dieser
 * Iteration), keine Annahmen. Der "audience"-Satz je Projekt spricht nicht
 * den Kunden selbst an, sondern zukünftige AR-Media-Kund:innen mit einem
 * vergleichbaren Anliegen — dasselbe Prinzip wie die drei Wege in
 * fork-section.tsx ("Ich zeige dir, wie gut deine Marke aussehen kann.").
 *
 * Design-Review 2026-09-06: die frühere gepinnte, scroll-gescrubbte
 * Kamerafahrt ("Der Kontaktbogen" — zoomt nacheinander in jede Kachel) ist
 * auf Nutzerwunsch entfernt. Zurück zu einer ruhigen, statischen
 * Drei-Karten-Ansicht mit demselben dezenten Hover-Zoom, den jedes andere
 * Bild auf der Seite auch trägt (group-hover:scale) — keine zusätzliche
 * Wisch-Interaktion, kein Pin, kein Scroll-Scrubbing.
 */
const projects = [
  {
    label: "01",
    name: "Saat für den Norden",
    tags: ["Logo-Relaunch", "Corporate Design", "Markenidentität"],
    audience: "Für Unternehmen, die mehr wollen als nur ein neues Logo.",
    image: "/images/home/beweis-unternehmen-moment.jpg",
    alt: "Visitenkarte der Marke Saat für den Norden",
    framed: false,
  },
  {
    label: "02",
    name: "Kita & Schule",
    tags: ["Fotografie", "DSGVO", "Onlinegalerie", "Elternportal"],
    audience: "Für Kitas und Schulen, die echte Momente zeigen wollen.",
    image: "/images/home/beweis-kita-moment.jpg",
    alt: "Authentischer Moment aus einer AR Media Kita-Fotografie",
    framed: false,
  },
  {
    label: "03",
    name: "Royal Charming",
    tags: ["Logo & Branding", "Social Media", "Webdesign", "Print"],
    audience: "Für Marken, die von Anfang an stimmig wirken sollen.",
    image: "/images/home/royal-charming-logo.png",
    alt: "Royal Charming, offizielles Markenlogo",
    framed: true,
  },
];

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <Link href="/case-studies" className="group block">
      {project.framed ? (
        <div className="relative aspect-4/3 w-full overflow-hidden border border-charcoal/10 bg-deep-forest lg:aspect-auto lg:h-[380px]">
          <div className="absolute inset-0 flex items-center justify-center px-14 py-10">
            <Image
              src={project.image}
              alt={project.alt}
              width={1400}
              height={1833}
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="h-full w-auto object-contain transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </div>
        </div>
      ) : (
        <div className="relative aspect-4/3 w-full overflow-hidden border border-charcoal/10 lg:aspect-auto lg:h-[380px]">
          <Image
            src={project.image}
            alt={project.alt}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </div>
      )}
      <div className="mt-4 flex items-start justify-between gap-3 transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
        <div>
          <p className="text-[15px] tracking-wide text-charcoal">
            <span className="text-charcoal/70">{project.label}</span> {project.name}
          </p>
          <p className="mt-1.5 text-[13px] tracking-wide text-charcoal/70">{project.tags.join(" · ")}</p>
        </div>
        <BrandArrow
          aria-hidden
          className="mt-1 size-3.5 shrink-0 -translate-x-1 text-charcoal/70 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100"
        />
      </div>
    </Link>
  );
}

export function ProofSection() {
  return (
    <section aria-label="Case Studies" className="bg-off-white px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <h2 className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
            Ausgewählte Referenzen
          </h2>
          <BrandTick className="mt-4 h-4 w-2.5 text-charcoal/20" />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.06}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-14 text-center lg:mt-16">
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 text-[14px] font-medium tracking-wide text-charcoal/70 transition-colors hover:text-deep-forest"
          >
            Mehr Arbeit ansehen
            <BrandArrow aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
