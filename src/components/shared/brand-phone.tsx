import * as React from "react";

type BrandPhoneProps = React.SVGProps<SVGSVGElement>;

/**
 * Ersetzt lucide-react Phone (kontaktmoeglichkeiten-section.tsx). Bewusst
 * ein schlichtes Smartphone-Rechteck statt der klassischen Hörer-Silhouette
 * (die bräuchte Rundungen, die sonst nirgends im Icon-Satz vorkommen) — so
 * bleibt die Linienführung durchgehend geometrisch wie bei BrandMail/
 * BrandMapPin.
 */
export function BrandPhone(props: BrandPhoneProps) {
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
      <rect x="4.5" y="1" width="7" height="14" rx="1.5" />
      <path d="M6.5 12.5h3" />
    </svg>
  );
}
