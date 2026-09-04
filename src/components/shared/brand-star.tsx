import { cn } from "@/lib/utils";

type BrandStarProps = {
  className?: string;
};

/**
 * Ersetzt lucide-react Star (Google-Bewertungssterne, review-banner.tsx).
 * Sauberer, regelmäßiger Fünfzack statt Lucides leicht unregelmäßiger
 * Kontur — bewusst als klassischer Stern belassen (keine erfundene
 * Alternativform): "5 Sterne" ist eine extern etablierte Konvention
 * (Google-Bewertungen), keine Stelle für Marken-Eigensinn. Deckkraft/Farbe
 * über className + currentColor, wie BrandMarkA/BrandMarkR.
 */
export function BrandStar({ className }: BrandStarProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden
      className={cn("fill-current", className)}
    >
      <path d="M8 1 9.76 5.57 14.66 5.84 10.85 8.93 12.11 13.66 8 11 3.89 13.66 5.15 8.93 1.34 5.84 6.24 5.57Z" />
    </svg>
  );
}
