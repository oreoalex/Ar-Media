"use client";

import * as React from "react";
import { preload } from "react-dom";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { CtaButton } from "@/components/shared/cta-button";
import { HoverWords } from "@/components/shared/hover-words";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Nur für die Bild-Maße importiert (Next liefert bei einem statischen
// Bild-Import width/height zur Build-Zeit) — für src bleibt es beim rohen
// Pfad-String HERO_IMAGE, siehe preload()-Kommentar unten.
import heroImageMeta from "../../../../public/images/home/eroeffnung-detail.jpg";

const HERO_IMAGE = "/images/home/eroeffnung-detail.jpg";

const quickLinks = [
  { href: "/unternehmen", label: "Unternehmen" },
  { href: "/fotografie", label: "Fotografie" },
  { href: "/kita-schule", label: "Kita & Schule" },
];

const headline = "Manche Dinge muss man nur noch sichtbar machen.";
const headlineWords = headline.split(" ");

const headlineContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
};

const headlineWord: Variants = {
  hidden: { y: "120%", opacity: 0 },
  visible: { y: "0%", opacity: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

/**
 * Creative Direction — Konzept 1 "Die Auflösung" (Phase A der freigegebenen
 * Umsetzung). Der Eröffnungsmoment der Seite ist jetzt selbst die erste
 * Behauptung der Marke: das Hero-Bild liegt zunächst in Fragmenten vor sich
 * hin verstreut und fügt sich, an einen gsap ScrollTrigger-Pin gekoppelt,
 * beim Scrollen zu einem Ganzen zusammen — bevor sich Headline und Panel
 * öffnen. "Wir suchen, was bereits vorhanden ist" (Markenphilosophie) wird
 * hier zur tatsächlichen Interaktion statt nur zur Behauptung.
 *
 * Objekt-/Zustandskontinuität: die Fragmente SIND das Hero-Bild (identische
 * Bildquelle, exakte Ausschnitte per background-position) — es gibt keinen
 * Bildwechsel zwischen "Fragment-Zustand" und "fertigem" Hero. Die Headline
 * blendet erst ein, sobald die Fragmente ihre Zielposition erreicht haben
 * (Scroll-Progress ≥ 0.97) — angesteuert über den ScrollTrigger
 * onUpdate-Callback, nicht über eine feste Zeit.
 *
 * Zweite Überarbeitung nach Nutzer-Feedback: kein Glass-Panel mehr. War als
 * bewusst homepage-exklusives Signature-Element gedacht, las sich in der
 * Praxis aber als Bruch zur direkten "Headline auf dem Foto"-Sprache jeder
 * anderen Hero-Sektion der Seite (fotografie/, unternehmen/hero-section.tsx
 * etc.). Jetzt exakt dasselbe Muster: kein Panel, keine zweite
 * Logo-Wiederholung (der Sticky-Header trägt das Logo bereits).
 *
 * Dritte Überarbeitung: die drei Schnellzugriffe waren zunächst ganz raus
 * (die Gabelung direkt darunter übernimmt dieselbe Aufgabe) — auf
 * Nutzer-Wunsch zurück, jetzt als echte Buttons (CtaButton, variant
 * "outline") statt der früheren dünnen Text-Links im Glass-Panel.
 *
 * Mobile ist strukturell neu gedacht, nicht nur verkleinert: deutlich
 * weniger, größere Fragmente (5×4 statt 9×6) und eine kürzere Pin-Distanz —
 * mobile Besucher:innen sollen die Geste sofort spüren, ohne dafür
 * überproportional viel Scroll-Strecke investieren zu müssen.
 *
 * prefers-reduced-motion: kein Pin, keine Fragmente — Bild und Panel stehen
 * sofort in ihrem Zielzustand, exakt wie vor dieser Umsetzung.
 *
 * Design-Review 2026-09-05: der frühere "Entdecken"-Scroll-Hinweis (Text +
 * Chevron, unten zentriert) ist entfernt — ein generischer "Scroll to
 * explore"-Hinweis, den eine Seite mit einer so unübersehbaren
 * Eröffnungs-Animation (die Fragment-Montage selbst) nicht zusätzlich
 * braucht. Dafür ein sehr leises Korn über dem gesamten Hero (.brand-grain,
 * globals.css) für "cinematic atmosphere" statt eines weiteren Farbmoments —
 * passt zum fotografischen Kerngeschäft, ohne selbst laut zu werden.
 */
export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const sectionRef = React.useRef<HTMLElement>(null);
  const shardHostRef = React.useRef<HTMLDivElement>(null);
  const [assembled, setAssembled] = React.useState(false);
  // reduceMotion ist erst nach dem Mount bekannt (matchMedia ist
  // client-only); bis dahin bleibt "assembled" false, ohne dass die Bild-
  // Fragmente jemals gebaut werden — kein Flackern, kein Effect-setState
  // nur zur Ableitung eines bereits bekannten Werts.
  const isRevealed = reduceMotion || assembled;

  // Die Fragmente werden per CSS background-image aus der rohen Bilddatei
  // (nicht dem next/image-optimierten Pfad) gebaut — das Original muss
  // deshalb explizit als LCP-kritische Ressource vorgeladen werden, sonst
  // verpasst der Browser den frühen Preload-Hint, den next/image sonst für
  // ein normales <Image priority> automatisch setzen würde.
  preload(HERO_IMAGE, { as: "image", fetchPriority: "high" });

  // useLayoutEffect statt useEffect: die Cleanup-Funktion muss synchron im
  // selben Commit laufen wie Reacts eigene DOM-Entfernung bei einem Client-
  // seitigen Routenwechsel. gsap ScrollTrigger's pin:true verschiebt das
  // Element real in einen neu eingefügten "pin-spacer"-Wrapper — React weiß
  // davon nichts und entfernt beim Unmount über seine (veraltete) Referenz
  // auf den ursprünglichen Elternknoten. Läuft die ScrollTrigger.kill()-
  // Aufräumung (löst den Spacer wieder auf) erst in einem passiven
  // useEffect-Cleanup, kommt sie zu spät — Reacts eigener removeChild-Aufruf
  // ist dann schon fehlgeschlagen ("node to be removed is not a child of
  // this node", live reproduziert beim Wechsel von der Startseite zu
  // /kontakt). useLayoutEffect-Cleanups laufen synchron in derselben
  // Mutationsphase, noch bevor React die Elternknoten entfernt.
  React.useLayoutEffect(() => {
    if (reduceMotion) return;
    const section = sectionRef.current;
    const host = shardHostRef.current;
    if (!section || !host) return;

    gsap.registerPlugin(ScrollTrigger);

    let shards: HTMLDivElement[] = [];
    let tl: gsap.core.Timeline | null = null;
    let wasAssembled = false;

    function build() {
      // Nur über die selbst geführte shards-Liste abräumen, nie über
      // host.innerHTML: ein pauschales Leeren des Containers kann mit
      // Reacts eigener Buchhaltung für diesen (ref-gehaltenen) Knoten
      // kollidieren, wenn React im selben Moment denselben Abschnitt
      // neu mountet (StrictMode-Doppel-Effect, Fast Refresh) — beobachtet
      // als "Failed to execute 'removeChild'"-Fehler unter Fast Refresh.
      // isConnected schützt zusätzlich davor, an einem bereits aus dem
      // DOM entfernten Host weiterzubauen.
      tl?.scrollTrigger?.kill();
      tl?.kill();
      shards.forEach((el) => el.remove());
      shards = [];
      if (!host!.isConnected) return;

      const rect = section!.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const isMobile = w < 640;
      const cols = isMobile ? 5 : 9;
      const rows = isMobile ? 4 : 6;
      const cellW = w / cols;
      const cellH = h / rows;

      // object-fit:cover-Äquivalent für die per background-image simulierte
      // Kachelung: ein reines backgroundSize von "container-breite ×
      // container-höhe" streckt das Bild NICHT-uniform auf das Container-
      // Seitenverhältnis — auf einem breiten Desktop-Hero (nah am
      // Bildseitenverhältnis) kaum sichtbar, auf schmalen Hochformat-
      // Viewports (Mobile/Tablet) aber deutlich verzerrt (Bug-Fund). Der
      // Cover-Scale-Faktor + zentrierter Offset hält das Seitenverhältnis
      // exakt wie next/image's object-cover.
      const coverScale = Math.max(w / heroImageMeta.width, h / heroImageMeta.height);
      const renderedW = heroImageMeta.width * coverScale;
      const renderedH = heroImageMeta.height * coverScale;
      const offsetX = (w - renderedW) / 2;
      const offsetY = (h - renderedH) / 2;

      const frag = document.createDocumentFragment();
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const el = document.createElement("div");
          const targetX = c * cellW;
          const targetY = r * cellH;
          Object.assign(el.style, {
            position: "absolute",
            left: `${targetX}px`,
            top: `${targetY}px`,
            width: `${cellW}px`,
            height: `${cellH}px`,
            backgroundImage: `url(${HERO_IMAGE})`,
            backgroundSize: `${renderedW}px ${renderedH}px`,
            backgroundPosition: `${offsetX - targetX}px ${offsetY - targetY}px`,
            willChange: "transform, opacity",
          });
          frag.appendChild(el);
          shards.push(el);
        }
      }
      host!.appendChild(frag);

      gsap.set(shards, {
        x: () => gsap.utils.random(-140, 140),
        y: () => gsap.utils.random(-110, 110),
        rotation: () => gsap.utils.random(-45, 45),
        opacity: 0.1,
      });

      wasAssembled = false;
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => "+=" + window.innerHeight * (isMobile ? 0.85 : 1.3),
          scrub: 0.7,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const isAssembled = self.progress >= 0.97;
            if (isAssembled !== wasAssembled) {
              wasAssembled = isAssembled;
              setAssembled(isAssembled);
            }
          },
        },
      });

      tl.to(shards, {
        x: 0,
        y: 0,
        rotation: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: { each: 0.01, from: "random" },
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
      shards.forEach((el) => el.remove());
    };
  }, [reduceMotion]);

  return (
    <section
      ref={sectionRef}
      aria-label="Willkommen bei AR Media"
      // Layout-Fix (Image-to-Code-Audit): der Hero war vorher h-[100svh],
      // OBWOHL der SiteHeader ihm sticky ~4rem echten Platz im Dokumentfluss
      // wegnimmt (kein Overlay-Header) — auf jedem kleineren Laptop-
      // Viewport ragte dadurch genau die Header-Höhe des Heros (Schnell-
      // zugriffs-Buttons) unterhalb des ersten
      // sichtbaren Bildschirms heraus, per getBoundingClientRect verifiziert
      // (z. B. 1366×728: Hero-Ende bei 793px, Viewport endet bei 728px).
      // --header-height (globals.css) hält den Hero jetzt exakt innerhalb
      // des tatsächlich sichtbaren ersten Bildschirms.
      className="relative flex h-[calc(100svh_-_var(--header-height))] min-h-[496px] w-full items-end overflow-hidden bg-deep-forest"
    >
      {reduceMotion ? (
        <div className="absolute inset-0">
          <Image
            src={HERO_IMAGE}
            alt="Porträt eines lächelnden Mädchens mit Sommersprossen im warmen Abendlicht"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ) : (
        <div
          ref={shardHostRef}
          role="img"
          aria-label="Porträt eines lächelnden Mädchens mit Sommersprossen im warmen Abendlicht"
          className="absolute inset-0"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/95 via-deep-forest/25 to-deep-forest/10" />
      <div aria-hidden className="brand-grain pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay" />

      {/* Feedback-Fix: das Glass-Panel war als bewusst homepage-exklusives
          Signature-Element gedacht (siehe frühere Fassung dieses Kommentars
          bzw. der Kommentar in unternehmen/hero-section.tsx, der genau
          diese Abgrenzung dokumentierte) — liest sich in der Praxis aber als
          Bruch zum Rest der Seite, wo jede andere Hero-Sektion dieselbe
          direkte "Headline auf dem Foto, unten links"-Sprache trägt. Jetzt
          exakt dasselbe Muster wie fotografie/hero-section.tsx und
          unternehmen/hero-section.tsx: kein Panel, keine zweite Logo-
          Wiederholung (der Sticky-Header trägt das Logo bereits). Die drei
          Schnellzugriffe blieben zunächst ganz raus, kommen auf Nutzer-
          Wunsch als echte Buttons zurück (siehe unten). Die Fragment-
          Montage (Konzept 1) bleibt unverändert — nur der finale,
          freigelegte Zustand ändert sich. */}
      <motion.div
        initial={false}
        animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: reduceMotion ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto w-full max-w-[1400px] px-6 pb-24 lg:px-10 lg:pb-32"
      >
        {reduceMotion ? (
          <h1 className="max-w-2xl font-serif text-[clamp(1.75rem,4.8vw,3.25rem)] leading-[1.15] font-bold tracking-tight text-off-white">
            <HoverWords text={headline} className="hover:text-sand" />
          </h1>
        ) : (
          <motion.h1
            initial="hidden"
            animate={isRevealed ? "visible" : "hidden"}
            variants={headlineContainer}
            className="max-w-2xl font-serif text-[clamp(1.75rem,4.8vw,3.25rem)] leading-[1.15] font-bold tracking-tight text-off-white"
          >
            {headlineWords.map((word, i) => (
              <React.Fragment key={i}>
                {i > 0 && " "}
                <span className="inline-block overflow-hidden">
                  <motion.span
                    className="inline-block transition-colors duration-300 hover:text-sand"
                    variants={headlineWord}
                  >
                    {word}
                  </motion.span>
                </span>
              </React.Fragment>
            ))}
          </motion.h1>
        )}

        <nav aria-label="Schnellzugriff auf Hauptbereiche" className="mt-8 flex flex-wrap gap-3 sm:mt-10">
          {quickLinks.map((link) => (
            // focus-ring-inverse (Accessibility-Audit, globals.css): der
            // globale --ring-Token ist Deep Forest — auf diesem Deep-Forest-
            // Hero wäre der Standard-Fokusring gegen den eigenen Hintergrund
            // praktisch unsichtbar. Hier auf Sand umgestellt, ohne den
            // Ring-Token sitieweit zu verändern.
            <CtaButton
              key={link.href}
              href={link.href}
              variant="outline"
              size="sm"
              className="focus-ring-inverse"
            >
              {link.label}
            </CtaButton>
          ))}
        </nav>
      </motion.div>
    </section>
  );
}
