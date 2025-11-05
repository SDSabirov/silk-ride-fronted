export default defineNuxtPlugin(() => {
  if (process.client) {
    // Skip if script already added
    if (document.querySelector('script[src="https://mc.yandex.ru/metrika/tag.js"]')) return;

    const loadYandexMetrica = () => {
      (function (m, e, t, r, i, k, a) {
        m[i] = m[i] || function () {
          (m[i].a = m[i].a || []).push(arguments)
        };
        m[i].l = 1 * new Date();
        k = e.createElement(t), a = e.getElementsByTagName(t)[0];
        k.async = 1;
        k.src = r;
        k.onload = () => {
          if (typeof window.ym === 'function') {
            window.ym(102229971, "init", {
              clickmap: true,
              trackLinks: true,
              accurateTrackBounce: true,
              webvisor: false, // Disabled for performance - webvisor records sessions with high overhead
              // To enable webvisor for debugging: set to true
            });
          }
        };
        a.parentNode.insertBefore(k, a);
      })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
    };

    // Defer Yandex Metrica loading for better initial page performance
    // Load after 4 seconds OR on user interaction (whichever comes first)
    let loaded = false;

    const load = () => {
      if (!loaded) {
        loaded = true;
        loadYandexMetrica();
      }
    };

    // Load on user interaction
    const events = ['mousedown', 'touchstart', 'scroll', 'keydown'];
    events.forEach(event => {
      window.addEventListener(event, load, { once: true, passive: true });
    });

    // Fallback: load after 4 seconds if no interaction
    setTimeout(load, 4000);
  }
});