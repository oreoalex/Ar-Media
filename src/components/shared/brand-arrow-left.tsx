import * as React from "react";

type BrandArrowLeftProps = React.SVGProps<SVGSVGElement>;

/**
 * Horizontal gespiegelte BrandArrow — für "Zurück"-Links (bisher überall
 * lucide-react ArrowLeft). Exakt derselbe ~37°-Schwung und dieselbe
 * L-förmige Pfeilspitze wie BrandArrow, nur nach links statt rechts, damit
 * beide Pfeilrichtungen als eine zusammengehörige Familie erkennbar bleiben
 * statt zwei unterschiedliche Pfeil-Grammatiken auf derselben Seite zu
 * mischen.
 */
export function BrandArrowLeft(props: BrandArrowLeftProps) {
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
      <path d="M14 11.5 4 4M4 4h6M4 4v6" />
    </svg>
  );
}
