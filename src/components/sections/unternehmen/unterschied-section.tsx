import { Reveal } from "@/components/shared/reveal";

/**
 * Der Unterschied zu klassischen Agenturen. Bewusst der dunkle Gegenpol zur
 * hellen Leistungen-Section davor — Dramaturgie/Rhythmus laut Vorgabe
 * (Hell. Dunkel.), nicht jeder Abschnitt darf gleich aussehen. Reine
 * Haltungs-Aussage, keine Vergleichstabelle — das würde wieder wie ein
 * Leistungskatalog wirken.
 */
export function UnterschiedSection() {
  return (
    <section aria-label="Der Unterschied zu klassischen Agenturen" className="bg-deep-forest px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal variant="fade">
          <h2 className="font-serif text-[clamp(1.375rem,3.4vw,2rem)] leading-[1.4] font-bold tracking-tight text-off-white">
            Wir sind keine Werbeagentur. Keine Marketingagentur.
            Kein Fotograf.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-8">
          <p className="text-[16px] leading-relaxed text-off-white/70 lg:text-[17px]">
            Klassische Agenturen verkaufen Pakete. Wir verstehen zuerst dein
            Unternehmen und entscheiden erst danach, was es wirklich
            braucht: Strategie, Markenidentität, Corporate Design,
            Fotografie, Video, Content oder Social Media. Alles folgt
            derselben Idee. Sichtbarkeit.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
