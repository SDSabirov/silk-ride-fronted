// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      siteUrl: 'https://silkride.co.uk'
    }
  },
  experimental: {
    payloadExtraction: false,
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
    compressPublicAssets: true,
    routeRules: {
      '/__sitemap__/en.xml': { redirect: '/__sitemap__/en-GB.xml' },
      '/__sitemap__/ru.xml': { redirect: '/__sitemap__/ru-RU.xml' },
    },
  },
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              if (id.includes('vue') || id.includes('vue-router')) {
                return 'vue-vendor';
              }
            }
          }
        }
      }
    }
  },
  alias: {
    "@": resolve(__dirname),
    "~": resolve(__dirname),
  },
  image: {
    format: ['webp', 'avif'],
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    densities: [1, 2],
    presets: {
      hero: {
        modifiers: {
          format: 'webp',
          quality: 85,
          width: 800,
          height: 1000,
        }
      },
      thumbnail: {
        modifiers: {
          format: 'webp',
          quality: 75,
          width: 400,
          height: 300,
        }
      },
      cover: {
        modifiers: {
          format: 'webp',
          quality: 80,
          fit: 'cover',
        }
      }
    }
  },
  css: ["~/assets/css/main.css", "boxicons/css/boxicons.min.css"],
  modules: ["@nuxtjs/seo", "@nuxtjs/google-fonts", "@nuxt/image", "@pinia/nuxt", "@nuxtjs/i18n", 'nuxt-gtag'],
  gtag: {
    // Optimize loading strategy for better performance
    loadingStrategy: 'defer', // Defer loading for better Time to Interactive
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
      // Google Ads conversion tracking
      }
    ]
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
    url: 'https://silkride.co.uk',
    name:"Silk Ride Chauffeur Services",
  },
  sitemap: {
    enabled: true,
    strictNuxtContentPaths: true,
    xsl: false,
    autoI18n: true,
    defaultLocale: 'en',
    urls: async () => {
      // Add any dynamic routes here if needed
      return []
    },
    exclude: [
      '/booking/cancel',
      '/booking/success',
      '/blog/**'
    ]
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
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
      ]
    }
  },
  googleFonts: {
    families: {
      "Playfair+Display": [400, 500, 700],
      "Open+Sans": [300, 400, 600],
    },
    display: "swap",
    preload: true,
    preconnect: true,
    inject: true
  },
 
 
});