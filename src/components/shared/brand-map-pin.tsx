import * as React from "react";

type BrandMapPinProps = React.SVGProps<SVGSVGElement>;

/**
 * Ersetzt lucide-react MapPin (kontaktmoeglichkeiten-section.tsx). Kreis
 * plus gerade Spitze statt der einteiligen Tropfenkontur — dieselbe
 * geometrische, kurvenarme Linienführung wie BrandMail/BrandPhone.
 */
export function BrandMapPin(props: BrandMapPinProps) {
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
      <circle cx="8" cy="6" r="3" />
      <path d="M5.8 8.2 8 13 10.2 8.2" />
    </svg>
  );
}
