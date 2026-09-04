import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/lib/site-config";

/**
 * Warum Menschen wiederkommen. Dunkler Rhythmus-Bruch (Pendant zu
 * "Unterschied" bei Unternehmen, hier bewusst an der emotionalen statt der
 * positionierenden Stelle platziert). Bewusst "Gedanken", keine
 * Testimonials mit Namen/Foto — anonyme, unfertige Sätze wirken
 * glaubwürdiger als polierte Empfehlungen und behaupten keine konkrete,
 * nicht verifizierbare Einzelperson. Die erste Zeile greift die Diagnose
 * aus der Beobachtung-Section bewusst wieder auf, aber in eigenen Worten,
 * damit sie als Antwort und nicht als Wiederholung liest.
 *
 * UX-Audit-Fund P2.9: visuell (kursives Serif-Zitat + Sterne-Widget direkt
 * darunter) war das von echten Kundenzitaten nicht zu unterscheiden, obwohl
 * es das bewusst nicht sein soll. Die kleine Unterzeile unter der Überschrift
 * macht das jetzt explizit, ohne die emotionale Wirkung der Sätze selbst zu
 * schwächen.
 */
const stimmen = [
  "Ich war überzeugt, dass ich auf Fotos einfach nicht gut wirke.",
  "Zum ersten Mal mag ich Bilder von mir wirklich.",
  "Es fühlte sich nie wie ein Fotoshooting an. Eher wie ein guter Nachmittag, bei dem nebenbei fotografiert wurde.",
];

export function StimmenSection() {
  return (
    <section aria-label="Warum Menschen wiederkommen" className="bg-deep-forest px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <h2 className="text-[11px] font-medium tracking-[0.14em] text-off-white/60 uppercase">
            Warum Menschen wiederkommen
          </h2>
          <p className="mt-3 text-[13px] text-off-white/55">
            Typische Reaktionen aus echten Shootings, in eigenen Worten zusammengefasst
          </p>
        </Reveal>

        <div className="mt-12 space-y-10 lg:mt-16 lg:space-y-12">
          {stimmen.map((satz, i) => (
            <Reveal key={satz} delay={i * 0.1} variant="fade">
              <p className="font-serif text-[clamp(1.25rem,3vw,1.75rem)] leading-[1.4] font-bold tracking-tight text-off-white">
                „{satz}“
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-14 flex items-center justify-center gap-2 border-t border-off-white/10 pt-10 lg:mt-16">
            <span className="text-[12px] font-medium tracking-wide text-off-white/60">
              {siteConfig.rating.value.toFixed(1).replace(".", ",")} · {siteConfig.rating.count}{" "}
              Google-Bewertungen
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
