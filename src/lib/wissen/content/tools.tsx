import type { WissenArticle } from "@/lib/wissen/types";

export const toolsArticles: WissenArticle[] = [
  {
    title: "Canva",
    slug: "canva",
    category: "tools",
    description:
      "Was Canva kann, wofür es sich eignet und wo die Grenzen liegen, wenn eine Marke mehr braucht als ein austauschbares Template.",
    intro:
      "Canva ist ein browserbasiertes Design-Werkzeug, mit dem sich Grafiken, Social-Media-Beiträge, Präsentationen und einfache Druckvorlagen ohne Vorkenntnisse erstellen lassen.",
    publishedAt: "2026-09-05",
    updatedAt: "2026-09-05",
    readingTime: 9,
    featured: true,
    audience: ["gruender", "unternehmen", "creator", "dienstleister"],
    tags: ["Canva", "Design-Tools", "Social-Media-Grafiken"],
    quickSummary: [
      "Canva ist ein browserbasiertes Baukasten-Tool für Grafiken, Social-Media-Beiträge und einfache Layouts.",
      "Es eignet sich sehr gut für laufende, wiederkehrende Inhalte auf Basis einer bereits bestehenden Vorlage.",
      "Für ein eigenständiges Markendesign von Grund auf ist Canva nicht das richtige Werkzeug.",
      "Nutzungsrechte hängen vom jeweiligen Element ab, kostenlos und Pro unterscheiden sich hier deutlich.",
      "Die kostenlose Version reicht für einfache Anwendungsfälle, viele Marken-relevante Funktionen liegen hinter Canva Pro.",
    ],
    sections: [
      {
        id: "was-ist-canva",
        heading: "Was ist Canva?",
        content: (
          <>
            <p>
              Canva ist ein Online-Design-Werkzeug, das über vorgefertigte Vorlagen, eine Drag-and-drop-Oberfläche
              und eine große Bibliothek an Grafiken, Fotos und Schriften funktioniert. Statt mit einem leeren
              Blatt zu beginnen, wählt man meist eine passende Vorlage und passt Farben, Texte und Bilder an.
              Canva läuft im Browser sowie als App und benötigt keine Installation professioneller
              Design-Software.
            </p>
          </>
        ),
      },
      {
        id: "wofuer-geeignet",
        heading: "Wofür eignet sich Canva?",
        content: (
          <>
            <p>
              Canva eignet sich besonders für wiederkehrende, einfache Grafikaufgaben: Social-Media-Posts nach
              einem bestehenden Schema, Story-Vorlagen, einfache Flyer, Präsentationsfolien oder Angebots-PDFs.
              Immer dann, wenn eine Struktur bereits feststeht und regelmäßig mit neuen Inhalten gefüllt werden
              muss, spielt Canva seine Stärke aus.
            </p>
          </>
        ),
      },
      {
        id: "einsatzbereiche",
        heading: "Typische Einsatzbereiche",
        content: (
          <>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Laufende Social-Media-Grafiken auf Basis eines bestehenden Templates</li>
              <li>Einfache Präsentationen für Kunden- oder Teamgespräche</li>
              <li>Kurzfristige Ankündigungen, Störer oder Countdown-Grafiken</li>
              <li>Einfache Druckvorlagen wie Flyer oder Visitenkarten in kleiner Auflage</li>
            </ul>
          </>
        ),
      },
      {
        id: "workflow",
        heading: "Grundlegender Workflow",
        content: (
          <>
            <p>
              Der typische Ablauf beginnt mit einer Vorlage oder einem leeren Format in der passenden Größe, etwa
              für ein Instagram-Quadrat oder eine Story. Darauf werden Texte, Farben und Bildelemente aus der
              eigenen Markenkit-Bibliothek eingesetzt, sofern eine solche eingerichtet wurde. Fertige Designs
              lassen sich als Bild oder PDF exportieren oder direkt in Canva für einen späteren Termin planen.
            </p>
          </>
        ),
      },
      {
        id: "beachten-canva",
        heading: "Was sollte man beachten?",
        content: (
          <>
            <p>
              Wer ausschließlich mit Canva-Vorlagen arbeitet, läuft Gefahr, optisch austauschbar zu wirken, viele
              Templates werden von unzähligen anderen Accounts genutzt. Ein eigenes, in Canva hinterlegtes
              Markendesign mit festen Farben, Schriften und Bausteinen löst dieses Problem weitgehend, erfordert
              aber eine einmalige, bewusste Einrichtung, statt einfach mit einer Standardvorlage zu starten.
            </p>
          </>
        ),
      },
      {
        id: "datenschutz-canva",
        heading: "Datenschutz",
        content: (
          <>
            <p>
              Canva verarbeitet hochgeladene Inhalte und Nutzungsdaten gemäß seiner eigenen Datenschutzrichtlinie.
              Wer personenbezogene Daten Dritter in Canva verarbeitet, etwa Kundenfotos, sollte das im eigenen
              Datenschutzkonzept berücksichtigen. Details dazu finden sich in den offiziellen Ressourcen unten.
            </p>
          </>
        ),
      },
      {
        id: "lizenzen-canva",
        heading: "Nutzungsrechte und Lizenzen",
        content: (
          <>
            <p>
              Nicht jedes Element in Canva ist automatisch für jede Nutzung freigegeben. Kostenlose Elemente
              lassen sich in der Regel auch kommerziell verwenden, viele hochwertigere Fotos, Grafiken und
              Vorlagen sind aber ausschließlich mit einem Canva-Pro-Abonnement lizenziert. Vor einer Veröffentlichung
              lohnt sich ein Blick auf die Lizenzkennzeichnung des jeweiligen Elements, insbesondere bei Inhalten,
              die über Social Media hinaus verwendet werden sollen, etwa in Print oder Werbeanzeigen.
            </p>
          </>
        ),
      },
      {
        id: "fuer-wen-canva",
        heading: "Für wen eignet sich Canva?",
        content: (
          <>
            <p>
              Canva eignet sich gut für Unternehmen und Selbstständige, die laufend eigenständig Inhalte erstellen
              möchten und dafür ein bereits bestehendes, klar definiertes Markendesign brauchen. Für die
              Entwicklung dieses Markendesigns selbst, insbesondere für ein neues Unternehmen ohne bestehende
              Identität, stößt Canva an seine Grenzen, hier braucht es eine individuelle gestalterische
              Grundlage, die anschließend in Canva übertragen werden kann.
            </p>
          </>
        ),
      },
      {
        id: "empfehlung-canva",
        heading: "AR Media Empfehlung",
        content: (
          <>
            <p>
              Canva ist ein sinnvolles Werkzeug für die laufende Umsetzung, sobald ein eigenes Markendesign
              feststeht. Als alleinige Grundlage für die Markenentwicklung selbst würden wir es nicht empfehlen,
              generische Templates sind später an der eigenen Wiedererkennbarkeit meist deutlich erkennbar.
            </p>
          </>
        ),
      },
    ],
    beachten: [
      "Ein eigenes Markenkit in Canva einrichten, statt Standardvorlagen unverändert zu übernehmen.",
      "Lizenzkennzeichnung einzelner Elemente vor der Veröffentlichung prüfen, besonders außerhalb von Social Media.",
      "Canva ersetzt keine Markenentwicklung, sondern setzt eine bereits bestehende Identität laufend um.",
    ],
    legalNotice: true,
    arMediaSolution: {
      question: "Du möchtest nicht mit generischen Templates arbeiten?",
      answer:
        "Wir entwickeln dir ein individuelles Social-Media-Designsystem, das zu deiner Marke passt und das du danach eigenständig in Canva weiterführen kannst.",
      ctaLabel: "Unsere Leistung: Corporate Design",
      ctaHref: "/unternehmen/corporate-design",
    },
    officialResources: [
      {
        name: "Canva Help Center",
        href: "https://www.canva.com/help/",
        description: "Offizielle Anleitungen und Support direkt von Canva.",
      },
      {
        name: "Canva Content License Agreement",
        href: "https://www.canva.com/policies/content-license-agreement/",
        description: "Die aktuellen Nutzungsbedingungen für Elemente und Vorlagen.",
      },
    ],
    relatedArticles: [
      { category: "social-media", slug: "instagram-account-aufbauen" },
      { category: "tools", slug: "capcut" },
    ],
    seoTitle: "Canva: Was das Tool kann und wo seine Grenzen liegen",
    seoDescription:
      "Canva im Überblick: Einsatzbereiche, Workflow, Datenschutz, Nutzungsrechte und für wen sich das Tool wirklich eignet.",
  },
  {
    title: "CapCut",
    slug: "capcut",
    category: "tools",
    description:
      "Videoschnitt für Social Media: was CapCut leistet, worauf man bei Datenverarbeitung und Musikrechten achten sollte.",
    intro:
      "CapCut ist eine Video-Schnitt-App, mit der sich Reels, Shorts und kurze Social-Media-Videos direkt am Smartphone oder am Rechner bearbeiten lassen.",
    publishedAt: "2026-09-05",
    updatedAt: "2026-09-05",
    readingTime: 8,
    audience: ["creator", "unternehmen", "personal-brand"],
    tags: ["CapCut", "Videoschnitt", "Reels"],
    quickSummary: [
      "CapCut ist ein Videoschnitt-Tool, spezialisiert auf kurze, vertikale Social-Media-Formate.",
      "Es eignet sich gut für schnellen, laufenden Videoschnitt direkt am Smartphone.",
      "Für aufwendigere Produktionen mit hohem gestalterischem Anspruch stößt es an Grenzen.",
      "Musik- und Soundeffekte in der App sind nicht automatisch für jede Nutzung freigegeben.",
    ],
    sections: [
      {
        id: "was-ist-capcut",
        heading: "Was ist CapCut?",
        content: (
          <>
            <p>
              CapCut ist eine kostenlose Videoschnitt-App, die ursprünglich für kurze, vertikale Formate wie Reels
              und Shorts entwickelt wurde und mittlerweile auch als Desktop-Version verfügbar ist. Sie bietet
              Schnittfunktionen, Übergänge, Textanimationen, automatische Untertitel und eine große Bibliothek an
              Musik und Soundeffekten.
            </p>
          </>
        ),
      },
      {
        id: "wofuer-geeignet-capcut",
        heading: "Wofür eignet sich CapCut?",
        content: (
          <>
            <p>
              CapCut eignet sich besonders für den schnellen, laufenden Schnitt kurzer Social-Media-Videos: Reels,
              Behind-the-Scenes-Clips, kurze Erklärvideos oder Content, der direkt nach der Aufnahme
              veröffentlicht werden soll. Die Bedienung ist auf Tempo ausgelegt, nicht auf komplexe
              Mehrspur-Produktionen.
            </p>
          </>
        ),
      },
      {
        id: "einsatzbereiche-capcut",
        heading: "Typische Einsatzbereiche",
        content: (
          <>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Schnitt von Reels und Shorts direkt am Smartphone</li>
              <li>Automatische Untertitel für barrierearme, auch ohne Ton verständliche Videos</li>
              <li>Kurze Produkt- oder Projekteinblicke im Vertikalformat</li>
              <li>Schnelle Anpassung von Rohmaterial für unterschiedliche Plattformen</li>
            </ul>
          </>
        ),
      },
      {
        id: "workflow-capcut",
        heading: "Grundlegender Workflow",
        content: (
          <>
            <p>
              Rohmaterial wird importiert, auf der Zeitleiste zugeschnitten und mit Übergängen, Text oder Musik
              ergänzt. Automatische Untertitel lassen sich generieren und anschließend manuell korrigieren.
              Fertige Videos werden in der passenden Auflösung für die jeweilige Plattform exportiert, meist im
              Hochformat für Instagram oder TikTok.
            </p>
          </>
        ),
      },
      {
        id: "beachten-capcut",
        heading: "Was sollte man beachten?",
        content: (
          <>
            <p>
              CapCut-typische Übergänge und Textanimationen sind mittlerweile stark verbreitet, ein Video, das
              ausschließlich auf Standardeffekten aufbaut, kann dadurch schnell generisch wirken. Ein eigener,
              wiedererkennbarer Schnittstil, etwa bei Tempo, Musikwahl oder Textgestaltung, hebt einen Auftritt
              stärker von anderen ab als jeder einzelne Effekt.
            </p>
          </>
        ),
      },
      {
        id: "datenschutz-capcut",
        heading: "Datenschutz",
        content: (
          <>
            <p>
              CapCut verarbeitet hochgeladenes Bild- und Videomaterial sowie Nutzungsdaten gemäß seiner eigenen
              Datenschutzrichtlinie. Wer Videos mit erkennbaren Personen produziert, etwa Kundinnen, Kunden oder
              Mitarbeitende, sollte vorab deren Einverständnis einholen, unabhängig vom verwendeten Schnittprogramm.
            </p>
          </>
        ),
      },
      {
        id: "musikrechte-capcut",
        heading: "Musikrechte",
        content: (
          <>
            <p>
              Die in CapCut integrierte Musikbibliothek ist meist für die Nutzung innerhalb der jeweiligen
              Plattform lizenziert, nicht automatisch für jede denkbare Verwendung, etwa in bezahlter Werbung
              außerhalb der Plattform. Bei kommerziellen Videos lohnt sich ein Blick in die aktuellen
              Nutzungsbedingungen, statt sich auf eine einmal gelesene Faustregel zu verlassen. Allgemeine
              Hinweise zu Musikrechten auf Social Media stehen im eigenen Artikel im Bereich Datenschutz &amp; Recht.
            </p>
          </>
        ),
      },
      {
        id: "fuer-wen-capcut",
        heading: "Für wen eignet sich CapCut?",
        content: (
          <>
            <p>
              CapCut eignet sich gut für Creator und Unternehmen, die regelmäßig kurze Social-Media-Videos in
              hoher Frequenz produzieren möchten. Für aufwendigere Produktionen, etwa ein Imagefilm oder ein
              Video mit komplexer Farbkorrektur, ist professionelle Schnittsoftware oder externe Unterstützung
              meist die passendere Wahl.
            </p>
          </>
        ),
      },
      {
        id: "empfehlung-capcut",
        heading: "AR Media Empfehlung",
        content: (
          <>
            <p>
              Für den laufenden, schnellen Schnitt eigener Reels ist CapCut ein solides Werkzeug. Für Videoinhalte,
              die die Marke nach außen tragen sollen, etwa ein Imagefilm oder aufwendigere Kampagnen-Clips, lohnt
              sich professionelle Unterstützung, um konsistent hochwertig statt zufällig gut zu wirken.
            </p>
          </>
        ),
      },
    ],
    beachten: [
      "Einen eigenen Schnittstil entwickeln, statt sich allein auf Standardeffekte zu verlassen.",
      "Einverständnis erkennbarer Personen vor der Veröffentlichung einholen.",
      "Aktuelle Musiklizenzbedingungen prüfen, besonders bei kommerzieller Nutzung außerhalb der Plattform.",
    ],
    legalNotice: true,
    arMediaSolution: {
      question: "Deine Reels sehen aus wie die von tausend anderen Accounts?",
      answer:
        "Wir entwickeln Bewegtbild-Content, der zu deiner Marke passt, statt austauschbare Trend-Formate zu wiederholen.",
      ctaLabel: "Unsere Leistung: Foto & Video",
      ctaHref: "/unternehmen/foto-video",
    },
    officialResources: [
      {
        name: "CapCut Help Center",
        href: "https://www.capcut.com/help",
        description: "Offizielle Anleitungen und FAQ direkt von CapCut.",
      },
      {
        name: "CapCut Privacy Policy",
        href: "https://www.capcut.com/clause/privacy-policy",
        description: "Die aktuelle Datenschutzrichtlinie von CapCut.",
      },
    ],
    relatedArticles: [
      { category: "social-media", slug: "instagram-fuer-creator" },
      { category: "datenschutz-recht", slug: "impressum-instagram" },
    ],
    seoTitle: "CapCut: Videoschnitt für Social Media im Überblick",
    seoDescription:
      "CapCut im Überblick: Einsatzbereiche, Workflow, Datenschutz, Musikrechte und für wen sich das Tool eignet.",
  },
  {
    title: "Meta Business Suite",
    slug: "meta-business-suite",
    category: "tools",
    description:
      "Die zentrale Verwaltungsoberfläche für Instagram und Facebook: was sie leistet und wo eigenständige Strategie trotzdem gefragt bleibt.",
    intro:
      "Die Meta Business Suite bündelt Postingplanung, Nachrichten und Werbeanzeigen für Instagram und Facebook an einem Ort.",
    publishedAt: "2026-09-05",
    updatedAt: "2026-09-05",
    readingTime: 8,
    audience: ["unternehmen", "dienstleister", "lokale-unternehmen"],
    tags: ["Meta Business Suite", "Social-Media-Verwaltung", "Werbeanzeigen"],
    quickSummary: [
      "Die Meta Business Suite verwaltet Instagram und Facebook zentral von einer Oberfläche aus.",
      "Sie eignet sich für Postingplanung, Nachrichtenverwaltung und einfache Werbeanzeigen.",
      "Sie ersetzt keine inhaltliche Strategie, nur die technische Verwaltung bestehender Inhalte.",
      "Für komplexere Kampagnen bleibt der Werbeanzeigenmanager mit mehr Optionen die tiefere Ebene.",
    ],
    sections: [
      {
        id: "was-ist-mbs",
        heading: "Was ist die Meta Business Suite?",
        content: (
          <>
            <p>
              Die Meta Business Suite ist die zentrale Verwaltungsoberfläche von Meta für Unternehmen, die
              Instagram und Facebook geschäftlich nutzen. Sie bündelt Postingplanung, Posteingang, einfache
              Statistiken und den Zugang zu Werbeanzeigen an einer Stelle, statt beide Plattformen getrennt
              verwalten zu müssen.
            </p>
          </>
        ),
      },
      {
        id: "wofuer-geeignet-mbs",
        heading: "Wofür eignet sich die Meta Business Suite?",
        content: (
          <>
            <p>
              Sie eignet sich vor allem für die laufende, organisatorische Seite des Social-Media-Betriebs:
              Beiträge im Voraus planen, Nachrichten und Kommentare aus Instagram und Facebook an einem Ort
              beantworten, grundlegende Reichweiten- und Interaktionszahlen einsehen.
            </p>
          </>
        ),
      },
      {
        id: "einsatzbereiche-mbs",
        heading: "Typische Einsatzbereiche",
        content: (
          <>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Vorausplanung von Beiträgen für Instagram und Facebook</li>
              <li>Zentrale Beantwortung von Nachrichten und Kommentaren</li>
              <li>Einrichtung und einfache Auswertung von Werbeanzeigen</li>
              <li>Verwaltung mehrerer Profile durch ein Team</li>
            </ul>
          </>
        ),
      },
      {
        id: "workflow-mbs",
        heading: "Grundlegender Workflow",
        content: (
          <>
            <p>
              Nach der Verknüpfung von Instagram- und Facebook-Profil lassen sich Beiträge direkt in der Suite
              erstellen, terminieren oder aus bestehenden Entwürfen veröffentlichen. Eingehende Nachrichten
              landen in einem gemeinsamen Posteingang. Für Werbeanzeigen führt die Suite durch die Auswahl von
              Ziel, Budget und Zielgruppe, tiefere Einstellungen finden sich im separaten Werbeanzeigenmanager.
            </p>
          </>
        ),
      },
      {
        id: "beachten-mbs",
        heading: "Was sollte man beachten?",
        content: (
          <>
            <p>
              Die Meta Business Suite organisiert die Veröffentlichung, sie entscheidet nicht, was inhaltlich
              gepostet werden sollte. Eine durchdachte Content-Strategie und passende Content-Säulen bleiben
              weiterhin notwendig, die Suite allein macht aus planlosem Posting keinen strategischen Auftritt.
            </p>
          </>
        ),
      },
      {
        id: "datenschutz-mbs",
        heading: "Datenschutz",
        content: (
          <>
            <p>
              Über die Meta Business Suite verarbeitete Daten unterliegen der Datenrichtlinie von Meta. Wer
              Werbeanzeigen mit eigenen Kundendaten schaltet, etwa über einen Datenabgleich, sollte die
              datenschutzrechtlichen Anforderungen dafür gesondert prüfen, das geht über die reine Nutzung der
              Suite hinaus.
            </p>
          </>
        ),
      },
      {
        id: "fuer-wen-mbs",
        heading: "Für wen eignet sich die Meta Business Suite?",
        content: (
          <>
            <p>
              Sie eignet sich für jedes Unternehmen, das Instagram und Facebook aktiv und regelmäßig bespielt,
              unabhängig von der Größe. Für einzelne, unregelmäßige Beiträge ohne Werbeanzeigen ist sie fast
              überdimensioniert, ihre eigentliche Stärke zeigt sich erst bei laufender, planvoller Nutzung über
              einen längeren Zeitraum.
            </p>
          </>
        ),
      },
      {
        id: "empfehlung-mbs",
        heading: "AR Media Empfehlung",
        content: (
          <>
            <p>
              Für die technische Organisation ist die Meta Business Suite ein sinnvolles, kostenloses Werkzeug.
              Die strategische Entscheidung, was, wann und warum gepostet wird, sollte trotzdem bewusst getroffen
              werden, statt sich allein auf die Planungsfunktion zu verlassen.
            </p>
          </>
        ),
      },
    ],
    beachten: [
      "Die Suite organisiert Veröffentlichung, ersetzt aber keine inhaltliche Strategie.",
      "Bei Werbeanzeigen mit eigenen Kundendaten die datenschutzrechtlichen Anforderungen gesondert prüfen.",
      "Für komplexere Kampagnen lohnt ein Blick in den separaten Werbeanzeigenmanager.",
    ],
    legalNotice: true,
    arMediaSolution: {
      question: "Du weißt, dass du postest, aber nicht, ob es sich lohnt?",
      answer:
        "Wir übernehmen Redaktionsplan, Umsetzung und Auswertung deiner Social-Media-Kanäle, damit Kontinuität nicht an fehlender Zeit scheitert.",
      ctaLabel: "Unsere Social-Media-Lösungen",
      ctaHref: "/unternehmen/social-media",
    },
    officialResources: [
      {
        name: "Meta Business Help Center",
        href: "https://www.facebook.com/business/help",
        description: "Offizielle Hilfe zur Meta Business Suite und zu Werbeanzeigen.",
      },
      {
        name: "Meta Datenrichtlinie",
        href: "https://www.facebook.com/privacy/policy",
        description: "Die aktuelle Datenrichtlinie von Meta.",
      },
    ],
    relatedArticles: [
      { category: "social-media", slug: "instagram-account-aufbauen" },
      { category: "datenschutz-recht", slug: "impressum-instagram" },
    ],
    seoTitle: "Meta Business Suite: Instagram und Facebook zentral verwalten",
    seoDescription:
      "Meta Business Suite im Überblick: Postingplanung, Nachrichten, Werbeanzeigen, Datenschutz und für wen sich das Tool eignet.",
  },
];
