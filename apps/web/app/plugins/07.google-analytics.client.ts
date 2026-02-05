export default defineNuxtPlugin(() => {
  const GA_ID = 'G-L06RFCXZDR';
  const AW_ID = 'AW-600197642';
  const GTM_ID = 'GTM-P8K3S8NV';
  const COOKIE_NAME = 'CookieBar.marketing.cookies.googleAnalytics.name';

  const { consent } = useCookieConsent(COOKIE_NAME);

  const loadGtagScript = () => {
    if (document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`)) return;

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);
  };

  const initGoogleTags = () => {
    if (typeof window === 'undefined') return;
    if ((window as any).__gaInitialized) return;
    (window as any).__gaInitialized = true;

    // Load GTM
    (function (w: any, d: Document, s: string, l: string, i: string) {
      w[l] = w[l] || [];
      w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
      const f = d.getElementsByTagName(s)[0];
      const j = d.createElement(s) as HTMLScriptElement;
      const dl = l !== 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      if (f?.parentNode) f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', GTM_ID);

    // Load the gtag.js script first
    loadGtagScript();

    // Initialize dataLayer and gtag function
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(arguments);
    }
    (window as any).gtag = gtag;

    // Initialize GA and Google Ads
    gtag('js', new Date());
    gtag('config', GA_ID);
    gtag('config', AW_ID);
  };

  // Watch for consent changes
  watch(
    consent,
    (isAccepted) => {
      if (isAccepted) {
        initGoogleTags();
      }
    },
    { immediate: true },
  );
});
