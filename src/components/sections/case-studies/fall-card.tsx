import { Reveal } from "@/components/shared/reveal";
import { GhostNumeral } from "@/components/shared/ghost-numeral";

type Stage = {
  label: string;
  text: string;
};

type FallCardProps = {
  index: string;
  name: string;
  domain: string;
  stages: [Stage, Stage, Stage, Stage, Stage, Stage];
  media: React.ReactNode;
  reverse?: boolean;
  /**
   * "side" (Standard): Bild neben dem 2-spaltigen Textraster, wie bei den
   * anderen vier Fallstudien. "wide": Bild volle Breite über einem
   * 3-spaltigen Textraster, reserviert für die AR-Media-Fallstudie, die
   * bewusst umfangreicher ist (eigener Prozess-Streifen statt eines
   * einzelnen Vorher/Nachher-Bildpaares).
   */
  layout?: "side" | "wide";
  /**
   * Tatsächlich erbrachte Leistungen, knapp und ohne Wertung. Bewusst nur
   * eine leise Textzeile, keine Badges/Icons/Boxen: an dieser Stelle soll
   * nichts zusätzlich beworben werden, nur präzise benannt sein, was im
   * Projekt wirklich gemacht wurde.
   */
  leistungen: string[];
  /**
   * Anker-ID für Deep-Links von den Unternehmen-Leistungsseiten (z. B.
   * /case-studies#saat), damit dort gezielt auf das jeweils relevanteste
   * Projekt verwiesen werden kann statt pauschal auf die ganze Seite.
   */
  id?: string;
};

/**
 * Eine Fallstudie im strikten 6-Teile-Format (Ausgangssituation,
 * Beobachtung, Strategie, Umsetzung, Ergebnis, Learnings) statt der
 * 4-teiligen Kurzform aus der Unternehmen-Seite. "Beobachtung" und
 * "Learnings" sind hier neu: Sie erklären, was AR Media im Projekt erkannt
 * bzw. daraus mitgenommen hat, nicht nur was gemacht wurde und wobei
 * herauskam. media ist bewusst ein freier ReactNode statt eines starren
 * Bildprops, da jedes Projekt eine andere Bildform braucht (Vorher/Nachher-
 * Komposit, Bildpaar, Einzelbild, oder bei layout="wide" ein Prozess-Streifen).
 */
export function FallCard({ index, name, domain, stages, media, reverse = false, layout = "side", leistungen, id }: FallCardProps) {
  const header = (
    <>
      <div className="flex items-baseline gap-3">
        <span className="text-[13px] tracking-[0.12em] text-charcoal/70">{index}</span>
        <p className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">{domain}</p>
      </div>
      <h2 className="mt-4 text-[26px] font-medium tracking-[-0.01em] text-charcoal lg:text-[30px]">{name}</h2>
    </>
  );

  const leistungenLine = (
    <p className="mt-10 text-[12px] tracking-[0.06em] text-charcoal/70">
      Leistungen — {leistungen.join(" · ")}
    </p>
  );

  /**
   * Jede Stage bekommt ihr eigenes, leicht gestaffeltes Reveal statt einem
   * einzigen Block-Reveal für die ganze dl: das führt den Blick Zeile für
   * Zeile durch die Dramaturgie (Ausgangssituation → … → Learnings), statt
   * dass der gesamte Textblock auf einmal "aufklappt". Bewusst kleine
   * Schrittweite (0.04s) und dieselbe Reveal-Kurve wie überall sonst auf der
   * Seite, keine neue Animationssprache.
   */
  const stageList = (baseDelay: number, columns: "two" | "three") => (
    <dl
      className={
        columns === "three"
          ? "mt-8 grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-3"
          : "mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2"
      }
    >
      {stages.map((stage, i) => (
        <Reveal key={stage.label} delay={baseDelay + i * 0.04} className="relative isolate">
          <GhostNumeral
            n={i + 1}
            className="-top-1 text-[52px] text-deep-forest/[0.06] lg:-top-2 lg:text-[72px]"
          />
          <dt className="relative z-10 text-[11px] font-medium tracking-[0.12em] text-charcoal/70 uppercase">
            {stage.label}
          </dt>
          <dd className="relative z-10 mt-2 text-[15px] leading-relaxed text-charcoal/75">{stage.text}</dd>
        </Reveal>
      ))}
    </dl>
  );

  if (layout === "wide") {
    return (
      <div id={id} className="scroll-mt-28 lg:scroll-mt-32">
        <Reveal>{media}</Reveal>
        <Reveal delay={0.08} className="mt-14">
          {header}
        </Reveal>
        {stageList(0.14, "three")}
        <Reveal delay={0.14 + stages.length * 0.04}>{leistungenLine}</Reveal>
      </div>
    );
  }

  return (
    <div id={id} className="scroll-mt-28 grid items-center gap-10 lg:scroll-mt-32 lg:grid-cols-[minmax(0,460px)_1fr] lg:gap-20">
      <Reveal className={reverse ? "lg:order-2" : ""}>{media}</Reveal>

      <div className={reverse ? "lg:order-1" : ""}>
        <Reveal delay={0.08}>{header}</Reveal>
        {stageList(0.14, "two")}
        <Reveal delay={0.14 + stages.length * 0.04}>{leistungenLine}</Reveal>
      </div>
    </div>
  );
}
