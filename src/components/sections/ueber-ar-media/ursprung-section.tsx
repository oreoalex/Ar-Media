import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/lib/site-config";

/**
 * Wie es begann. Einzige Section mit Foto auf dieser Seite, bewusst hier
 * platziert statt im Hero: das Bild gehört inhaltlich zum Ursprung, nicht
 * zu einer werblichen Eröffnung. Bewusst keine Jahreszahlen, keine
 * Chronologie, nur die Beobachtung selbst, exakt wie im Auftrag vorgegeben.
 */
export function UrsprungSection() {
  return (
    <section aria-label="Wie es begann" className="bg-off-white px-6 py-24 lg:py-32">
      <div className="mx-auto grid max-w-4xl items-center gap-10 lg:grid-cols-[1fr_280px] lg:gap-16">
        <Reveal>
          <h2 className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
            Der Ursprung
          </h2>
          <span aria-hidden className="mt-4 block h-px w-8 bg-charcoal/20" />
          <p className="mt-6 max-w-lg text-[18px] leading-relaxed text-charcoal/80 lg:text-[19px]">
            Es begann nicht mit einer Kamera. Es begann damit, dass jemand schwanger wurde.{" "}
            {siteConfig.founder.name} wollte Momente festhalten, die nicht zurückkommen, das
            erste Zögern, das erste Lachen, alles, was sonst nur in der Erinnerung bleibt,
            ungenau, mit der Zeit verblassend. Aus diesem Wunsch wurde eine Gewohnheit. Aus der
            Gewohnheit eine Fähigkeit. In der ehrenamtlichen Arbeit mit Kindern zeigte sich
            dann, wie viel Freude natürliche Kinderfotografie ihm wirklich bereitet, keine
            Pose, kein Kommando, nur der Moment, wie er tatsächlich war.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative aspect-3/4 w-full overflow-hidden">
            <Image
              src="/images/home/founder-alexander.jpg"
              alt={siteConfig.founder.name}
              fill
              sizes="(min-width: 1024px) 280px, 60vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
