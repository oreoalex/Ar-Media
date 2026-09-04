import { Reveal } from "@/components/shared/reveal";
import { CtaButton } from "@/components/shared/cta-button";

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
 *
 * Auf Nutzer-Wunsch als echte Buttons statt dünner Text-Links (Konsistenz
 * sitewide) — variant="outline-dark", derselbe "mehrere gleichwertige
 * Buttons nebeneinander"-Gedanke wie die drei Schnellzugriffe im Home-Hero,
 * nur in Charcoal statt Off-White, weil diese Section hell statt dunkel ist.
 */
export function SchlussSection() {
  return (
    <section aria-label="Schluss" className="bg-off-white px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal variant="fade">
          <p className="font-serif text-[clamp(1.5rem,3.2vw,2rem)] leading-[1.3] font-bold tracking-tight text-charcoal">
            Unternehmen, Fotografie, Kita & Schule: drei Wege, dieselbe Überzeugung.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 flex flex-wrap items-center justify-center gap-4">
          {paths.map((path) => (
            <CtaButton key={path.href} href={path.href} variant="outline-dark" size="sm">
              {path.label}
            </CtaButton>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
