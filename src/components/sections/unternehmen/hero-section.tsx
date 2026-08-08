import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

/**
 * Unternehmen · Hero. Übernimmt die Bildsprache der Startseite (großes,
 * ruhiges Foto, kein Video) statt sie neu zu erfinden — die Seite soll sich
 * wie das nächste Kapitel derselben Geschichte anfühlen, nicht wie eine neue
 * Unterseite. Bewusst kein Glass-Panel wie im Hero der Startseite: dort
 * transportiert es die Markenidee, hier reicht die ruhige Headline direkt
 * auf dem Bild — kein zweites Mal dasselbe Signature-Element, sondern
 * derselbe Grundton in einer eigenen, einfacheren Form.
 *
 * Bild: Kameraobjektiv-Detail (Cine-Prime-Objektiv, warmes Bokeh) statt
 * eines künstlichen Logo-Mockups oder eines zu klein gerenderten Brand-
 * Board-Crops (frühere Versionen wirkten "verpixelt"/"billig", siehe
 * Feedback). Handwerk und Ausrüstung stehen hier für Professionalität,
 * ohne bereits ein konkretes Projekt vorwegzunehmen.
 */
export function HeroSection() {
  return (
    <section
      aria-label="Marketing für Unternehmen, die mehr können, als sie zeigen"
      className="relative flex h-[85svh] min-h-[520px] w-full items-end overflow-hidden bg-deep-forest"
    >
      <Image
        src="/images/unternehmen/hero-kamera.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/95 via-deep-forest/35 to-deep-forest/10" />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 pb-24 lg:px-10 lg:pb-32">
        <p className="text-[11px] font-medium tracking-[0.16em] text-off-white/60 uppercase">
          Unternehmen
        </p>
        <h1 className="mt-5 max-w-3xl font-serif text-[clamp(1.75rem,4.8vw,3.25rem)] leading-[1.15] text-off-white italic">
          Die meisten Unternehmen wirken kleiner, als sie sind.
        </h1>
        <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-off-white/75">
          Wir zeigen, was dein Unternehmen bereits ausmacht, bevor wir auch
          nur ein Bild gestalten.
        </p>
        <Link
          href="/kontakt/projekt-besprechen"
          className="group mt-7 inline-flex items-center gap-2 text-[14px] font-medium tracking-wide text-off-white/85 transition-colors hover:text-off-white"
        >
          <span className="relative pb-0.5">
            Projekt besprechen
            <span
              aria-hidden
              className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-off-white transition-transform duration-300 ease-out group-hover:scale-x-100"
            />
          </span>
          <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>

      <div className="absolute inset-x-0 bottom-6 flex flex-col items-center gap-2 text-off-white/70 lg:bottom-8">
        <span className="text-[11px] tracking-[0.16em] uppercase">Entdecken</span>
        <ChevronDown aria-hidden className="size-4 animate-bounce" />
      </div>
    </section>
  );
}
