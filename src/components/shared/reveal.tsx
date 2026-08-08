"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** "fade" für reine Aussagen, "rise" für Bild-/Inhaltsmomente */
  variant?: "fade" | "rise";
};

/**
 * Motion Philosophy (Creative Direction, Kapitel 7): Bewegung erklärt einen
 * Zusammenhang oder performt das Reveal-Prinzip — sie ist nie Selbstzweck.
 * Deshalb ausschließlich ein einziges, wiederkehrendes Muster: ein leises
 * Sichtbarwerden beim Eintritt in den Viewport, nichts Verspieltes.
 * Respektiert prefers-reduced-motion vollständig (kein Motion-Effekt, sofort sichtbar).
 */
export function Reveal({ children, className, delay = 0, variant = "rise" }: RevealProps) {
  const reduceMotion = useReducedMotion();

  const variants: Variants = reduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: {
          opacity: 0,
          y: variant === "rise" ? 18 : 0,
          scale: variant === "rise" ? 0.985 : 1,
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        },
      };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
