import { cn } from "@/lib/utils";

type BrandMarkRProps = {
  className?: string;
};

/**
 * Die exakte Silhouette des "R" aus der AR-Wortmarke — Originalpfad aus
 * "Logo Neu.svg" (Export des Studios, enthält beide Buchstaben als saubere
 * Vektorpfade), unverändert übernommen und per Transform auf 0–0 verschoben.
 * Schwesterkomponente zu BrandMarkA — beide teilen dieselbe Kapitalhöhe
 * (983.48 Einheiten), da sie im Original auf derselben Grundlinie sitzen.
 */
export function BrandMarkR({ className }: BrandMarkRProps) {
  return (
    <svg
      viewBox="0 0 880.7 983.48"
      aria-hidden
      className={cn("fill-current", className)}
    >
      <g transform="translate(-876.11, -159.61)">
        <path d="M1465.87,738.21c-11.13,0-22.12-.62-32.94-1.85l1.07,1.85,234.05,404.88h-111.34l-234.04-404.88h-141.6l-197.65,404.88h-107.31l197.65-404.88,39.51-80.92h344.17c17.33,0,34.19-2.1,50.32-6.07,91.44-22.41,159.25-104.47,159.25-202.33,0-115.06-93.83-208.36-209.57-208.36h-191.14l-42.71-80.92h242.28c78.34,0,149.49,30.82,201.81,80.92,54.94,52.59,89.13,126.49,89.13,208.36s-34.19,155.81-89.13,208.4c-52.32,50.1-123.47,80.92-201.81,80.92Z" />
      </g>
    </svg>
  );
}
