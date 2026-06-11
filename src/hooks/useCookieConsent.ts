import { useCallback, useEffect, useState } from 'react';

export type CookieConsentStatus = 'accepted' | 'rejected';

const COOKIE_CONSENT_STORAGE_KEY = 'superclim-cookie-consent';
const COOKIE_CONSENT_EVENT = 'superclim-cookie-consent-change';

function readStoredConsent(): CookieConsentStatus | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const value = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
  return value === 'accepted' || value === 'rejected' ? value : null;
}

function writeStoredConsent(status: CookieConsentStatus) {
  window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, status);
  window.localStorage.setItem(`${COOKIE_CONSENT_STORAGE_KEY}-date`, new Date().toISOString());
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: status }));
}

export function useCookieConsent() {
  const [consent, setConsentState] = useState<CookieConsentStatus | null>(() => readStoredConsent());

  useEffect(() => {
    const updateConsent = () => {
      setConsentState(readStoredConsent());
    };

    window.addEventListener('storage', updateConsent);
    window.addEventListener(COOKIE_CONSENT_EVENT, updateConsent);

    return () => {
      window.removeEventListener('storage', updateConsent);
      window.removeEventListener(COOKIE_CONSENT_EVENT, updateConsent);
    };
  }, []);

  const setConsent = useCallback((status: CookieConsentStatus) => {
    writeStoredConsent(status);
    setConsentState(status);
  }, []);

  return {
    consent,
    hasAcceptedCookies: consent === 'accepted',
    hasRejectedCookies: consent === 'rejected',
    setConsent,
  };
}
