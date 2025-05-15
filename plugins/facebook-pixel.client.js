import { defineNuxtPlugin, useRouter } from '#imports'

export default defineNuxtPlugin(() => {
  // only run in the browser
  if (process.client) {
    // 1) load the Pixel script
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

    // 2) init & track the first pageview
    window.fbq('init', '1036069138475539');
    window.fbq('track', 'PageView');

    // 3) track subsequent client-side navigations
    const router = useRouter();
    router.afterEach(() => {
      window.fbq('track', 'PageView');
    });
  }
});