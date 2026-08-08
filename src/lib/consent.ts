export type ConsentDecision = "granted" | "denied";

export type ConsentState = {
  analytics_storage: ConsentDecision;
  ad_storage: ConsentDecision;
  ad_user_data: ConsentDecision;
  ad_personalization: ConsentDecision;
};

export const CONSENT_COOKIE_NAME = "ar-media-consent";
export const CONSENT_UPDATED_EVENT = "ar-media:consent-updated";
export const OPEN_CONSENT_SETTINGS_EVENT = "ar-media:open-consent-settings";

const CONSENT_COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 Jahr

/**
 * ad_storage/ad_user_data/ad_personalization bleiben immer "denied": diese
 * Website nutzt ausschließlich GA4-Analytics, keine Werbetracker oder
 * weiteren Google-Dienste, daher gibt es dafür kein Opt-in im Banner.
 */
export function buildConsentState(decision: ConsentDecision): ConsentState {
  return {
    analytics_storage: decision,
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  };
}

export function readStoredConsent(): ConsentDecision | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${CONSENT_COOKIE_NAME}=([^;]*)`));
  const value = match ? decodeURIComponent(match[1]) : null;
  return value === "granted" || value === "denied" ? value : null;
}

export function storeConsent(decision: ConsentDecision) {
  if (typeof document === "undefined") return;
  document.cookie = `${CONSENT_COOKIE_NAME}=${decision}; path=/; max-age=${CONSENT_COOKIE_MAX_AGE}; SameSite=Lax`;
}
