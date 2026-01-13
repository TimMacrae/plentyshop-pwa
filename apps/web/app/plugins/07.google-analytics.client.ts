export default defineNuxtPlugin(() => {
  const GA_ID = 'G-L06RFCXZDR';
  const AW_ID = 'AW-600197642';
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
