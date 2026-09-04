import type { NextConfig } from "next";

/**
 * Statische CSP ohne Nonces bewusst gewählt: Die gesamte Seite ist
 * vollständig statisch generiert (next build → alle Routen "○ Static"),
 * eine Nonce-basierte CSP würde laut Next.js-Doku serverseitiges Rendering
 * pro Request erzwingen und damit genau die Performance opfern, die sonst
 * überall im Projekt Priorität hatte. 'unsafe-inline' bei script-src ist
 * hier nötig für die JSON-LD-Structured-Data-Scripts (Organization- und
 * FAQPage-Schema), 'unsafe-inline' bei style-src für Framer Motion, das
 * Transform/Opacity direkt als Inline-Style setzt. Kein Nachteil gegenüber
 * vorher (keine CSP), aber ein echter Fortschritt: verhindert weiterhin das
 * Nachladen fremder Skripte/Styles/Frames, nur eben ohne die für diese
 * konkrete, rein statische Seite unnötige Komplexität von Nonces.
 *
 * script-src/connect-src/img-src um Google Analytics 4 erweitert
 * (googletagmanager.com liefert gtag.js aus, google-analytics.com/
 * analytics.google.com empfangen die Messdaten) — ohne diese Freigabe
 * würde die CSP GA4 stillschweigend blockieren, siehe Consent-Mode-
 * Implementierung in components/shared/google-analytics.tsx.
 *
 * frame-src um google.com erweitert (Audit-Fund, Kontakt-Feature): das neue
 * Maps-Embed (components/shared/map-embed.tsx) lädt den iframe erst nach
 * erteiltem Consent, aber ohne frame-src würde die CSP ihn dann trotzdem
 * blocken, unabhängig vom Consent-Status.
 */
const isDev = process.env.NODE_ENV === "development";
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://www.googletagmanager.com${isDev ? " 'unsafe-eval'" : ""};
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: blob: https://www.google-analytics.com;
  font-src 'self';
  connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com;
  frame-src https://www.google.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`
  .replace(/\s{2,}/g, " ")
  .trim();

const securityHeaders = [
  { key: "Content-Security-Policy", value: cspHeader },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig: NextConfig = {
  // Während der aktiven Bauphase deaktiviert, da der persistente Turbopack-
  // Dev-Cache wiederholt veraltete Server-Module auslieferte (z. B. entfernte
  // Icon-Importe blieben nach Fixes im Cache bestehen).
  experimental: {
    turbopackFileSystemCacheForDev: false,
  },
  // Entfernt den "X-Powered-By: Next.js"-Header (kleinste sinnvolle
  // Information-Disclosure-Härtung, kein funktionaler Nachteil).
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
