import { defineNuxtPlugin } from '#imports'

export default defineNuxtPlugin(() => {
  // only run in the browser
  if (process.client) {
    // Defer Facebook Pixel loading until after initial page load
    // This improves Time to Interactive (TTI) and Total Blocking Time (TBT)
    const loadFacebookPixel = () => {
      // Check if already loaded
      if (window.fbq) return;

      // 1) Load the Pixel script
      ;(function(f,b,e,v,n,t,s){
        if (f.fbq) return;
        n = f.fbq = function(){ n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments) };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

      // 2) Init & track the first pageview only
      window.fbq('init', '1415971713055988');
      window.fbq('track', 'PageView');

      // Note: 'Lead' event removed from automatic tracking
      // To track Lead conversions, manually call: window.fbq('track', 'Lead')
      // in specific components like contact form, booking confirmation, etc.
    };

    // Load after 3 seconds OR on first user interaction (whichever comes first)
    let loaded = false;

    const load = () => {
      if (!loaded) {
        loaded = true;
        loadFacebookPixel();
      }
    };

    // Load on user interaction for better perceived performance
    const events = ['mousedown', 'touchstart', 'scroll', 'keydown'];
    events.forEach(event => {
      window.addEventListener(event, load, { once: true, passive: true });
    });

    // Fallback: load after 3 seconds if no interaction
    setTimeout(load, 3000);
  }
});