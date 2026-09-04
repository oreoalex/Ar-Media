import * as React from "react";

type BrandArrowUpRightProps = React.SVGProps<SVGSVGElement>;

/**
 * Steilere Schwester von BrandArrow (45° statt ~37°, kürzere Pfeilspitzen-
 * Flanken) — markiert "verlässt die Seite" (bisher lucide-react
 * ArrowUpRight), z. B. der externe Hochzeitsfotograf-Verweis in
 * fotografie/leistungen-section.tsx. Der Winkel-Unterschied zu BrandArrow
 * ist bewusst, nicht nur Geschmack: "weiter auf der Seite" und "verlässt
 * die Seite" müssen auf einen Blick unterscheidbar bleiben.
 */
export function BrandArrowUpRight(props: BrandArrowUpRightProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 12 12 4M12 4H7M12 4v5" />
    </svg>
  );
}
