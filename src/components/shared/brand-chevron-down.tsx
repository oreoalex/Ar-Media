import * as React from "react";

type BrandChevronDownProps = React.SVGProps<SVGSVGElement>;

/**
 * Ersetzt lucide-react ChevronDown (Akkordeon-Trigger, Select-Pfeil,
 * Mega-Menü-Indikator, Hero-Scroll-Cue). Dieselbe Strichstärke/-form wie
 * BrandArrow/BrandTick, damit alle Interface-Icons zur selben Familie
 * gehören statt eine fremde Bibliothek neben den eigenen Marken-Icons zu
 * mischen.
 */
export function BrandChevronDown(props: BrandChevronDownProps) {
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
      <path d="M4 6 8 10 12 6" />
    </svg>
  );
}
