import * as React from "react";

type BrandCloseProps = React.SVGProps<SVGSVGElement>;

/** Ersetzt lucide-react X (mobiler Navigations-Schließen-Button). */
export function BrandClose(props: BrandCloseProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      {...props}
    >
      <path d="M4 4 12 12M12 4 4 12" />
    </svg>
  );
}
