import { Reveal } from "@/components/shared/reveal";
import { BrandTick } from "@/components/shared/brand-tick";
import { GhostNumeral } from "@/components/shared/ghost-numeral";

/**
 * Der Ablauf einer Zusammenarbeit, bewusst getrennt von "Wie wir arbeiten"
 * auf den Unternehmen-Seiten (das beschreibt den Arbeitsprozess innerhalb
 * eines Projekts, Beobachten → Verstehen → Gestalten → Sichtbar machen).
 * Hier geht es um die Beziehung selbst, vom ersten Kontakt bis zur
 * laufenden Zusammenarbeit, deshalb fünf eigene, andere Schritte.
 * Dieselbe minimalistische Nummern-Grid-Optik wie überall sonst, keine
 * Agentur-Prozessgrafik mit Pfeilen oder Icons.
 */
const schritte = [
  { title: "Anfrage", text: "Eine kurze Nachricht reicht, über das passende Formular oder direkt per Mail." },
  { title: "Kennenlernen", text: "Ein erstes, unverbindliches Gespräch, persönlich, telefonisch oder per Video." },
  { title: "Strategie", text: "Wir entwickeln gemeinsam, was dein Projekt wirklich braucht, kein Standardpaket." },
  { title: "Umsetzung", text: "Gestaltung, Fotografie oder Content, je nachdem, was vereinbart wurde." },
  { title: "Begleitung", text: "Viele Zusammenarbeiten enden nicht mit der Abgabe, sondern werden zu einer laufenden Partnerschaft." },
];

export function AblaufSection() {
  return (
    <section aria-label="Der Ablauf" className="bg-off-white px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-xl">
          <h2 className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">Der Ablauf</h2>
          <BrandTick className="mt-4 h-4 w-2.5 text-charcoal/20" />
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-5">
          {schritte.map((schritt, i) => (
            <div key={schritt.title} className="relative isolate">
              <GhostNumeral n={i + 1} className="text-deep-forest/[0.07]" />
              <Reveal delay={i * 0.06} className="relative z-10">
                <p className="text-[13px] tracking-wide text-charcoal/70">{`0${i + 1}`}</p>
                <h3 className="mt-3 text-[18px] font-medium text-charcoal">{schritt.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">{schritt.text}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
