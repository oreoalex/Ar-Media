import Link from "next/link";
import { Reveal } from "@/components/shared/reveal";

const paths = [
  { href: "/unternehmen", label: "Unternehmen" },
  { href: "/fotografie", label: "Fotografie" },
  { href: "/kita-schule", label: "Kita & Schule" },
];

/**
 * Schluss. Bewusst kein CTA im Stil der drei Funnel-Seiten (kein
 * "Nachricht schreiben", kein Formular-Link): diese Seite verkauft eine
 * Überzeugung, keinen Termin. Die drei Links führen zurück in die
 * Seiten, die die Überzeugung jeweils konkret einlösen. Bewusst ohne
 * Markenclaim als Signatur: "what's already there" bleibt exklusiv der
 * Startseite vorbehalten, "how good you look" gehört zur Fotografie- und
 * inzwischen zur Kita-Seite, ein dritter Claim wurde hier nicht erfunden.
 */
export function SchlussSection() {
  return (
    <section aria-label="Schluss" className="bg-off-white px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal variant="fade">
          <p className="font-serif text-[clamp(1.5rem,3.2vw,2rem)] leading-[1.3] text-charcoal italic">
            Marketing, Fotografie, Kitafotografie: drei Wege, dieselbe Überzeugung.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:gap-x-14">
            {paths.map((path) => (
              <li key={path.href}>
                <Link
                  href={path.href}
                  className="group relative pb-1 text-[15px] tracking-[0.04em] text-charcoal/70 uppercase transition-colors hover:text-deep-forest sm:text-[16px]"
                >
                  {path.label}
                  <span aria-hidden className="ml-2 inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">
                    →
                  </span>
                  <span
                    aria-hidden
                    className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-deep-forest transition-transform duration-300 ease-out group-hover:scale-x-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
