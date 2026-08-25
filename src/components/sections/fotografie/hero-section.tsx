import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

/**
 * Fotografie · Hero. Gleiches Grundprinzip wie Unternehmen-Hero (großes
 * Foto, Gradient, Headline direkt im Bild, leiser CTA-Link, Scroll-Cue),
 * aber bewusst ein unperfekter, bewegter Moment statt eines ruhigen Bilds
 * — hier geht es um Menschen, nicht um Handwerk/Ausrüstung wie bei
 * Unternehmen. Bild zeigt einen echten Lachmoment, keine Pose.
 */
export function HeroSection() {
  return (
    <section
      aria-label="Nicht schöner. Nur du."
      className="relative flex h-[85svh] min-h-[520px] w-full items-end overflow-hidden bg-deep-forest"
    >
      <Image
        src="/images/fotografie/hero-lachen.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_28%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/95 via-deep-forest/25 to-deep-forest/10" />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 pb-24 lg:px-10 lg:pb-32">
        <p className="text-[11px] font-medium tracking-[0.16em] text-off-white/60 uppercase">
          Fotografie
        </p>
        <h1 className="mt-5 max-w-2xl font-serif text-[clamp(1.75rem,4.8vw,3.25rem)] leading-[1.15] text-off-white italic">
          Nicht schöner. Nur du.
        </h1>
        <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-off-white/75">
          Fotografie beginnt nicht mit einer Kamera. Sie beginnt mit dem
          Moment, in dem du vergisst, dass jemand hinsieht. Als Fotograf in
          Kiel und Schleswig-Holstein.
        </p>
        <Link
          href="/kontakt/shooting-anfragen"
          className="group mt-7 inline-flex items-center gap-2 text-[14px] font-medium tracking-wide text-off-white/85 transition-colors hover:text-off-white"
        >
          <span className="relative pb-0.5">
            Lass uns kennenlernen
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
