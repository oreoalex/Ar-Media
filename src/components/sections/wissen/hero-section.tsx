import { Reveal } from "@/components/shared/reveal";

/**
 * Kein "Neueste Blogartikel"-Ton. Die Botschaft ist bewusst eine Aussage,
 * keine Frage und kein Ausrufezeichen (Markenstimme-Konvention, siehe
 * philosophy-section.tsx auf der Startseite).
 */
export function HeroSection() {
  return (
    <section aria-label="Wissen" className="bg-off-white px-6 pt-32 pb-20 lg:pt-40 lg:pb-24">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.16em] text-charcoal/75 uppercase">Wissen</p>
          <h1 className="mt-6 font-serif text-[clamp(1.9rem,4.8vw,3.25rem)] leading-[1.15] font-bold tracking-tight text-charcoal">
            Hilfe, die dich wirklich weiterbringt.
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-[17px] leading-relaxed text-charcoal/70">
            Wir zeigen dir zuerst, wie digitale Marken, Social Media und die Werkzeuge dahinter funktionieren.
            Willst du es selbst umsetzen, findest du hier fundiertes Wissen. Brauchst du Unterstützung, zeigen wir
            dir an der passenden Stelle, wie AR Media dabei helfen kann.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
