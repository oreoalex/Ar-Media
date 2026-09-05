import type { WissenArticle } from "@/lib/wissen/types";

export const socialMediaArticles: WissenArticle[] = [
  {
    title: "Instagram-Account professionell aufbauen",
    slug: "instagram-account-aufbauen",
    category: "social-media",
    description:
      "Wie aus einzelnen Posts ein zusammenhängender digitaler Markenauftritt wird: Positionierung, Profil, Content-Säulen und die Bausteine, die dazwischen oft übersehen werden.",
    intro:
      "Ein Instagram-Profil besteht nicht aus einzelnen Posts. Es ist ein digitaler Markenauftritt, dessen Teile aufeinander aufbauen müssen, sonst bleibt am Ende weniger hängen, als die einzelnen Teile eigentlich hergeben würden.",
    publishedAt: "2026-09-05",
    updatedAt: "2026-09-05",
    readingTime: 12,
    featured: true,
    audience: ["gruender", "unternehmen", "creator", "personal-brand"],
    tags: ["Instagram", "Positionierung", "Content-Strategie", "Profil-Optimierung"],
    quickSummary: [
      "Ein Instagram-Profil funktioniert nur als Ganzes: Positionierung, Profilbild, Bio, Highlights, Content und Community greifen ineinander.",
      "Die Bio ist keine Beschreibung, sondern die Antwort auf die Frage, warum jemand nach drei Sekunden weiterscrollen oder bleiben sollte.",
      "Content-Säulen ersetzen Zufallsposts durch eine wiederkehrende Struktur, an der sich Follower orientieren können.",
      "Reels, Carousels und Stories haben unterschiedliche Aufgaben, keine davon ist automatisch die richtige Wahl.",
      "Ein Impressum ist bei geschäftlicher Nutzung in der Regel Pflicht, unabhängig von den Privatsphäre-Einstellungen des Profils.",
    ],
    sections: [
      {
        id: "positionierung",
        heading: "Positionierung und Zielgruppe zuerst",
        content: (
          <>
            <p>
              Bevor ein einziges Bild hochgeladen wird, lohnt sich eine unbequeme Frage: Wofür soll dieser Account
              stehen, und für wen genau? Ein Profil, das gleichzeitig alle ansprechen will, spricht am Ende meist
              niemanden konkret an. Positionierung heißt nicht, sich künstlich einzuengen, sondern ehrlich zu
              benennen, was ein Unternehmen oder eine Person bereits ausmacht, und das konsequent sichtbar zu
              machen.
            </p>
            <p className="mt-4">
              Die Zielgruppe zu kennen bedeutet mehr als ein grobes Alters- und Ortsraster. Es bedeutet zu wissen,
              welche Fragen diese Menschen sich stellen, bevor sie überhaupt nach einer Lösung suchen, und in
              welcher Sprache sie unterwegs sind. Ein Account für lokale Handwerksbetriebe braucht eine andere
              Tonalität als einer für ein junges Modelabel, selbst wenn beide auf Instagram aktiv sind.
            </p>
          </>
        ),
      },
      {
        id: "profil-grundlagen",
        heading: "Profilbild, Bio, CTA und Kontaktmöglichkeit",
        content: (
          <>
            <p>
              Das Profilbild ist bei den meisten Interaktionen kleiner als ein Fingernagel, trotzdem entscheidet es
              mit über den ersten Eindruck. Für Unternehmen funktioniert meist ein reduziertes Signet oder ein
              klar erkennbares Logo besser als ein Foto mit vielen Details, für Personal Brands oft ein echtes,
              gut ausgeleuchtetes Porträt statt eines gestellten Business-Fotos.
            </p>
            <h3 className="mt-8 mb-3 text-[17px] font-medium text-charcoal">Die Bio ist eine Antwort, keine Beschreibung</h3>
            <p>
              Die Bio beantwortet in wenigen Zeilen eine einzige Frage: Warum sollte jemand diesem Profil folgen
              oder eine Nachricht schreiben? Eine Aufzählung von Adjektiven leistet das selten. Konkreter ist
              eine kurze Aussage darüber, wem geholfen wird und wie, gefolgt von einem klaren Call-to-Action, der
              sagt, was als Nächstes passieren soll: eine Website besuchen, eine Nachricht schreiben, einen Termin
              buchen.
            </p>
            <p className="mt-4">
              Dazu gehört eine funktionierende Kontaktmöglichkeit, nicht nur ein Link in der Bio, der ins Leere
              führt. Wer geschäftlich unterwegs ist, kommt außerdem selten um ein Impressum herum, dazu mehr im
              Abschnitt zum Impressum unten.
            </p>
          </>
        ),
      },
      {
        id: "visuelle-identitaet",
        heading: "Visuelle Identität, Highlights und Highlight-Cover",
        content: (
          <>
            <p>
              Ein Profil, dessen Bilder auf den ersten Blick zusammengehören, wirkt gepflegt, selbst wenn die
              einzelnen Motive unterschiedlich sind. Das erreicht man nicht über einen aufwendigen Filter, sondern
              über wiederkehrende Entscheidungen: eine begrenzte Farbwelt, eine konsistente Bildsprache, dieselbe
              Schriftart auf Grafiken, denselben Bildausschnitt bei Porträts.
            </p>
            <p className="mt-4">
              Highlights sind die zweite Visitenkarte eines Profils, direkt unter der Bio sichtbar. Statt sie
              chronologisch mit Zufallsinhalten zu füllen, lohnt sich eine bewusste Struktur: Über uns, Leistungen
              oder Angebot, Referenzen oder Bewertungen, häufige Fragen. Einheitliche Highlight-Cover, statt der
              Instagram-Standardvorschau, machen aus einer Ansammlung von Kreisen eine kleine, geordnete
              Navigation.
            </p>
          </>
        ),
      },
      {
        id: "content-saeulen",
        heading: "Content-Säulen als Struktur statt Zufallsposts",
        content: (
          <>
            <p>
              Content-Säulen sind wiederkehrende Themenblöcke, zwischen denen ein Account sich bewegt, zum
              Beispiel Einblicke in die Arbeit, Wissen zum eigenen Fachgebiet, Menschen hinter der Marke und echte
              Ergebnisse oder Referenzen. Sie verhindern zwei häufige Probleme gleichzeitig: den leeren Kopf vor
              jedem neuen Post und ein Profil, das sich wie eine zufällige Aneinanderreihung liest statt wie ein
              roter Faden.
            </p>
            <p className="mt-4">
              Wie viele Säulen sinnvoll sind, hängt vom Unternehmen ab, häufig sind es drei bis fünf. Wichtiger als
              die genaue Zahl ist, dass jede Säule tatsächlich zur Positionierung passt und nicht nur deshalb
              existiert, weil sie gerade im Trend liegt.
            </p>
          </>
        ),
      },
      {
        id: "content-formate",
        heading: "Reels, Carousels und Stories: unterschiedliche Aufgaben",
        content: (
          <>
            <p>
              Reels dienen in erster Linie dazu, neue Menschen zu erreichen, sie werden von Instagram bevorzugt an
              Accounts ausgespielt, die dem eigenen Profil noch nicht folgen. Carousels eignen sich gut, um
              Wissen, Storytelling oder eine mehrschrittige Erklärung unterzubringen, sie halten Betrachter länger
              auf einem Beitrag und werden dadurch oft auch von bereits folgenden Menschen intensiver
              wahrgenommen. Stories schaffen Nähe und Vertrauen im Alltag, sie sind der Ort für Unfertiges,
              Persönliches und schnelle Rückfragen an die eigene Community.
            </p>
            <p className="mt-4">
              Das ist eine sinnvolle Grundstruktur, kein starres Dogma. Je nach Ziel, Zielgruppe und Marke kann die
              Gewichtung anders aussehen, ein beratungsintensives Angebot lebt vielleicht stärker von Carousels als
              von Reichweite, ein visuelles Handwerk stärker von Reels. Wer ein Reel veröffentlicht, sollte
              außerdem auf ein eigenes Reel-Cover statt eines zufälligen Frames achten, es entscheidet mit darüber,
              wie das Profil im Raster später wirkt.
            </p>
          </>
        ),
      },
      {
        id: "community",
        heading: "Community, Kooperationen, Analyse",
        content: (
          <>
            <p>
              Ein Profil wächst selten allein durch Veröffentlichen. Kommentare zu beantworten, auf Nachrichten
              einzugehen und aktiv mit anderen Accounts der eigenen Nische zu interagieren, ist Teil der Arbeit,
              nicht ihr Abschluss. Kooperationen mit passenden Accounts können neue Zielgruppen erschließen,
              vorausgesetzt sie passen inhaltlich zur eigenen Positionierung und wirken nicht aufgesetzt.
            </p>
            <p className="mt-4">
              Regelmäßige Analyse zeigt, welche Formate und Themen bei der eigenen Zielgruppe tatsächlich
              funktionieren, statt sich auf ein Bauchgefühl zu verlassen. Wichtig ist dabei, nicht jeder einzelnen
              Kennzahl hinterherzujagen, sondern über einen längeren Zeitraum zu beobachten, was verlässlich
              funktioniert, und die Content-Säulen entsprechend anzupassen.
            </p>
          </>
        ),
      },
      {
        id: "impressum-hinweis",
        heading: "Impressum auf Instagram",
        content: (
          <>
            <p>
              Wer ein Instagram-Profil geschäftlich nutzt, also zum Beispiel für das eigene Unternehmen oder mit
              Kooperationen wirbt, kommt in der Regel um ein Impressum nicht herum, unabhängig davon, ob das
              Profil öffentlich oder nur für bestätigte Follower sichtbar ist. Details dazu, was genau hineingehört
              und wie es rechtssicher eingebunden wird, stehen im eigenen Artikel dazu.
            </p>
          </>
        ),
      },
    ],
    praxisbeispiel: (
      <p>
        Ein regionaler Handwerksbetrieb postete bisher unregelmäßig Baustellenfotos ohne erkennbaren roten Faden.
        Nach der Einführung von vier Content-Säulen (Projekteinblicke, Team, Wissen rund ums Handwerk,
        Kundenstimmen) und einer überarbeiteten Bio mit klarem Kontaktweg ließ sich der Zusammenhang zwischen
        Profil und tatsächlichem Angebot deutlich schneller erfassen, bereits beim ersten Blick auf das Profil.
      </p>
    ),
    beachten: [
      "Positionierung und Content-Säulen zuerst festlegen, danach erst Design und Postingplan.",
      "Bio und Highlights regelmäßig prüfen, sie veralten schneller als man denkt.",
      "Nicht jedem Format-Trend folgen, nur weil er gerade viel Reichweite verspricht.",
      "Bei geschäftlicher Nutzung frühzeitig klären, ob ein Impressum notwendig ist.",
    ],
    toolRefs: [
      { category: "tools", slug: "canva" },
      { category: "tools", slug: "capcut" },
      { category: "tools", slug: "meta-business-suite" },
    ],
    legalNotice: true,
    arMediaSolution: {
      question: "Du weißt, was du zeigen willst, aber nicht, wie daraus ein stimmiges Profil wird?",
      answer:
        "Wir entwickeln mit dir eine klare Positionierung und übersetzen sie in einen digitalen Markenauftritt, von der visuellen Identität bis zur laufenden Betreuung.",
      ctaLabel: "Unsere Social-Media-Lösungen",
      ctaHref: "/unternehmen/social-media",
    },
    officialResources: [
      {
        name: "Meta Business Help Center",
        href: "https://www.facebook.com/business/help",
        description: "Offizielle Hilfe zu Instagram- und Facebook-Profilen für Unternehmen.",
      },
    ],
    relatedArticles: [
      { category: "social-media", slug: "instagram-fuer-creator" },
      { category: "tools", slug: "canva" },
      { category: "datenschutz-recht", slug: "impressum-instagram" },
    ],
    seoTitle: "Instagram-Account professionell aufbauen",
    seoDescription:
      "Positionierung, Profil, Content-Säulen, Reels, Carousels und Stories: wie aus einzelnen Posts ein zusammenhängender Instagram-Auftritt wird.",
  },
  {
    title: "Instagram für Creator",
    slug: "instagram-fuer-creator",
    category: "social-media",
    description:
      "Was einen Creator-Account von einem Unternehmensprofil unterscheidet, und worauf es ankommt, wenn die eigene Person Teil der Marke ist.",
    intro:
      "Ein Creator-Account trägt ein Gesicht, keine Firma. Das verändert, wie Positionierung, Content und Nähe zur Community gedacht werden müssen.",
    publishedAt: "2026-09-05",
    updatedAt: "2026-09-05",
    readingTime: 8,
    audience: ["creator", "personal-brand"],
    tags: ["Instagram", "Personal Brand", "Creator"],
    quickSummary: [
      "Bei Creator-Accounts ist die Person selbst der rote Faden, nicht ein einzelnes Produkt.",
      "Persönlich sein heißt nicht, alles zu zeigen, sondern bewusst auszuwählen, was gezeigt wird.",
      "Eine erkennbare Perspektive trägt einen Account weiter als bloße Ästhetik.",
      "Kooperationen sollten zur eigenen Haltung passen, nicht nur zur Reichweite des Partners.",
    ],
    sections: [
      {
        id: "person-als-marke",
        heading: "Wenn die eigene Person die Marke ist",
        content: (
          <>
            <p>
              Ein Unternehmensprofil kann ein Produkt oder eine Leistung in den Mittelpunkt stellen. Bei einem
              Creator-Account übernimmt diese Rolle die Person selbst, mit ihrer Perspektive, ihrer Art zu
              erzählen und ihren Themen. Das macht den Aufbau in mancher Hinsicht einfacher, weil ein zentraler
              roter Faden bereits existiert, in anderer Hinsicht anspruchsvoller, weil dieser rote Faden bewusst
              gepflegt werden muss, statt sich von selbst zu ergeben.
            </p>
            <p className="mt-4">
              Personal Brand aufzubauen bedeutet deshalb nicht, möglichst viel Privates zu zeigen, sondern bewusst
              zu entscheiden, welcher Ausschnitt der eigenen Person und Arbeit öffentlich sichtbar wird, und diesen
              Ausschnitt konsequent durchzuhalten.
            </p>
          </>
        ),
      },
      {
        id: "perspektive",
        heading: "Eine erkennbare Perspektive statt reiner Ästhetik",
        content: (
          <>
            <p>
              Viele Creator-Accounts ähneln sich optisch stark, ähnliche Farbfilter, ähnliche Reel-Schnitte,
              ähnliche Trends. Was einen Account tatsächlich unterscheidbar macht, ist selten die Ästhetik allein,
              sondern eine erkennbare Meinung oder Perspektive: eine bestimmte Art, ein Thema zu betrachten, die
              sich durch die eigenen Beiträge zieht, unabhängig vom jeweiligen Format.
            </p>
            <p className="mt-4">
              Content-Säulen funktionieren hier genauso wie bei Unternehmensprofilen, nur dass sie stärker aus der
              eigenen Biografie, den eigenen Erfahrungen oder dem eigenen Fachwissen abgeleitet werden, statt aus
              einem Leistungsportfolio.
            </p>
          </>
        ),
      },
      {
        id: "kooperationen-creator",
        heading: "Kooperationen und Werbekennzeichnung",
        content: (
          <>
            <p>
              Kooperationen mit Marken können ein sinnvoller Teil eines Creator-Accounts sein, sie sollten aber zur
              eigenen Positionierung passen, statt allein nach Honorar ausgewählt zu werden. Eine Empfehlung, die
              nicht zur bisherigen Haltung des Accounts passt, fällt der eigenen Community meist schneller auf,
              als man denkt.
            </p>
            <p className="mt-4">
              Bezahlte oder als Gegenleistung erhaltene Kooperationen müssen zudem als Werbung gekennzeichnet
              werden. Was dabei konkret zu beachten ist, ist Thema eines eigenen Artikels im Bereich Datenschutz
              &amp; Recht.
            </p>
          </>
        ),
      },
    ],
    beachten: [
      "Eine bewusste Grenze zwischen öffentlich und privat ziehen, statt sie im laufenden Betrieb zu improvisieren.",
      "Kooperationen an der eigenen Positionierung messen, nicht nur am Honorar.",
      "Werbliche Inhalte konsequent kennzeichnen.",
    ],
    toolRefs: [{ category: "tools", slug: "capcut" }],
    arMediaSolution: {
      question: "Du hast eine Perspektive, aber noch keinen einheitlichen Auftritt drumherum?",
      answer:
        "Wir entwickeln mit dir eine Personal-Brand-Positionierung, die zu dir passt, und ein visuelles System, das du danach eigenständig weiterführen kannst.",
      ctaLabel: "Unsere Leistung: Brandkit für Neugründungen",
      ctaHref: "/unternehmen/brandkit",
    },
    relatedArticles: [
      { category: "social-media", slug: "instagram-account-aufbauen" },
      { category: "tools", slug: "capcut" },
      { category: "datenschutz-recht", slug: "impressum-instagram" },
    ],
    seoTitle: "Instagram für Creator: Personal Brand aufbauen",
    seoDescription:
      "Was einen Creator-Account von einem Unternehmensprofil unterscheidet: Positionierung, Perspektive, Kooperationen und Werbekennzeichnung.",
  },
];
