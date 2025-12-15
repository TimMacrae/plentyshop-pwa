export default defineNuxtPlugin(() => {
  const GA_ID = 'G-S9E456KPLB';
  const COOKIE_NAME = 'CookieBar.marketing.cookies.googleAnalytics.name';

  const { consent } = useCookieConsent(COOKIE_NAME);

  const loadGoogleAnalytics = () => {
    // CUSTOM google analytics loading script
    if (typeof window === 'undefined') return;
    if ((window as any).__gaLoaded) return;
    (window as any).__gaLoaded = true;

    // Load gtag.js script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    // Initialize dataLayer and gtag
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }
    (window as any).gtag = gtag;

    gtag('js', new Date());
    gtag('config', GA_ID);
  };

  // Watch for consent changes
  watch(
    consent,
    (accepted) => {
      console.log(`Google Analytics consent changed: ${accepted}`);
      if (accepted) {
        loadGoogleAnalytics();
      }
    },
    { immediate: true },
  );
});
