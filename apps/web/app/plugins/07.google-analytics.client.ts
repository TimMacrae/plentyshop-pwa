export default defineNuxtPlugin(() => {
  const GA_ID = 'G-L06RFCXZDR';
  const COOKIE_NAME = 'CookieBar.marketing.cookies.googleAnalytics.name';

  const { consent } = useCookieConsent(COOKIE_NAME);

  const initGoogleAnalytics = () => {
    if (typeof window === 'undefined') return;
    if ((window as any).__gaInitialized) return;
    (window as any).__gaInitialized = true;

    // Initialize dataLayer and gtag function
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(arguments);
    }
    (window as any).gtag = gtag;

    // Initialize GA
    gtag('js', new Date());
    gtag('config', GA_ID);
  };

  // Watch for consent changes
  watch(
    consent,
    (isAccepted) => {
      if (isAccepted) {
        initGoogleAnalytics();
      }
    },
    { immediate: true },
  );
});
