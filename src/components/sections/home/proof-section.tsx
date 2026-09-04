"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useReducedMotion, motion } from "framer-motion";
import { BrandArrow } from "@/components/shared/brand-arrow";
import { BrandTick } from "@/components/shared/brand-tick";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
 * Creative Direction — Konzept 2 "Der Kontaktbogen" (Phase D, Implementie-
 * rungsplan: der "Peak" der Seite, höchster Engineering-Aufwand). Die drei
 * echten Referenzen liegen als Kontaktbogen nebeneinander; eine gepinnte,
 * scroll-gescrubbte Kamerafahrt zoomt nacheinander in jede einzelne Kachel,
 * zeigt Name + echten Leistungsumfang + Zielgruppen-Satz, zoomt zurück zur
 * Übersicht und weiter zur nächsten Kachel. Keine erfundenen Zusatzinhalte —
 * dieselben drei Projekte, dieselben Texte wie in der bisherigen statischen
 * Karten-Version.
 *
 * Zweite Überarbeitung nach Nutzer-Feedback: (1) echte Zentrierung — die
 * fokussierte Kachel landet jetzt exakt in der Bildschirmmitte, nicht nur
 * die mittlere der drei (siehe Rechnung in originAndOffsetForTile: eine
 * KONSTANTE, scale-unabhängige Verschiebung bringt den transform-origin-
 * Punkt der Kachel exakt auf den Sheet-Mittelpunkt, der seinerseits per
 * Flexbox in der Viewport-Mitte sitzt — der Trick: der transform-origin-
 * Punkt selbst bewegt sich durch scale NIE, nur x/y verschieben ihn, also
 * reicht ein fixer x-Wert für jede Zoomstufe). (2) die beiden nicht
 * fokussierten Kacheln blenden während des Zooms aus. (3) Name/Leistungen
 * jetzt fett statt Fließtext-Gewicht. (4) jede Kachel ist ein echter Link
 * zu /case-studies — auch während der gepinnten Kamerafahrt klickbar, nicht
 * nur in der reduced-motion-Ansicht.
 *
 * prefers-reduced-motion: die bisherige statische Drei-Karten-Ansicht,
 * unverändert — kein Pin, keine Kamerafahrt.
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

// Kontaktbogen-Geometrie: drei Kacheln in einer Reihe, responsiv (Desktop
// 300×225, Mobile kleiner, damit alle drei auf schmalen Viewports
// nebeneinanderpassen — vorher war die Breite fix 300px, auf Mobile wäre
// die Reihe (940px) breiter als der Viewport gewesen).
const DESKTOP_TILE = { w: 300, h: 225, gap: 20 };
const MOBILE_TILE = { w: 104, h: 78, gap: 8 };

function sheetWidth(tile: typeof DESKTOP_TILE) {
  return projects.length * tile.w + (projects.length - 1) * tile.gap;
}

/**
 * Liefert transform-origin (als Kachelmitte, in % des Sheets) UND die dazu
 * gehörige, scale-unabhängige x-Verschiebung, die genau diesen Punkt exakt
 * auf die Sheet-/Viewport-Mitte bringt. Weil der transform-origin-Punkt
 * durch `scale` nie bewegt wird, hält ein einziger konstanter x-Wert die
 * Kachel bei JEDER Zoomstufe exakt zentriert — kein scale-proportionales
 * Nachführen nötig.
 */
function originAndOffsetForTile(index: number, tile: typeof DESKTOP_TILE) {
  const w = sheetWidth(tile);
  const cx = index * (tile.w + tile.gap) + tile.w / 2;
  const cy = tile.h / 2;
  return {
    origin: `${(cx / w) * 100}% ${(cy / tile.h) * 100}%`,
    x: w / 2 - cx,
  };
}

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
  const reduceMotion = useReducedMotion();
  const sectionRef = React.useRef<HTMLElement>(null);
  const sheetRef = React.useRef<HTMLDivElement>(null);
  const tileRefs = React.useRef<Array<HTMLAnchorElement | null>>([]);
  const labelRef = React.useRef<HTMLParagraphElement>(null);
  const subtextRef = React.useRef<HTMLParagraphElement>(null);
  const captionBoxRef = React.useRef<HTMLDivElement>(null);

  // useLayoutEffect statt useEffect: siehe hero-section.tsx für die volle
  // Begründung — gsap ScrollTrigger's pin:true-Spacer muss synchron im
  // selben Commit wie Reacts eigene Unmount-DOM-Entfernung aufgelöst
  // werden, sonst schlägt Reacts removeChild bei einem Client-seitigen
  // Routenwechsel fehl.
  React.useLayoutEffect(() => {
    if (reduceMotion) return;
    const section = sectionRef.current;
    const sheet = sheetRef.current;
    const label = labelRef.current;
    const subtext = subtextRef.current;
    const captionBox = captionBoxRef.current;
    if (!section || !sheet || !label || !subtext || !captionBox) return;

    gsap.registerPlugin(ScrollTrigger);

    let tl: gsap.core.Timeline | null = null;

    function build() {
      tl?.scrollTrigger?.kill();
      tl?.kill();
      if (!sheet!.isConnected) return;

      const isMobile = window.innerWidth < 640;
      const tile = isMobile ? MOBILE_TILE : DESKTOP_TILE;
      const maxScale = isMobile ? 2.6 : 3.2;
      const tiles = tileRefs.current;

      gsap.set(sheet!, { transformOrigin: "50% 50%", scale: 1, x: 0 });
      gsap.set(tiles, { opacity: 1 });
      // Feedback: vorher wurde nur der TEXT ein-/ausgeblendet, die Box
      // selbst (Off-White-Fläche + Schatten) blieb durchgängig sichtbar —
      // dadurch stand eine leere Box da, bevor/nachdem die Kamerafahrt
      // läuft, und der Text sprang beim Wechsel zwischen Kacheln hart um,
      // während die Box unverändert stehen blieb. Jetzt blendet die Box
      // als Ganzes (inkl. Text) ein und aus — bei Ruhe/Übergängen ist sie
      // komplett unsichtbar, kein leeres Rechteck, kein harter Textsprung.
      gsap.set(captionBox!, { opacity: 0 });

      tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => "+=" + window.innerHeight * (isMobile ? 3.2 : 4),
          scrub: 0.7,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      projects.forEach((project, i) => {
        const base = i * 1.3;
        const { origin, x } = originAndOffsetForTile(i, tile);
        const others = tiles.filter((_, idx) => idx !== i);

        tl!.set(sheet!, { transformOrigin: origin }, base);
        tl!.to(sheet!, { scale: maxScale, x, duration: 0.5, ease: "power2.inOut" }, base);
        tl!.to(others, { opacity: 0.08, duration: 0.4, ease: "power1.inOut" }, base);
        tl!.call(
          () => {
            label!.textContent = `${project.label} · ${project.name}`;
            subtext!.textContent = `${project.tags.join(" · ")} — ${project.audience}`;
          },
          undefined,
          base + 0.35,
        );
        // Feedback: die Haltezeit war mit 0.1 Timeline-Einheiten (~80px
        // Scrollweg bei 800px Viewporthöhe) viel zu schmal — ein normaler
        // Scroll-Tick übersprang den Text komplett. Jetzt 0,45 Einheiten
        // (~370px) reiner Vollsichtbarkeits-Bereich zwischen Ein- und
        // Ausblenden.
        tl!.to(captionBox!, { opacity: 1, duration: 0.2 }, base + 0.4);
        tl!.to(captionBox!, { opacity: 0, duration: 0.2 }, base + 1.05);
        tl!.to(sheet!, { scale: 1, x: 0, duration: 0.5, ease: "power2.inOut" }, base + 0.8);
        tl!.to(others, { opacity: 1, duration: 0.4, ease: "power1.inOut" }, base + 0.8);
      });
    }

    build();

    let resizeTimer: number;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(build, 200);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      window.clearTimeout(resizeTimer);
      tl?.scrollTrigger?.kill();
      tl?.kill();
    };
  }, [reduceMotion]);

  if (reduceMotion) {
    return (
      <section aria-label="Case Studies" className="bg-off-white px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
            Ausgewählte Referenzen
          </h2>
          <BrandTick className="mt-4 h-4 w-2.5 text-charcoal/20" />

          <div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>

          <div className="mt-14 text-center lg:mt-16">
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-2 text-[14px] font-medium tracking-wide text-charcoal/70 transition-colors hover:text-deep-forest"
            >
              Mehr Arbeit ansehen
              <BrandArrow aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section
        ref={sectionRef}
        aria-label="Case Studies"
        className="relative flex h-[100svh] min-h-[560px] w-full flex-col overflow-hidden bg-off-white"
      >
        {/* Feedback-Fix: die Caption stand vorher in normalem Flow direkt
            unter dem Kachel-Stage — bei maximalem Zoom (scale 3,2) wächst
            die Kachel über ihre Layoutbox hinaus (CSS-transform verändert
            nie das Layout, nur das Gemalte) und überdeckte die Caption
            visuell, mit unvorhersehbarem Kontrast je nach Bildinhalt
            darunter — dieselbe Kontrastfalle wie im Referenz-PDF, nur über
            Überlappung statt Farbwahl ausgelöst. Jetzt: eigene, absolut
            positionierte Zone mit eigenem blickdichten Off-White-Hinter-
            grund, immer oberhalb der Kachel — lesbar unabhängig davon, was
            gerade darunter gezoomt ist. Gleichzeitig auf die "laut & mutig"-
            Typografie umgestellt (siehe philosophy-section.tsx): kurze
            Phrase (Projektname), deshalb hier bewusst in Versalien statt
            nur fett, wie das PDF es für kurze 2-3-Wort-Labels vorsieht. */}
        <div className="pt-14 text-center lg:pt-16">
          <h2 className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
            Ausgewählte Referenzen
          </h2>
          <BrandTick className="mx-auto mt-4 h-4 w-2.5 text-charcoal/20" />
        </div>

        <div className="relative flex flex-1 items-center justify-center px-6">
          <div
            className="relative flex items-center justify-center"
            style={{ width: `min(90vw, ${DESKTOP_TILE.w * 3 + DESKTOP_TILE.gap * 2}px)` }}
          >
            <div ref={sheetRef} className="flex gap-2 sm:gap-5">
              {projects.map((project, i) => (
                <Link
                  key={project.name}
                  href="/case-studies"
                  ref={(el) => {
                    tileRefs.current[i] = el;
                  }}
                  className="block w-[104px] shrink-0 overflow-hidden border border-charcoal/10 sm:w-[300px]"
                  style={{ aspectRatio: `${DESKTOP_TILE.w} / ${DESKTOP_TILE.h}` }}
                >
                  {project.framed ? (
                    <div className="relative flex h-full w-full items-center justify-center bg-deep-forest px-3 py-2 sm:px-8 sm:py-6">
                      <Image
                        src={project.image}
                        alt={project.alt}
                        width={1400}
                        height={1833}
                        className="h-full w-auto object-contain"
                      />
                    </div>
                  ) : (
                    <div className="relative h-full w-full">
                      <Image src={project.image} alt={project.alt} fill sizes="300px" className="object-cover" />
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-8 z-10 flex justify-center px-6 sm:bottom-12">
          <div
            ref={captionBoxRef}
            className="max-w-md bg-off-white px-6 py-4 text-center opacity-0 shadow-[0_8px_32px_rgba(13,43,36,0.16)] sm:px-8 sm:py-5"
          >
            <p
              ref={labelRef}
              className="font-serif text-[24px] leading-none font-bold tracking-tight text-deep-forest uppercase sm:text-[32px]"
            >
              &nbsp;
            </p>
            <p ref={subtextRef} className="mt-2 text-[13px] tracking-wide text-charcoal/70">
              &nbsp;
            </p>
          </div>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="bg-off-white px-6 pb-24 text-center lg:pb-32"
      >
        <Link
          href="/case-studies"
          className="group inline-flex items-center gap-2 text-[14px] font-medium tracking-wide text-charcoal/70 transition-colors hover:text-deep-forest"
        >
          Mehr Arbeit ansehen
          <BrandArrow aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </>
  );
}
