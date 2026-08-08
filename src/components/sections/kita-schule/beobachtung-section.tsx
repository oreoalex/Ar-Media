import { Reveal } from "@/components/shared/reveal";

/**
 * Eine Beobachtung — Phase 2 (Verständnis). Bildlos wie das Pendant auf der
 * Fotografie-Seite, diesmal aus Sicht der Einrichtung, nicht des fotografierten
 * Kindes: der Schmerzpunkt ist Organisationsaufwand, nicht Unsicherheit vor
 * der Kamera.
 */
export function BeobachtungSection() {
  return (
    <section aria-label="Eine Beobachtung" className="bg-off-white px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
            Eine Beobachtung
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 font-serif text-[clamp(1.5rem,3.6vw,2.25rem)] leading-[1.3] text-charcoal italic">
            Kitafotografie bedeutet für die meisten Einrichtungen vor allem eins:
            Organisationsaufwand.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-xl text-[17px] leading-relaxed text-charcoal/70">
            Ein fremder Fotograf kommt, der Tagesablauf steht still, Erzieher:innen müssen
            koordinieren statt betreuen. Am Ende bekommen Eltern eine Mappe mit einem
            einzigen gestellten Bild und das Gefühl, kaufen zu müssen. Für die Einrichtung
            bleibt der Aufwand, nicht der Nutzen.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
