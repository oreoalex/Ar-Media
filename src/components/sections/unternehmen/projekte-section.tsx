import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/lib/site-config";
import { BrandArrow } from "@/components/shared/brand-arrow";
import { BrandTick } from "@/components/shared/brand-tick";

/**
 * Ausgewählte Projekte. Bewusst ein knapper Teaser, keine volle
 * Fallstudie mehr: Die komplette 6-teilige Dramaturgie (Ausgangssituation
 * bis Learnings) für exakt dieselben drei Projekte lebt bereits auf
 * /case-studies. Frühere Version dieser Section erzählte hier die ganze
 * Geschichte noch einmal in Kurzform, fast wortgleich, das las sich beim
 * Durchklicken der Seite als Wiederholung statt als Vertiefung (siehe
 * Master-Brand-Audit). Jetzt: Bild, Name, ein einziger Ergebnis-Satz als
 * Appetit-Anreger, dann der Sprung zur echten Fallstudie (Deep-Link auf
 * den jeweiligen Abschnitt via /case-studies#slug). Aus "hier schon alles
 * gesagt" wird "hier will ich weiterlesen".
 */
const projekte = [
  {
    name: "Saat für den Norden",
    slug: "saat",
    image: "/images/unternehmen/saat-vorher-nachher.jpg",
    imageFit: "contain" as const,
    imageBg: "bg-[#f4f2ee]",
    alt: "Saat für den Norden: Signet vor und nach der Überarbeitung",
    ergebnis: "Eine Marke, die auf den ersten Blick wiedererkennbar ist, vom Firmenwagen bis zur Visitenkarte.",
  },
  {
    name: "Zeltlager Adlerhorst",
    slug: "adlerhorst",
    image: "/images/unternehmen/adlerhorst-vorher-nachher.jpg",
    imageFit: "contain" as const,
    imageBg: "bg-[#f4f2ee]",
    alt: "Zeltlager Adlerhorst: Logo vor und nach der Überarbeitung",
    ergebnis: "Von der Helfersuche bis zum Jubiläum trägt jetzt eine durchgängige, wiedererkennbare Stimme.",
  },
  {
    name: "Royal Charming",
    slug: "royal-charming",
    image: "/images/unternehmen/royal-charming-icon.jpg",
    imageFit: "cover" as const,
    imageBg: "bg-[#5c0f1f]",
    alt: "Royal Charming, offizielles Markenlogo",
    ergebnis: "Alle 9 Welpen innerhalb von 8 Wochen erfolgreich vermittelt, allein über Website und Social Media.",
  },
];

export function ProjekteSection() {
  return (
    <section aria-label="Ausgewählte Projekte" className="bg-off-white px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="flex max-w-xl flex-wrap items-end justify-between gap-x-6 gap-y-3">
          <div>
            <h2 className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
              Ausgewählte Projekte
            </h2>
            <BrandTick className="mt-4 h-4 w-2.5 text-charcoal/20" />
          </div>
          <div className="flex items-center gap-2 text-charcoal/75">
            <span className="text-[12px] font-medium tracking-wide">
              {siteConfig.rating.value.toFixed(1).replace(".", ",")} · {siteConfig.rating.count}{" "}
              Google-Bewertungen
            </span>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-3">
          {projekte.map((projekt, i) => (
            <Reveal key={projekt.name} delay={i * 0.05}>
              <Link href={`/case-studies#${projekt.slug}`} className="group block">
                <div className={`relative aspect-4/3 w-full overflow-hidden ${projekt.imageBg}`}>
                  <Image
                    src={projekt.image}
                    alt={projekt.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className={
                      projekt.imageFit === "contain"
                        ? "object-contain p-8 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        : "object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    }
                  />
                </div>
                <h3 className="mt-6 text-[19px] font-medium text-charcoal">{projekt.name}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-charcoal/75">{projekt.ergebnis}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-medium tracking-wide text-charcoal/70 transition-colors group-hover:text-deep-forest">
                  Ganze Case Study ansehen
                  <BrandArrow aria-hidden className="size-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
