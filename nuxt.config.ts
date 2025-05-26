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
    id: 'GTM-MNJ8LQSZ'
  },
  plugins: ['~/plugins/facebook-pixel.client.js'],
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
        name: 'English',
        file: 'en.json',
        label: 'English',
        flag: '/flags/gb.svg' // or use a PNG like /flags/gb.png
      },
      {
        code: 'ru',
        name: 'Русский',
        file: 'ru.json',
        label: 'Русский',
        flag: '/flags/ru.svg'
      }
    ],
    bundle: {
      optimizeTranslationDirective: false,
    },
    defaultLocale: "en",
    lazy: true,
    langDir: "locales/",
    strategy: 'prefix_except_default',
    
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      alwaysRedirect: true,
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
    structuredData: [
      // Business schema with OfferCatalog of services
      {
        type: 'ChauffeurService',
        data: {
          name: 'Silk Ride Chauffeur Services',
          url: 'https://silkride.co.uk',
          logo: 'https://silkride.co.uk/logo.png',
          telephone: '+44 7512 905514',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '42 Watling Street',
            addressLocality: 'Radlett',
            postalCode: 'WD7 7NN',
            addressCountry: 'GB'
          },
          areaServed: [
            'London Heathrow Airport T2 & T3',
            'London Heathrow Airport T4',
            'London Heathrow Airport T5',
            'London Gatwick Airport',
            'London Stansted Airport',
            'London Luton Airport',
            'London Biggin Hill Airport',
            'Farnborough Airport'
          ],
          priceRange: '££–£££',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Silk Ride Service List',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hourly Chauffeur Hire', serviceType: 'Hourly Chauffeur Hire' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Airport Transfer', serviceType: 'Airport Transfer' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Transfer Across UK & Europe', serviceType: 'Transfer Across UK & Europe' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'City Tours', serviceType: 'City Tours' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Event Chauffeur', serviceType: 'Event Chauffeur' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wedding Chauffeur', serviceType: 'Wedding Chauffeur' } }
            ]
          }
        }
      }
    ]
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
  app: {
    head: {
      noscript: [
        {
          children:
            '<img height="1" width="1" style="display:none" ' +
            'src="https://www.facebook.com/tr?id=1036069138475539&ev=PageView&noscript=1" />'
        }
      ]
    }
  }
});