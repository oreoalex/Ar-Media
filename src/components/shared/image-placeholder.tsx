import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  /** Kurze Beschreibung, was hier später zu sehen sein wird — kein Fülltext. */
  label: string;
  /** Bildcharakter laut Wireframe-Dokument, z.B. "Hochformat" | "Querformat" | "Detail" */
  format?: string;
  aspect?:
    | "square"
    | "portrait"
    | "landscape"
    | "wide"
    | "tall"
    | "full";
  tone?: "light" | "dark" | "sand";
  className?: string;
};

const aspectClasses: Record<NonNullable<ImagePlaceholderProps["aspect"]>, string> = {
  square: "aspect-square",
  portrait: "aspect-3/4",
  landscape: "aspect-4/3",
  wide: "aspect-16/9",
  tall: "aspect-2/3",
  full: "h-full",
};

const toneClasses: Record<NonNullable<ImagePlaceholderProps["tone"]>, string> = {
  light: "bg-off-white/40 text-charcoal/50 ring-charcoal/10",
  dark: "bg-charcoal/20 text-off-white/60 ring-off-white/15",
  sand: "bg-sand/40 text-charcoal/60 ring-charcoal/10",
};

/**
 * Ersetzt reale Fotografie, solange kein echtes Bildmaterial vorliegt.
 * Bewusst NICHT als Stockfoto oder generischer Gradient gestaltet, sondern
 * klar als Platzhalter erkennbar — Markenregel: keine Stockfotografie.
 */
export function ImagePlaceholder({
  label,
  format,
  aspect = "landscape",
  tone = "sand",
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`Bildplatzhalter: ${label}`}
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden ring-1",
        aspectClasses[aspect],
        toneClasses[tone],
        className,
      )}
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, currentColor 0, currentColor 1px, transparent 1px, transparent 14px)",
        backgroundBlendMode: "overlay",
      }}
    >
      <span className="px-4 text-center font-sans text-[11px] tracking-[0.14em] uppercase opacity-80">
        {label}
        {format ? ` · ${format}` : ""}
      </span>
    </div>
  );
}
