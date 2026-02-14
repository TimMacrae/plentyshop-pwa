export default defineNuxtPlugin(() => {
  const PIXEL_ID = '454235308633272';
  const COOKIE_NAME = 'CookieBar.marketing.cookies.facebookPixel.name';

  const { consent } = useCookieConsent(COOKIE_NAME);

  const initFacebookPixel = () => {
    if (typeof window === 'undefined') return;
    if ((window as any).__fbPixelInitialized) return;
    (window as any).__fbPixelInitialized = true;

    // Facebook Pixel initialization
    (function (f: any, b: Document, e: string, v: string, n?: any, t?: any, s?: any) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e) as HTMLScriptElement;
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode?.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    (window as any).fbq('init', PIXEL_ID);
    (window as any).fbq('track', 'PageView');
  };

  // Watch for consent changes
  watch(
    consent,
    (isAccepted) => {
      if (isAccepted) {
        initFacebookPixel();
      }
    },
    { immediate: true },
  );
});
