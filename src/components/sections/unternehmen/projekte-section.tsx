import Image from "next/image";
import { Star } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/lib/site-config";

/**
 * Ausgewählte Projekte. Keine Bildergalerie, sondern drei kuratierte
 * Referenzen mit knapper Dramaturgie (Ausgangssituation → Strategie →
 * Umsetzung → Ergebnis) statt bloßer Bildunterschrift — macht aus
 * "AR Media zeigt Bilder" "AR Media löst Probleme". Alle Angaben stammen
 * direkt vom Studio, keine erfundenen Kennzahlen oder Zitate.
 *
 * Trägt zusätzlich das reale Google-Bewertungssignal (bislang nur auf der
 * Startseite genutzt) als leises Vertrauenselement direkt neben der
 * Kicker-Zeile — verstärkt Vertrauen an der Stelle, wo zwei von drei
 * Referenzen (noch) keine harte Kennzahl im Ergebnis tragen, ohne dort
 * etwas zu erfinden.
 */
const projekte = [
  {
    name: "Saat für den Norden",
    image: "/images/unternehmen/saat-vorher-nachher.jpg",
    imageFit: "contain" as const,
    imageBg: "bg-[#f4f2ee]",
    alt: "Saat für den Norden: Signet vor und nach der Überarbeitung",
    stages: [
      { label: "Ausgangssituation", text: "Das bestehende Zeichen wirkte zart und blieb im Alltag kaum im Gedächtnis." },
      { label: "Strategie", text: "Die Symbolik des Ahornsamens (Flügel, Wachstum, Wurzel) auf ihre Essenz reduzieren." },
      { label: "Umsetzung", text: "Neues Signet, kräftigere Wortmarke, eine Farbwelt über Fahrzeug, Beschilderung und Print hinweg." },
      { label: "Ergebnis", text: "Eine Marke, die auf den ersten Blick wiedererkennbar ist, vom Firmenwagen bis zur Visitenkarte." },
    ],
  },
  {
    name: "Zeltlager Adlerhorst",
    image: "/images/unternehmen/adlerhorst-vorher-nachher.jpg",
    imageFit: "contain" as const,
    imageBg: "bg-[#f4f2ee]",
    alt: "Zeltlager Adlerhorst: Logo vor und nach der Überarbeitung",
    stages: [
      { label: "Ausgangssituation", text: "Ein Adler-Maskottchen, das es seit rund 50 Jahren gibt: handgezeichnet, aber auf modernen Kanälen kaum mehr einsetzbar." },
      { label: "Strategie", text: "Das vertraute Zeichen nicht ersetzen, sondern in ein zeitgemäßes, konsistentes System überführen." },
      { label: "Umsetzung", text: "Neu illustrierter Adler, hexagonales Bildraster, laufende Social-Media- und Kampagnenbetreuung." },
      { label: "Ergebnis", text: "Von der Helfersuche bis zum Jubiläum trägt jetzt eine durchgängige, wiedererkennbare Stimme." },
    ],
  },
  {
    name: "Royal Charming",
    image: "/images/unternehmen/royal-charming-icon.jpg",
    imageFit: "cover" as const,
    imageBg: "bg-[#5c0f1f]",
    alt: "Royal Charming, offizielles Markenlogo",
    stages: [
      { label: "Ausgangssituation", text: "Eine junge Marke ohne durchgängigen Auftritt zwischen Logo, Social Media und Print." },
      { label: "Strategie", text: "Ein Gesamtsystem statt einzelner Bausteine." },
      { label: "Umsetzung", text: "Von der Gründung über die Läufigkeit der Zuchthündin bis zur Geburt begleitet, mit Logo, Social-Media-Content, Website und Print aus einer Hand." },
      { label: "Ergebnis", text: "Alle 9 Welpen innerhalb von 8 Wochen erfolgreich vermittelt, allein über Website und Social Media, vor allem Instagram." },
    ],
  },
];

export function ProjekteSection() {
  return (
    <section aria-label="Ausgewählte Projekte" className="bg-off-white px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="flex max-w-xl flex-wrap items-end justify-between gap-x-6 gap-y-3">
          <div>
            <h2 className="text-[11px] font-medium tracking-[0.14em] text-charcoal/45 uppercase">
              Ausgewählte Projekte
            </h2>
            <span aria-hidden className="mt-4 block h-px w-8 bg-charcoal/20" />
          </div>
          <div className="flex items-center gap-2 text-charcoal/45">
            <span className="flex items-center gap-0.5" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3 fill-sand text-sand" />
              ))}
            </span>
            <span className="text-[12px] tracking-wide">
              {siteConfig.rating.value.toFixed(1).replace(".", ",")} · {siteConfig.rating.count}{" "}
              Google-Bewertungen
            </span>
          </div>
        </Reveal>

        <div className="mt-14 space-y-20 lg:space-y-28">
          {projekte.map((projekt, i) => (
            <Reveal key={projekt.name} delay={i * 0.05}>
              <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-16">
                <div
                  className={`relative aspect-4/3 w-full overflow-hidden ${projekt.imageBg} ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={projekt.image}
                    alt={projekt.alt}
                    fill
                    sizes="(min-width: 1024px) 420px, 100vw"
                    className={projekt.imageFit === "contain" ? "object-contain p-10" : "object-cover"}
                  />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <h3 className="text-[22px] font-medium text-charcoal lg:text-[26px]">{projekt.name}</h3>
                  <dl className="mt-8 grid gap-6 sm:grid-cols-2">
                    {projekt.stages.map((stage) => (
                      <div key={stage.label}>
                        <dt className="text-[11px] font-medium tracking-[0.12em] text-charcoal/40 uppercase">
                          {stage.label}
                        </dt>
                        <dd className="mt-2 text-[15px] leading-relaxed text-charcoal/75">{stage.text}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
