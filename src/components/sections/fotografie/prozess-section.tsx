import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";

/**
 * So entstehen echte Bilder. Vier Schritte wie bei Unternehmen ("Wie wir
 * arbeiten"), hier zusätzlich mit vier chronologischen Bildern aus
 * demselben echten Shooting statt reinem Text — zeigt die Wirkung, statt
 * sie zu behaupten. Das letzte Bild ist bewusst dasselbe wie im Hero: ein
 * Callback, der den Bogen der Seite schließt ("hier ist der Moment aus dem
 * Hero, und so ist er entstanden").
 *
 * Bewusst dunkel statt off-white: zwischen Beobachtung, Haltung, Leistungen
 * und Arbeiten liefen sonst fünf helle Sections in Folge, ohne Bruch in der
 * Bildspannung. Der Rhythmuswechsel sitzt hier, wo die vier Prozessbilder
 * ohnehin am stärksten für sich stehen.
 */
const schritte = [
  {
    label: "01",
    title: "Ankommen",
    text: "Die ersten Minuten sind nie das Shooting. Sie sind Zeit, im Ort und im Moment anzukommen, ohne dass schon fotografiert wird.",
    image: "/images/fotografie/prozess-01-ankommen.jpg",
  },
  {
    label: "02",
    title: "Kennenlernen",
    text: "Ein kurzes Gespräch, bevor die Kamera überhaupt eine Rolle spielt. Nicht über Posen. Über dich.",
    image: "/images/fotografie/prozess-02-kennenlernen.jpg",
  },
  {
    label: "03",
    title: "Vergessen, dass eine Kamera da ist",
    text: "Der Punkt, auf den alles hinausläuft. Sobald das passiert, verändert sich alles, was davor steif war.",
    image: "/images/fotografie/prozess-03-vergessen.jpg",
  },
  {
    label: "04",
    title: "Erinnerung entsteht",
    text: "Nicht mehr geplant, nicht mehr gestellt. Einfach ein Moment, der wirklich passiert ist und der bleibt.",
    image: "/images/fotografie/prozess-04-erinnerung.jpg",
  },
];

export function ProzessSection() {
  return (
    <section aria-label="So entstehen echte Bilder" className="bg-deep-forest px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="max-w-xl">
          <h2 className="text-[11px] font-medium tracking-[0.14em] text-off-white/60 uppercase">
            So entstehen echte Bilder
          </h2>
          <span aria-hidden className="mt-4 block h-px w-8 bg-off-white/20" />
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {schritte.map((schritt, i) => (
            <Reveal key={schritt.label} delay={i * 0.06}>
              <div className="relative aspect-3/4 w-full overflow-hidden">
                <Image
                  src={schritt.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-[13px] tracking-wide text-off-white/60">{schritt.label}</p>
              <h3 className="mt-1 text-[17px] font-medium text-off-white">{schritt.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-off-white/65">{schritt.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
