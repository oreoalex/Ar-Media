/**
 * Case Studies · Hero. Bildlos wie Über AR Media: diese Seite ist der
 * bereichsübergreifende Proof-Hub laut IA v2.0, kein weiterer Funnel-Einstieg
 * mit großem Foto. Die H1 ist die bereits an anderer Stelle vorgeschlagene
 * und angenommene Zeile, sie beschreibt in einem Satz, was jede der
 * folgenden Fallstudien strukturell leistet.
 *
 * Bewusst knapper bemessen als ein klassischer Seiten-Hero (kein volles
 * Viewport-Polster oben/unten): der Anfang der ersten Fallstudie soll beim
 * Laden bereits sichtbar anklingen, das erzeugt Neugier und einen direkten
 * Sog ins Scrollen, statt dass die Seite mit einem isolierten Hero-Screen
 * beginnt.
 */
export function HeroSection() {
  return (
    <section aria-label="Case Studies" className="bg-off-white px-6 pt-24 pb-6 lg:pt-32 lg:pb-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[11px] font-medium tracking-[0.16em] text-charcoal/75 uppercase">
          Case Studies
        </p>
        <h1 className="mt-6 font-serif text-[clamp(1.75rem,4.4vw,3rem)] leading-[1.2] text-charcoal italic">
          Warum es gemacht wurde, wie es gelöst wurde, was es verändert hat.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-charcoal/70">
          Fünf Projekte aus Marketing, Fotografie und der eigenen Marke. Nicht als Galerie, sondern
          als Denkweg: von der Ausgangssituation bis zu dem, was AR Media daraus mitgenommen hat.
        </p>
      </div>
    </section>
  );
}
