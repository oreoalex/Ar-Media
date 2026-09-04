import * as React from "react";

type BrandMailProps = React.SVGProps<SVGSVGElement>;

/** Ersetzt lucide-react Mail (kontaktmoeglichkeiten-section.tsx). */
export function BrandMail(props: BrandMailProps) {
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
      <rect x="1.5" y="3" width="13" height="10" rx="1" />
      <path d="M14.5 4.5 8 8.5 1.5 4.5" />
    </svg>
  );
}
