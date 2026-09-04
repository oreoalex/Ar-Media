export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  links: NavLink[];
};

export type NavItem = {
  label: string;
  href: string;
  /** "mega" = zweispaltiges Mega-Menü mit Gruppen, "simple" = einfaches Dropdown, undefined = kein Untermenü */
  menuType?: "mega" | "simple";
  groups?: NavGroup[];
  links?: NavLink[];
  /** Primärer Call-to-Action der Hauptnavigation — visuell stärker hervorgehoben (aktuell: letzter Menüpunkt) */
  cta?: boolean;
};

/**
 * Struktur folgt IA v2.0. "Unternehmen" erhält ein Mega-Menü mit den drei
 * Cluster-Gruppen aus Teil 6 (Grundlagen / Laufende Leistungen / Ergänzende
 * Leistungen — ursprünglich "Brücke & Sonstiges" benannt, das war interne
 * Planungssprache und gehörte nie in eine echte Navigation).
 * "Fotografie" und "Kita & Schule" erhalten einfache Dropdowns (weniger Einträge).
 * "Kontakt" erhält ein Dropdown mit den drei segmentierten Einstiegen (Entscheidung 8).
 */
export const mainNav: NavItem[] = [
  { label: "Start", href: "/" },
  {
    label: "Unternehmen",
    href: "/unternehmen",
    menuType: "mega",
    groups: [
      {
        label: "Grundlagen",
        links: [
          { label: "Branding", href: "/unternehmen/branding" },
          { label: "Corporate Design", href: "/unternehmen/corporate-design" },
          { label: "Brandkit für Neugründungen", href: "/unternehmen/brandkit" },
          { label: "Warum nicht einfach mit KI?", href: "/unternehmen/ki" },
        ],
      },
      {
        label: "Laufende Leistungen",
        links: [
          { label: "Content Creation", href: "/unternehmen/content-creation" },
          { label: "Social Media", href: "/unternehmen/social-media" },
          { label: "Employer Branding", href: "/unternehmen/employer-branding" },
        ],
      },
      {
        label: "Ergänzende Leistungen",
        links: [
          { label: "Foto & Video", href: "/unternehmen/foto-video" },
          { label: "Kampagnen", href: "/unternehmen/kampagnen" },
        ],
      },
    ],
  },
  {
    label: "Fotografie",
    href: "/fotografie",
    menuType: "simple",
    links: [
      { label: "Portrait", href: "/fotografie/portrait" },
      { label: "Paar", href: "/fotografie/paar" },
      { label: "Lifestyle", href: "/fotografie/lifestyle" },
      { label: "Business-Portraits", href: "/fotografie/business-portraits" },
    ],
  },
  {
    label: "Kita & Schule",
    href: "/kita-schule",
    menuType: "simple",
    links: [
      { label: "Für Einrichtungen", href: "/kita-schule/einrichtungen" },
      { label: "Für Eltern", href: "/kita-schule/eltern" },
      { label: "Ablauf & Datenschutz", href: "/kita-schule/ablauf-datenschutz" },
    ],
  },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Über AR Media", href: "/ueber-ar-media" },
  {
    label: "Zusammenarbeiten",
    href: "/kontakt",
    menuType: "simple",
    cta: true,
    links: [
      { label: "Marketingprojekt besprechen", href: "/kontakt/projekt-besprechen" },
      { label: "Fotoshooting anfragen", href: "/kontakt/shooting-anfragen" },
      { label: "Kennenlernen für deine Kita", href: "/kontakt/kita-kennenlernen" },
    ],
  },
];

// Unternehmen fehlt hier bewusst als eigener Eintrag: die Fußzeile bezieht
// die drei Cluster-Gruppen (Grundlagen/Laufende Leistungen/Ergänzende
// Leistungen) direkt aus mainNav[1].groups (site-footer.tsx) — eine
// separate, flache Unternehmen-Liste hier hätte genau die Drift erzeugt,
// die den Footer zuvor von der echten, im Mega-Menü längst etablierten
// 3-Kategorien-Struktur abweichen ließ (Audit-Fund).
export const footerNav: NavGroup[] = [
  {
    label: "Fotografie",
    links: [
      { label: "Portrait", href: "/fotografie/portrait" },
      { label: "Paar", href: "/fotografie/paar" },
      { label: "Lifestyle", href: "/fotografie/lifestyle" },
      { label: "Business-Portraits", href: "/fotografie/business-portraits" },
    ],
  },
  {
    label: "Kita & Schule",
    links: [
      { label: "Für Einrichtungen", href: "/kita-schule/einrichtungen" },
      { label: "Für Eltern", href: "/kita-schule/eltern" },
      { label: "Ablauf & Datenschutz", href: "/kita-schule/ablauf-datenschutz" },
    ],
  },
  {
    label: "Mehr",
    links: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Über AR Media", href: "/ueber-ar-media" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
];

export const legalNav: NavLink[] = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];
