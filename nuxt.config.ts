// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname),
    "~": resolve(__dirname),
  },
  image: {
    // Configuration options (if any)
  },
  css: ["~/assets/css/main.css", "boxicons/css/boxicons.min.css"],
  modules: ["@nuxtjs/seo", "@nuxtjs/google-fonts", "@nuxt/image", "@pinia/nuxt", "@nuxtjs/i18n", 'nuxt-gtag'],
  gtag: {
    tags:[
      {
      id: 'G-KGTCEM0MZ4',
      config: {
        send_page_view: true,
        anonymize_ip: true
      }
      },
      {
      id:'AW-16982457254',
  
      }
    ]
    , 
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-GB',
        name: 'English',
        file: 'en.json',
        label: 'English',
        flag: '/flags/gb.svg'
      },
      {
        code: 'ru',
        iso: 'ru-RU',
        name: 'Русский',
        file: 'ru.json',
        label: 'Русский',
        flag: '/flags/ru.svg'
      }
    ],
    bundle: {
      optimizeTranslationDirective: false,
    },
    baseUrl: 'https://silkride.co.uk',
    defaultLocale: "en",
    lazy: true,
    langDir: "locales/",
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      alwaysRedirect: false,
      fallbackLocale: "en",
    },
  },
  site:{
    name:"Silk Ride Chauffeur Services",
  },
  seo: {
    baseUrl: 'https://silkride.co.uk',
    siteName: 'Silk Ride Chauffeur Services',
    title: 'Luxury Chauffeur & Airport Transfers in London ',
    description: 'Silk Ride Chauffeur Services offers premium airport transfers to Heathrow, Gatwick, Luton, Stansted & beyond, luxury business transport in Central London, wedding cars, and more. Travel in comfort and style with our V-Class, E-Class, and S-Class vehicles.',
    ogSiteName: 'Silk Ride',
    ogTitle: 'Luxury Chauffeur & Airport Transfers in London | Silk Ride',
    ogDescription: 'Experience exceptional chauffeur service across London and all major airports with Silk Ride.',
    ogImage: '/og-image.jpg',
    twitterCard: 'summary_large_image',
    twitterSite: '@silkridechauffeur',
    lang: 'en',
    additionalMeta: [
      { name: 'author', content: 'Silk Ride Ltd' }
    ],
    
  },
  googleFonts: {
    families: {
      "Playfair+Display": [400, 500, 700],
      "Open+Sans": [300, 400, 600], // For multi-word font names
    },
    display: "swap", 
    preload: true,         // ✅ Adds <link rel="preload"> tags
    preconnect: true,      // ✅ Adds <link rel="preconnect"> to Google fonts
    inject: true 
  },
 
 
});