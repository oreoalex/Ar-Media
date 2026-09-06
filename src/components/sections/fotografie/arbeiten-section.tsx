import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { BrandTick } from "@/components/shared/brand-tick";

/**
 * Ausgewählte Arbeiten. Bewusst bildgeführter als die Case Studies bei
 * Unternehmen: große, ruhige Einzelbilder statt Kennzahlen-Raster, wenige
 * Zeilen Text statt vier Stufen. Zwei echte Shootings mit Text, keine
 * erfundenen Geschichten — bewusst zurückhaltend formuliert (kein Name,
 * kein Ort im Detail), weil hier keine ausformulierte "Ausgangslage/
 * Wendepunkt"-Dramaturgie mit echtem Material hinterlegt werden konnte.
 * Sobald echte Vorher/Nachher- oder Prozess-Geschichten zu einzelnen
 * Shootings vorliegen, ersetzt das diese kurze Fassung 1:1.
 *
 * Die acht weiteren Bilder darunter bewusst ohne eigenen Fließtext pro
 * Bild — bei zehn Einträgen würde durchgängiger Text die Section in eine
 * Wand verwandeln und genau der "Galerie statt Geschichte"-Falle aus dem
 * Auftrag entsprechen. Die zwei Geschichten oben tragen die Erzählung,
 * das Raster darunter zeigt Breite.
 */
const geschichten = [
  {
    image: "/images/fotografie/arbeit-portrait.jpg",
    alt: "Portrait im Gegenlicht der goldenen Stunde",
    text: "Ein Portrait kurz vor Sonnenuntergang. Kein Studio, keine Vorgabe, wie zu stehen ist. Nur ein paar Minuten im Licht, bis das Lächeln nicht mehr gestellt war.",
  },
  {
    image: "/images/fotografie/arbeit-lifestyle.jpg",
    alt: "Echter Lachmoment, unbeobachtet",
    text: "Kein Kommando, kein Countdown. Das Bild entstand genau in der Sekunde, in der jemand über sich selbst gelacht hat, nicht für die Kamera.",
  },
];

/**
 * Editoriales Mosaik statt gleichförmigem Raster: unterschiedliche
 * Spaltenbreiten und Seitenverhältnisse pro Bild, damit es wie eine
 * kuratierte Bildstrecke wirkt statt wie ein Social-Media-Grid. Zwölf
 * Spalteneinheiten pro Reihe (lg:grid-cols-4, span 1 = eine Spalte),
 * mobil bewusst vereinfacht auf ein ruhiges Zwei-Spalten-Raster.
 */
const weitereMomente = [
  { image: "/images/fotografie/arbeit-03.jpg", alt: "Natürliches Portrait im Tageslicht", span: "lg:col-span-2", aspect: "aspect-4/3", position: "object-[center_30%]" },
  { image: "/images/fotografie/arbeit-04.jpg", alt: "Portrait im Profil, lachend", span: "lg:col-span-1", aspect: "aspect-3/4", position: "" },
  { image: "/images/fotografie/arbeit-05.jpg", alt: "Ruhiges Portrait, seitliches Licht", span: "lg:col-span-1", aspect: "aspect-3/4", position: "" },
  { image: "/images/fotografie/arbeit-06.jpg", alt: "Ausgelassener Moment, spielerische Geste im Tageslicht", span: "lg:col-span-1", aspect: "aspect-3/4", position: "" },
  { image: "/images/fotografie/arbeit-07.jpg", alt: "Dynamischer Sprung, Bewegung eingefangen", span: "lg:col-span-1", aspect: "aspect-3/4", position: "" },
  { image: "/images/fotografie/arbeit-08.jpg", alt: "Ausgelassenes Lachen am Tisch, candid", span: "lg:col-span-2", aspect: "aspect-4/3", position: "object-[center_18%]" },
  { image: "/images/fotografie/arbeit-09.jpg", alt: "Zwei Menschen in Umarmung, Blaue Stunde am Wasser", span: "lg:col-span-2", aspect: "aspect-3/4", position: "" },
  { image: "/images/fotografie/arbeit-10.jpg", alt: "Zwei Freundinnen, ausgelassener Moment", span: "lg:col-span-2", aspect: "aspect-3/4", position: "" },
];

export function ArbeitenSection() {
  return (
    <section aria-label="Ausgewählte Arbeiten" className="bg-off-white px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="max-w-xl">
          <h2 className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
            Ausgewählte Arbeiten
          </h2>
          <BrandTick className="mt-4 h-4 w-2.5 text-charcoal/20" />
          <p className="mt-6 text-[20px] leading-relaxed text-charcoal/80 lg:text-[22px]">
            Nicht jedes Bild ist eine Geschichte. Diese schon.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {geschichten.map((arbeit, i) => (
            <Reveal key={arbeit.image} delay={i * 0.08}>
              <div className="relative aspect-4/5 w-full overflow-hidden">
                <Image
                  src={arbeit.image}
                  alt={arbeit.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-5 max-w-md text-[16px] leading-relaxed text-charcoal/70">
                {arbeit.text}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-20 grid grid-cols-2 gap-4 lg:mt-24 lg:grid-cols-4 lg:gap-6">
          {weitereMomente.map((moment) => (
            <div
              key={moment.image}
              className={`group relative w-full overflow-hidden ${moment.span} ${moment.aspect}`}
            >
              <Image
                src={moment.image}
                alt={moment.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 50vw"
                className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${moment.position}`}
              />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
