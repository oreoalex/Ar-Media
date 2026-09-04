"use client";

import Link from "next/link";
import { BrandArrow } from "@/components/shared/brand-arrow";

/**
 * Route-Error-Boundary (Next.js App Router, muss Client Component sein).
 * Bewusst ohne Reveal/Motion und ohne Abhängigkeit von anderen
 * Seiten-Komponenten: Ein Fehlerbildschirm soll so robust wie möglich
 * rendern, unabhängig davon, was den Fehler weiter oben ausgelöst hat.
 * Gleiche Typografie/Ton wie 404, aber mit einem echten "erneut versuchen"
 * statt nur einem Link, da ein serverseitiger/temporärer Fehler oft durch
 * einen simplen Retry verschwindet.
 */
export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="flex min-h-[70svh] items-center bg-off-white px-6 py-24">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-[11px] font-medium tracking-[0.16em] text-charcoal/75 uppercase">
          Ein Fehler ist aufgetreten
        </p>
        <h1 className="mt-6 font-serif text-[clamp(1.75rem,4.4vw,2.75rem)] leading-[1.2] text-charcoal italic">
          Das hat gerade nicht funktioniert.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-[16px] leading-relaxed text-charcoal/70">
          Etwas ist auf unserer Seite schiefgelaufen, nicht bei dir. Ein erneuter Versuch löst das
          meistens schon.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
          <button
            type="button"
            onClick={() => reset()}
            className="group inline-flex items-center gap-2 text-[15px] font-medium tracking-wide text-charcoal transition-colors hover:text-deep-forest"
          >
            <span className="relative pb-0.5">
              Erneut versuchen
              <span
                aria-hidden
                className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-100 bg-charcoal/30 transition-colors duration-300 ease-out group-hover:bg-deep-forest"
              />
            </span>
            <BrandArrow aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
          </button>

          <Link
            href="/"
            className="text-[14px] tracking-wide text-charcoal/70 underline decoration-charcoal/25 underline-offset-4 transition-colors hover:text-deep-forest hover:decoration-deep-forest"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}
