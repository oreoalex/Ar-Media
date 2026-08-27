"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

const quickLinks = [
  { href: "/unternehmen", label: "Unternehmen" },
  { href: "/fotografie", label: "Fotografie" },
  { href: "/kita-schule", label: "Kita & Schule" },
];

/**
 * S01 · Eröffnung — Wireframe-Blueprint Kapitel 5, veredelt.
 * Statt des großen Logos trägt das Glass-Panel jetzt die Headline — sie
 * vermittelt innerhalb der ersten Sekunden, wofür AR Media steht, statt nur
 * die Marke zu benennen. Das Panel selbst bleibt (Signature-Element, siehe
 * Gestaltungssystem), das kleine Monogramm oben trägt weiterhin die Identität.
 * Die drei editorialen Textlinks darunter sind der schnelle Einstieg in die
 * Hauptbereiche — bewusst ohne Buttons/Flächen, um das ruhige Erscheinungsbild
 * des Panels nicht zu stören.
 *
 * Die Headline selbst löst sich per GSAP SplitText wortweise aus einer
 * maskierten Zeile heraus (statt nur mit dem Panel zu faden), das ist die
 * erste sichtbare "mehr Bewegung"-Geste der neuen Lenis/GSAP-Basis. Bei
 * reduced motion bleibt der Text unangetastet und wird nie gesplittet.
 */
export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const sectionRef = React.useRef<HTMLElement>(null);
  const headlineRef = React.useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 90]);

  React.useEffect(() => {
    if (reduceMotion || !headlineRef.current) return;

    gsap.registerPlugin(SplitText);
    const ctx = gsap.context(() => {
      const split = SplitText.create(headlineRef.current, {
        type: "words",
        mask: "words",
      });
      gsap.from(split.words, {
        yPercent: 120,
        opacity: 0,
        duration: 1,
        stagger: 0.06,
        delay: 0.75,
        ease: "expo.out",
      });
    }, headlineRef);

    return () => ctx.revert();
  }, [reduceMotion]);

  return (
    <section
      ref={sectionRef}
      aria-label="Willkommen bei AR Media"
      className="relative flex h-[100svh] min-h-[560px] w-full items-end justify-center overflow-hidden bg-deep-forest"
    >
      <motion.div style={{ y: imageY }} className="absolute inset-0">
        <Image
          src="/images/home/eroeffnung-detail.jpg"
          alt="Porträt eines lächelnden Mädchens mit Sommersprossen im warmen Abendlicht"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/70 via-deep-forest/10 to-deep-forest/35" />

      <motion.div
        initial={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 1, delay: 0.15 }}
        className="absolute top-8 left-1/2 w-9 -translate-x-1/2 sm:top-10 sm:w-10"
      >
        <Image
          src="/logo-mark-light.png"
          alt="AR Media"
          width={1293}
          height={1122}
          priority
          className="h-auto w-full drop-shadow-[0_2px_10px_rgba(13,43,36,0.4)]"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reduceMotion ? 0 : 1.1, delay: 0.35 }}
        className="absolute bottom-28 left-1/2 w-[calc(100%-3rem)] max-w-2xl -translate-x-1/2 rounded-4xl border border-off-white/15 bg-off-white/10 px-8 py-10 text-center shadow-[0_8px_40px_rgba(13,43,36,0.25)] backdrop-blur-xl sm:bottom-32 sm:px-16 sm:py-14"
      >
        <h1
          ref={headlineRef}
          className="font-serif text-[clamp(1.375rem,4.2vw,2.5rem)] leading-[1.25] text-off-white italic"
        >
          Manche Dinge muss man nur noch sichtbar machen.
        </h1>

        <span aria-hidden className="mx-auto mt-7 block h-px w-8 bg-off-white/20 sm:mt-8" />

        <nav aria-label="Schnellzugriff auf Hauptbereiche" className="mt-6 sm:mt-7">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12px] tracking-[0.08em] text-off-white/70 uppercase sm:gap-x-7 sm:text-[13px]">
            {quickLinks.map((link, i) => (
              <li key={link.href} className="flex items-center gap-x-5 sm:gap-x-7">
                {i > 0 && (
                  <span aria-hidden className="text-off-white/25">
                    ·
                  </span>
                )}
                <Link href={link.href} className="group relative pb-0.5 transition-colors hover:text-off-white">
                  {link.label}
                  <span
                    aria-hidden
                    className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-off-white transition-transform duration-300 ease-out group-hover:scale-x-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reduceMotion ? 0 : 1.1, delay: 0.5 }}
        className="relative mb-10 flex flex-col items-center gap-2 text-off-white/70"
      >
        <span className="text-[11px] tracking-[0.16em] uppercase">Entdecken</span>
        <ChevronDown aria-hidden className="size-4" />
      </motion.div>
    </section>
  );
}
