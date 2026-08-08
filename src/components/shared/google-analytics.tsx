import Script from "next/script";

const GA_MEASUREMENT_ID = "G-VY05DP49JG";

/**
 * Google Consent Mode v2 (Advanced-Variante): gtag.js wird immer geladen,
 * aber der Default-Consent-Call läuft als beforeInteractive-Script vor
 * allem anderen und setzt IMMER "denied" für alle vier Signale — bewusst
 * ohne next/headers cookies() hier, das würde jede Route von statisch auf
 * dynamisch umstellen (server-seitiger Render bei jedem Aufruf statt
 * einmaliger Static-Generation, siehe Production-Readiness-Audit: die ganze
 * Seite ist absichtlich vollständig statisch). Für wiederkehrende
 * Besucher:innen mit bereits gespeichertem "granted"-Cookie holt
 * ConsentBanner den Consent stattdessen client-seitig direkt nach dem
 * Hydrieren nach (siehe dort) — bleibt die Seite statisch, kostet nur ein
 * paar Millisekunden früher im Client statt eine Server-Anfrage pro Aufruf.
 */
export function GoogleAnalytics() {
  return (
    <>
      <Script id="consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'wait_for_update': 500
          });
        `}
      </Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
