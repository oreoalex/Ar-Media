"use client";

import * as React from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { BrandMarkA } from "@/components/shared/brand-mark-a";
import { BrandTick } from "@/components/shared/brand-tick";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const DECOY_TEXT =
  "Wir sind eine Agentur für Design, Fotografie und digitale Kommunikation aus Kiel. Wir helfen Unternehmen dabei, ihre Marke professionell und wirkungsvoll zu präsentieren – mit kreativen Lösungen, die überzeugen.";

/**
 * Creative Direction — Konzept 7 "Der Kippmoment" (Phase B der freigegebenen
 * Umsetzung, lt. Implementierungsplan die komplexeste Einzeltimeline der
 * Seite). Die Sektion beginnt bewusst als generischer, austauschbarer
 * About-Text — wie jede andere Agenturseite. Ein kaum sichtbarer Riss legt
 * sich darüber, wird beim Weiterscrollen breiter, der Decoy-Text schert sich
 * entlang der Risslinie auseinander und gleitet an die Ränder — dahinter
 * liegt der echte, eigenständige AR-Media-Content: die tatsächliche
 * Haltung der Marke, als Fraunces-Statement, mit echtem Foto.
 *
 * Technik: der Decoy-Absatz liegt zweimal deckungsgleich übereinander, per
 * clip-path in zwei Hälften geschnitten (Desktop: diagonal, Mobile: waage-
 * recht — kürzere Scroll-Distanz für einen glaubwürdigen Querriss). Die
 * clip-path-Form selbst wird NIE animiert (siehe Phase-A-Erkenntnis: GSAP
 * interpoliert unterschiedliche clip-path-Formen ohne MorphSVGPlugin nicht
 * zuverlässig) — bewegt werden nur transform/opacity der bereits fertig
 * geschnittenen Hälften. Der echte Content liegt die ganze Zeit unverändert
 * darunter und wird einfach freigelegt, nicht eingeblendet.
 *
 * prefers-reduced-motion: kein Riss, kein Decoy — die echte Haltung steht
 * sofort da, wie vor dieser Umsetzung.
 */
export function PhilosophySection() {
  const reduceMotion = useReducedMotion();
  const sectionRef = React.useRef<HTMLElement>(null);
  const stageRef = React.useRef<HTMLDivElement>(null);
  const topPieceRef = React.useRef<HTMLDivElement>(null);
  const bottomPieceRef = React.useRef<HTMLDivElement>(null);
  const crackRef = React.useRef<SVGLineElement>(null);
  const realContentRef = React.useRef<HTMLDivElement>(null);

  // useLayoutEffect statt useEffect: siehe hero-section.tsx für die volle
  // Begründung — gsap ScrollTrigger's pin:true-Spacer muss synchron im
  // selben Commit wie Reacts eigene Unmount-DOM-Entfernung aufgelöst
  // werden, sonst schlägt Reacts removeChild bei einem Client-seitigen
  // Routenwechsel fehl.
  React.useLayoutEffect(() => {
    if (reduceMotion) return;
    const section = sectionRef.current;
    const stage = stageRef.current;
    const top = topPieceRef.current;
    const bottom = bottomPieceRef.current;
    const crack = crackRef.current;
    const real = realContentRef.current;
    if (!section || !stage || !top || !bottom || !crack || !real) return;

    gsap.registerPlugin(ScrollTrigger);

    let tl: gsap.core.Timeline | null = null;

    function build() {
      tl?.scrollTrigger?.kill();
      tl?.kill();
      if (!stage!.isConnected) return;

      const isMobile = window.innerWidth < 640;

      // Clip-Pfade: Desktop schneidet diagonal (0/60% ↔ 100/40%), Mobile
      // waagerecht (glatte 50%-Linie) — exakt komplementär, damit beide
      // Hälften im Ruhezustand nahtlos das Ganze ergeben.
      const topClip = isMobile
        ? "polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)"
        : "polygon(0% 0%, 100% 0%, 100% 40%, 0% 60%)";
      const bottomClip = isMobile
        ? "polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%)"
        : "polygon(0% 60%, 100% 40%, 100% 100%, 0% 100%)";
      gsap.set(top!, { clipPath: topClip, x: 0, y: 0, opacity: 1 });
      gsap.set(bottom!, { clipPath: bottomClip, x: 0, y: 0, opacity: 1 });

      // Riss-Linie: exakt entlang derselben Naht wie die Clip-Pfade.
      if (isMobile) {
        crack!.setAttribute("x1", "0");
        crack!.setAttribute("y1", "500");
        crack!.setAttribute("x2", "1000");
        crack!.setAttribute("y2", "500");
      } else {
        crack!.setAttribute("x1", "0");
        crack!.setAttribute("y1", "600");
        crack!.setAttribute("x2", "1000");
        crack!.setAttribute("y2", "400");
      }
      gsap.set(crack!, { opacity: 0, strokeWidth: 0 });
      gsap.set(real!, { opacity: 1, scale: 1.035 });

      const exitDistance = isMobile ? 90 : 140;

      tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => "+=" + window.innerHeight * (isMobile ? 1.6 : 2.1),
          scrub: 0.7,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Phase 1 (0–25%): der Riss wird sichtbar, der Decoy-Text steht noch
      // vollkommen still — "kaum sichtbar, leicht zu übersehen, das ist
      // Absicht" (Creative Direction).
      tl.to(crack!, { opacity: 0.55, strokeWidth: 1.5, duration: 0.25, ease: "power1.out" }, 0);

      // Phase 2 (25–75%): der Riss wird deutlich breiter, die beiden
      // Hälften scheren auseinander und gleiten an die Ränder, der echte
      // Content darunter löst sich beim Freilegen leise aus der leichten
      // Vergrößerung (Motion-Kontinuität statt hartem Schnitt).
      tl.to(crack!, { strokeWidth: 3, duration: 0.2, ease: "power1.in" }, 0.25);
      tl.to(crack!, { opacity: 0, duration: 0.3 }, 0.45);
      tl.to(
        top!,
        {
          x: isMobile ? 0 : -exitDistance * 0.6,
          y: -exitDistance,
          rotation: isMobile ? 0 : -3,
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
        },
        0.25,
      );
      tl.to(
        bottom!,
        {
          x: isMobile ? 0 : exitDistance * 0.6,
          y: exitDistance,
          rotation: isMobile ? 0 : 3,
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
        },
        0.25,
      );
      tl.to(real!, { scale: 1, duration: 0.5, ease: "power2.out" }, 0.25);

      // Phase 3 (75–100%): Fragmente sind weg, der echte Content steht
      // fertig da — Timeline läuft aus, ohne weitere Bewegung.
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

  const realContent = (
    <div className="relative mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-20">
      <div
        className="relative aspect-3/4 w-full overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, black 78%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, black 78%, transparent 100%)",
        }}
      >
        <Image
          src="/images/home/philosophie-detail.jpg"
          alt="Geprägtes Markendetail eines AR Media Branding-Projekts"
          fill
          sizes="(min-width: 1024px) 280px, 60vw"
          className="object-cover"
        />
      </div>
      <div>
        <h2 className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
          Unsere Haltung
        </h2>
        <BrandTick className="mt-4 h-4 w-2.5 text-charcoal/20" />
        {/* "Laut & Mutig"-Typografie (Runde-3-Exploration): Text als
            dominante grafische Masse statt höflicher Fließtext-Zeile —
            fett statt kursiv, deutlich größer, enge Laufweite. Bewusst
            NICHT in Versalien: die echte Marken-Stimme schreibt lange,
            literarische Sätze (siehe brand voice), Versalien funktionieren
            im Referenz-PDF nur für kurze 2-3-Wort-Phrasen und würden einen
            ganzen Satz weniger lesbar machen, nicht lauter wirken lassen. */}
        {/* text-balance statt der globalen p-Voreinstellung text-wrap:pretty
            (siehe globals.css): dieser Satz funktioniert trotz <p>-Tag als
            Display-Headline der Sektion (46px, fett, Fraunces) — für
            Headline-Maßstab liefert eine ausbalancierte Zeilenverteilung ein
            ruhigeres, "schwereres" Satzbild als reine Waisenwort-Vermeidung
            (Typografie-Audit: "Headlines should feel heavy and intentional"). */}
        <p className="mt-6 max-w-xl text-balance font-serif text-[32px] leading-[1.08] font-bold tracking-tight text-deep-forest lg:text-[46px]">
          Wir erschaffen keine künstlichen Bilder oder Markenwelten.
        </p>
        <p className="mt-4 max-w-xl text-[19px] leading-relaxed text-charcoal/80 lg:text-[21px] lg:leading-[1.6]">
          Wir suchen, was bereits vorhanden ist: Charakter, Potenzial, ein echter Moment. Und
          machen es sichtbar. Für ein Unternehmen bedeutet das Konsistenz. Für einen Menschen ein
          ehrliches Bild. Für ein Kind einen unverstellten Moment.
        </p>
      </div>
    </div>
  );

  if (reduceMotion) {
    return (
      <section
        aria-label="Unsere Haltung"
        className="relative overflow-hidden bg-off-white px-6 py-28 lg:py-40"
      >
        <BrandMarkA className="pointer-events-none absolute top-1/2 -right-[8vw] h-[85%] w-auto -translate-y-1/2 text-deep-forest opacity-[0.04] sm:-right-[6vw]" />
        {realContent}
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      aria-label="Unsere Haltung"
      className="relative overflow-hidden bg-off-white"
    >
      <div ref={stageRef} className="relative flex min-h-[100svh] items-center px-6 py-28 lg:py-40">
        <BrandMarkA className="pointer-events-none absolute top-1/2 -right-[8vw] h-[85%] w-auto -translate-y-1/2 text-deep-forest opacity-[0.04] sm:-right-[6vw]" />

        {/* Echter Content — liegt die ganze Zeit fertig da, wird nur freigelegt. */}
        <div ref={realContentRef} className="relative w-full">
          {realContent}
        </div>

        {/* Decoy — zwei deckungsgleiche Kopien desselben generischen Texts,
            per clip-path in exakt komplementäre Hälften geschnitten. */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div
            ref={topPieceRef}
            className="absolute inset-0 flex items-center justify-center bg-off-white px-6"
          >
            <p className="max-w-xl text-[19px] leading-relaxed text-charcoal/70 lg:text-[21px] lg:leading-[1.6]">
              {DECOY_TEXT}
            </p>
          </div>
          <div
            ref={bottomPieceRef}
            className="absolute inset-0 flex items-center justify-center bg-off-white px-6"
          >
            <p className="max-w-xl text-[19px] leading-relaxed text-charcoal/70 lg:text-[21px] lg:leading-[1.6]">
              {DECOY_TEXT}
            </p>
          </div>
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
          >
            <line
              ref={crackRef}
              x1="0"
              y1="600"
              x2="1000"
              y2="400"
              stroke="var(--sand)"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
