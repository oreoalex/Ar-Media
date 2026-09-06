import Image from "next/image";
import { CtaButton } from "@/components/shared/cta-button";
import { HoverWords } from "@/components/shared/hover-words";

const HERO_IMAGE = "/images/home/eroeffnung-detail.jpg";

const quickLinks = [
  { href: "/unternehmen", label: "Unternehmen" },
  { href: "/fotografie", label: "Fotografie" },
  { href: "/kita-schule", label: "Kita & Schule" },
];

const headline = "Manche Dinge muss man nur noch sichtbar machen.";

/**
 * Design-Review 2026-09-06: die frühere Fragment-Montage ("Die Auflösung",
 * ein gsap ScrollTrigger-Pin) ist auf Nutzerwunsch entfernt — zurück zu
 * einem ruhigen, direkt fertigen Hero-Bild.
 *
 * Performance-Audit (2026-09-06, zweiter Durchgang): der erste Ersatz
 * (dieser Kommentar galt vorher) blendete die Headline noch per Framer
 * Motion wortweise ein (opacity:0 im initialen SSR-HTML, sichtbar erst
 * nach Hydration). Lighthouse maß danach 6,0s LCP mit 100% "Render Delay"
 * auf genau diesem H1 — die Headline IST das LCP-Element der Seite, und
 * ein bei opacity:0 startendes Element kann per Definition nicht früher
 * gemalt werden als die Hydration erlaubt. Jetzt steht die Headline sofort
 * da, exakt wie jede andere Hero-Section der Seite (fotografie/,
 * unternehmen/hero-section.tsx) es ohnehin schon tut — kein Mount-Reveal
 * mehr, kein Framer-Motion-Import in dieser Komponente nötig.
 */
export function HeroSection() {
  return (
    <section
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
      <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/95 via-deep-forest/25 to-deep-forest/10" />
      <div aria-hidden className="brand-grain pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay" />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 pb-24 lg:px-10 lg:pb-32">
        <h1 className="max-w-2xl font-serif text-[clamp(1.75rem,4.8vw,3.25rem)] leading-[1.15] font-bold tracking-tight text-off-white">
          <HoverWords text={headline} className="hover:text-sand" />
        </h1>

        <nav aria-label="Schnellzugriff auf Hauptbereiche" className="mt-8 flex flex-wrap gap-3 sm:mt-10">
          {quickLinks.map((link) => (
            // A11y-Audit (2026-09-06): der Sand-Fokusring für variant="outline"
            // sitzt jetzt zentral in cta-button.tsx, kein lokaler Override
            // mehr nötig (siehe dortiger Kommentar).
            <CtaButton key={link.href} href={link.href} variant="outline" size="sm">
              {link.label}
            </CtaButton>
          ))}
        </nav>
      </div>
    </section>
  );
}
