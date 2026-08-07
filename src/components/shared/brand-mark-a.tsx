import { cn } from "@/lib/utils";

type BrandMarkAProps = {
  className?: string;
};

/**
 * Die exakte Silhouette des "A" aus der AR-Wortmarke — keine Näherung,
 * sondern die echten Ankerpunkte aus der Originaldatei ("Logo Neu.svg",
 * offizieller Export mit beiden Buchstaben als saubere Vektorpfade), auf ein
 * 0–0-Koordinatensystem normalisiert. Schwesterkomponente zu BrandMarkR.
 * Gedacht für große, sehr ruhige Hintergrundflächen (Signature-Element),
 * nicht als Icon — Deckkraft/Farbe wird über className/currentColor gesteuert.
 */
export function BrandMarkA({ className }: BrandMarkAProps) {
  return (
    <svg
      viewBox="0 0 694.2 983.5"
      aria-hidden
      className={cn("fill-current", className)}
    >
      <path d="M 694.20,396.90 L 586.70,396.20 L 491.90,216.50 L 113.50,983.50 L 0.00,982.70 L 433.10,104.90 L 484.80,0.00 L 543.70,111.60 Z" />
    </svg>
  );
}
