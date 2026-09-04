import { cn } from "@/lib/utils";

type GhostNumeralProps = {
  /** Zahl oder vorformatiertes Label, z. B. 1 oder "01". */
  n: number | string;
  className?: string;
};

/**
 * Große, blasse Ziffer hinter einem Listenelement — macht die Reihenfolge
 * selbst zum Gestaltungselement statt sie in einem kleinen 13px-Kicker zu
 * verstecken ("laut & mutig"-Punkt aus dem Referenz-Review). Reines Dekor:
 * aria-hidden, pointer-events-none, liegt über -z-10 hinter dem Inhalt des
 * Elternelements (braucht dafür selbst `relative`). Farbe/Deckkraft kommt
 * bewusst per className von der Einsatzstelle, nicht als Variant-Prop —
 * dieselbe Zahl sitzt auf hellen wie dunklen Sektionen mit ganz
 * unterschiedlichen Werten (z. B. text-deep-forest/[0.06] vs.
 * text-off-white/[0.08]).
 */
export function GhostNumeral({ n, className }: GhostNumeralProps) {
  const label = typeof n === "number" ? String(n).padStart(2, "0") : n;
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute -top-3 -left-1 -z-10 font-serif text-[92px] leading-none font-bold select-none lg:-top-5 lg:text-[128px]",
        className,
      )}
    >
      {label}
    </span>
  );
}
