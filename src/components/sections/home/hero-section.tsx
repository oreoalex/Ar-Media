"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { CtaButton } from "@/components/shared/cta-button";
import { HoverWords } from "@/components/shared/hover-words";

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
 * Design-Review 2026-09-06: die frühere Fragment-Montage ("Die Auflösung",
 * ein gsap ScrollTrigger-Pin, der das Hero-Bild aus 54 verstreuten Kacheln
 * zusammensetzte) ist auf Nutzerwunsch entfernt — zurück zu einem ruhigen,
 * direkt fertigen Hero-Bild. Die Headline blendet weiterhin wortweise beim
 * Laden ein (kein Scroll-Trigger mehr, reiner Mount-Reveal), das Bild selbst
 * steht sofort in seinem Zielzustand.
 *
 * prefers-reduced-motion: auch der Wort-für-Wort-Reveal entfällt, Headline
 * steht sofort da.
 */
export function HeroSection() {
  const reduceMotion = useReducedMotion();

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

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
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
            animate="visible"
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
