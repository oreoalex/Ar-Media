import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/shared/reveal";
import { BrandArrow } from "@/components/shared/brand-arrow";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  robots: { index: false, follow: true },
};

const links = [
  { href: "/unternehmen", label: "Unternehmen" },
  { href: "/fotografie", label: "Fotografie" },
  { href: "/kita-schule", label: "Kita & Schule" },
  { href: "/case-studies", label: "Case Studies" },
];

/**
 * 404. Bewusst kein technischer Fehlerbildschirm, sondern derselbe ruhige,
 * editoriale Ton wie der Rest der Seite, nur mit einem kleinen, ehrlichen
 * Augenzwinkern in der Formulierung statt eines generischen "Seite nicht
 * gefunden". Kein Bild, keine Animationen außer dem üblichen Reveal, das
 * die ganze Seite trägt.
 */
export default function NotFound() {
  return (
    <div className="flex min-h-[70svh] items-center bg-off-white px-6 py-24">
      <div className="mx-auto max-w-xl text-center">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.16em] text-charcoal/75 uppercase">404</p>
          <h1 className="mt-6 font-serif text-[clamp(1.75rem,4.4vw,2.75rem)] leading-[1.2] text-charcoal italic">
            Diese Seite haben wir noch nicht sichtbar gemacht.
          </h1>
          <p className="mx-auto mt-6 max-w-md text-[16px] leading-relaxed text-charcoal/70">
            Der Link ist entweder veraltet oder es hat sich ein Tippfehler eingeschlichen. Von
            hier aus geht es weiter.
          </p>

          <Link
            href="/"
            className="group mt-9 inline-flex items-center gap-2 text-[15px] font-medium tracking-wide text-charcoal transition-colors hover:text-deep-forest"
          >
            <span className="relative pb-0.5">
              Zur Startseite
              <span
                aria-hidden
                className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-100 bg-charcoal/30 transition-colors duration-300 ease-out group-hover:bg-deep-forest"
              />
            </span>
            <BrandArrow aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-charcoal/10 pt-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[13px] tracking-wide text-charcoal/70 uppercase transition-colors hover:text-deep-forest"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  );
}
