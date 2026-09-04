"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Globales Smooth Scrolling (Lenis). Einmal im Root-Layout gemountet,
 * wirkt site-weit.
 *
 * Ab der Creative-Direction-Umsetzung (Phase A) treiben einzelne Szenen
 * echte gsap ScrollTrigger-Pins (z.B. Hero "Die Auflösung"). Lenis
 * virtualisiert das native Scroll-Event, ScrollTrigger braucht aber genau
 * dieses Event, um Pins/Scrub korrekt zu berechnen — deshalb läuft der
 * RAF-Loop jetzt über gsap.ticker (statt eines eigenen requestAnimationFrame)
 * und Lenis meldet jeden Scroll-Tick an ScrollTrigger.update(). Das ist das
 * dokumentierte Standard-Integrationsmuster von Lenis + gsap ScrollTrigger;
 * ohne das desynchronisieren gepinnte Elemente sichtbar vom Scroll.
 *
 * Respektiert prefers-reduced-motion vollständig: Lenis wird dann gar
 * nicht erst initialisiert, die Seite scrollt nativ. Kein Bewegungseffekt
 * wird Nutzer:innen aufgezwungen, die das explizit reduziert haben wollen.
 */
export function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = React.useRef<Lenis | null>(null);

  React.useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    // Lenis' eigenes Easing federt lange Frames bereits ab; gsap.ticker's
    // zusätzliches "lag smoothing" würde nach Tab-Wechseln/Hängern einen
    // künstlichen Zeitsprung einbauen, der mit Lenis' Geschwindigkeits-
    // berechnung kollidiert (ruckartiges Nachholen). Deaktiviert.
    gsap.ticker.lagSmoothing(0);

    // Fängt Höhenänderungen ab, die nicht mit einem Routenwechsel
    // zusammenfallen (spät nachladende Bilder, aufklappende Inhalte).
    // Beobachtet wird <body>, nicht <html>: <html> trägt h-full (height:
    // 100%) und behält deshalb immer die Viewport-Höhe als eigene
    // Box-Größe, ein ResizeObserver feuert dort nur bei echtem
    // Fenster-Resize. <body> hat nur min-h-full und wächst tatsächlich
    // mit dem Inhalt, genau die Größe, die Lenis' Limit widerspiegeln muss.
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
      ScrollTrigger.refresh();
    });
    resizeObserver.observe(document.body);

    return () => {
      resizeObserver.disconnect();
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  React.useEffect(() => {
    // SmoothScroll sitzt einmalig im Root-Layout und bleibt bei
    // Next.js-Client-Navigationen gemountet, während sich darunter nur
    // der Seiteninhalt austauscht. Ohne diese Neuberechnung bleibt Lenis'
    // beim Mount gemessenes Scroll-Limit an der Höhe der ERSTEN
    // aufgerufenen Seite hängen: Wheel-Scroll stoppt auf längeren Seiten
    // vorzeitig, nur der native Scrollbar-Drag umgeht das falsche Limit
    // (er setzt die Scrollposition direkt, ohne Lenis zu fragen). Effekte
    // laufen erst nach dem Browser-Paint der neuen Route, ein zusätzlicher
    // rAF-Abstand ist nicht nötig und bliebe in Hintergrund-Tabs hängen.
    // ScrollTrigger.refresh() räumt zusätzlich alle Pins/Trigger der
    // vorherigen Route ab und misst die neue Seite neu ein.
    //
    // Der Sprung nach oben zuerst: Next.js ruft bei der Navigation zwar
    // window.scrollTo(0, 0) auf, aber Lenis führt parallel seine eigene
    // RAF-Schleife mit einer intern gemerkten Scrollposition — die
    // überschreibt den nativen Sprung im nächsten Tick wieder mit der
    // alten Position. lenis.scrollTo(0, { immediate: true }) setzt Lenis'
    // eigenen Zustand direkt, ohne Animation.
    lenisRef.current?.scrollTo(0, { immediate: true });
    lenisRef.current?.resize();
    ScrollTrigger.refresh();
  }, [pathname]);

  return null;
}
