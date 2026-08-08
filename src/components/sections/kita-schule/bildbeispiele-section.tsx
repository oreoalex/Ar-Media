import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";

/**
 * Bildbeispiele — Phase 5 (Qualität). Creative Review, Punkte 1+2: statt
 * eines gleichrangigen Mosaiks jetzt ein Spannungsbogen mit einem bewussten
 * Innehalte-Moment. Reihenfolge folgt Emotion statt Motiv (Neugier →
 * Bewegung → Konzentration → Verbundenheit → Freude → Lachen), das
 * Zwischenbild (Leonie & Luca) bricht als einzelnes, breites Bild mit
 * eigener, verzögerter Reveal-Bewegung die Reihe auf, der zweite emotionale
 * Höhepunkt der Seite nach dem Hero. Die letzte Reihe schließt bewusst mit
 * einer kurzen Textzeile statt eines siebten Bildes, damit die vier
 * Rasterspalten immer vollständig gefüllt sind, keine halb leere Reihe wie
 * in der vorherigen Fassung.
 *
 * Jede Kachel trägt ihr eigenes Reveal (statt mehrerer Bilder unter einem
 * gemeinsamen Reveal mit display:contents): CSS-Grid-Kinder müssen direkte
 * Kinder des Grid-Containers bleiben, sonst greifen col-span-Klassen nicht
 * mehr, und display:contents hätte außerdem die Opacity-/Transform-Animation
 * von Reveal unwirksam gemacht, da das Element dann keine eigene Box mehr hat.
 */
const momente = [
  { image: "/images/kita-schule/arbeit-01.jpg", alt: "Neugieriger Blick direkt in die Kamera", span: "lg:col-span-1", aspect: "aspect-3/4" },
  { image: "/images/kita-schule/arbeit-02.jpg", alt: "Ausgelassene Bewegung, Wind im Haar", span: "lg:col-span-2", aspect: "aspect-4/3" },
  { image: "/images/kita-schule/arbeit-05.jpg", alt: "Konzentrierter Moment in Nahaufnahme", span: "lg:col-span-1", aspect: "aspect-3/4" },
];

const momenteSchluss = [
  { image: "/images/kita-schule/arbeit-03.jpg", alt: "Ruhiger, stolzer Moment im Garten der Einrichtung", span: "lg:col-span-1", aspect: "aspect-3/4" },
  { image: "/images/kita-schule/arbeit-07.jpg", alt: "Ausgelassenes Lachen im Sand, umgeben von Spielzeug", span: "lg:col-span-1", aspect: "aspect-3/4" },
];

export function BildbeispieleSection() {
  return (
    <section aria-label="Bildbeispiele" className="bg-off-white px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="max-w-xl">
          <p className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
            Bildbeispiele
          </p>
          <span aria-hidden className="mt-4 block h-px w-8 bg-charcoal/20" />
          <h2 className="mt-6 font-serif text-[clamp(1.5rem,3.2vw,2rem)] leading-[1.3] text-charcoal italic">
            Nicht gestellt. Trotzdem vorzeigbar.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 lg:mt-20 lg:grid-cols-4 lg:gap-6">
          {momente.map((moment, i) => (
            <Reveal key={moment.image} delay={i * 0.06} className={`${moment.span} ${moment.aspect}`}>
              <div className="group relative h-full w-full overflow-hidden">
                <Image
                  src={moment.image}
                  alt={moment.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.35} className="col-span-2 lg:col-span-4">
            <div className="group relative aspect-21/9 w-full overflow-hidden">
              <Image
                src="/images/kita-schule/arbeit-04.jpg"
                alt="Zwei Kinder im vertrauten Gespräch, echtes Lachen"
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </Reveal>

          {momenteSchluss.map((moment, i) => (
            <Reveal key={moment.image} delay={i * 0.06} className={`${moment.span} ${moment.aspect}`}>
              <div className="group relative h-full w-full overflow-hidden">
                <Image
                  src={moment.image}
                  alt={moment.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.2} className="col-span-2 flex flex-col justify-center px-1">
            <span aria-hidden className="block h-px w-8 bg-charcoal/20" />
            <p className="mt-5 font-serif text-[19px] leading-relaxed text-charcoal/70 italic lg:text-[21px]">
              Jeder Termin ist anders. Jedes Bild bleibt es auch.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
