import * as React from "react";

type BrandMenuProps = React.SVGProps<SVGSVGElement>;

/** Ersetzt lucide-react Menu (mobiler Navigations-Trigger). */
export function BrandMenu(props: BrandMenuProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      {...props}
    >
      <path d="M2 4h12M2 8h12M2 12h12" />
    </svg>
  );
}
