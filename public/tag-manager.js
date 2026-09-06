// Google Tag Manager: load only after the site's cookie consent is accepted.
(function () {
  const containerId = 'GTM-NSV38GHV';
  const storageKey = 'superclim-cookie-consent';
  const consentEvent = 'superclim-cookie-consent-change';
  let loaded = false;
  let previousConsent;

  window.dataLayer = window.dataLayer || [];

  function consent() {
    window.dataLayer.push(arguments);
  }

  const denied = {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  };

  // Queue defaults before any container events, including returning visits.
  consent('consent', 'default', denied);

  function syncConsent() {
    let accepted = false;
    try {
      accepted = window.localStorage.getItem(storageKey) === 'accepted';
    } catch {
      // Unavailable storage must not enable tracking.
    }

    if (accepted === previousConsent) return;
    previousConsent = accepted;

    consent('consent', 'update', {
      ...denied,
      analytics_storage: accepted ? 'granted' : 'denied',
    });

    if (!accepted || loaded) return;
    loaded = true;

    window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
    const script = document.createElement('script');
    script.id = 'superclim-google-tag-manager';
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtm.js?id=' + containerId;
    document.head.appendChild(script);
  }

  window.addEventListener(consentEvent, syncConsent);
  window.addEventListener('storage', function (event) {
    if (event.key === storageKey || event.key === null) syncConsent();
  });
  syncConsent();
})();
