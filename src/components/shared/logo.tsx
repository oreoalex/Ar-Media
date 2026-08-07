import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** Helle Reverse-Variante für dunkle Flächen (Deep Forest, Bildüberlagerungen) */
  dark?: boolean;
  /** "mark" = nur Monogramm (kompakt, z. B. Header), "full" = Monogramm + AR MEDIA */
  variant?: "mark" | "full";
  href?: string;
};

const sources = {
  mark: { normal: "/logo-mark.png", light: "/logo-mark-light.png", ratio: 1293 / 1122 },
  full: { normal: "/logo-full.png", light: "/logo-full-light.png", ratio: 2271 / 1672 },
};

/**
 * Echtes Vektor-Logo, extrahiert aus "Logo Neu.ai" (verborgene Ebene 1).
 * Bewusst ohne Subline ("Visual Storvtelling" enthält einen Tippfehler
 * in der Ausgangsdatei) — nur Monogramm bzw. Monogramm + Wortmarke.
 */
export function Logo({ className, dark, variant = "mark", href = "/" }: LogoProps) {
  const source = sources[variant];
  return (
    <Link href={href} className={cn("block", className)}>
      <Image
        src={dark ? source.light : source.normal}
        alt="AR Media"
        width={300}
        height={Math.round(300 / source.ratio)}
        priority
        className="h-auto w-full"
      />
    </Link>
  );
}
