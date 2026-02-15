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
    // Google Consent Mode v2 Implementation
    // initCommands run BEFORE gtag('config') - this is where consent defaults MUST be set
    loadingStrategy: 'async',
    initCommands: [
      // Set consent defaults to DENIED - enables cookieless pings for users who haven't consented
      // This MUST run before gtag('config') for Consent Mode v2 to work properly
      ['consent', 'default', {
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        analytics_storage: 'denied',
        functionality_storage: 'denied',
        personalization_storage: 'denied',
        security_storage: 'granted',
        wait_for_update: 500 // Wait 500ms for consent banner interaction
      }]
    ],
    tags:[
      {
        id: 'G-KGTCEM0MZ4',
        config: {
          send_page_view: true,
          anonymize_ip: true,
          // Custom dimensions for traffic attribution
          custom_map: {
            'dimension1': 'traffic_source',
            'dimension2': 'traffic_medium',
            'dimension3': 'landing_page'
          }
        }
      },
      {
        id: 'AW-16982457254',
        // Google Ads conversion tracking - Consent Mode v2 handles consent automatically
        // Conversion labels:
        // - Lead: AW-16982457254/GijACI3t0PMbEKb37qE_
        config: {
          allow_ad_personalization_signals: false
        }
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
  site: {
    url: 'https://silkride.co.uk',
    name: 'Silk Ride Chauffeur Services',
    description: 'Silk Ride Chauffeur Services offers premium airport transfers to Heathrow, Gatwick, Luton, Stansted & beyond, luxury business transport in Central London, wedding cars, and more.',
    defaultLocale: 'en',
  },
  sitemap: {
    enabled: true,
    strictNuxtContentPaths: true,
    xsl: false,
    autoI18n: true,
    defaultLocale: 'en',
    defaults: {
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString()
    },
    urls: async () => {
      // High priority pages with custom settings
      return [
        { loc: '/', priority: 1.0, changefreq: 'daily' },
        { loc: '/services', priority: 0.9, changefreq: 'weekly' },
        { loc: '/services/airport-transfers', priority: 0.9, changefreq: 'weekly' },
        { loc: '/fleet', priority: 0.9, changefreq: 'weekly' },
        { loc: '/booking', priority: 0.9, changefreq: 'weekly' },
        { loc: '/contact-us', priority: 0.8, changefreq: 'monthly' }
      ]
    },
    exclude: [
      '/booking/cancel',
      '/booking/success',
      '/customer',
      '/customer/**',
      '/blog/**',
      '/api/**'
    ]
  },
  app: {
    head: {
      titleTemplate: '%s | Silk Ride',
      meta: [
        { name: 'author', content: 'Silk Ride Ltd' },
        { property: 'og:site_name', content: 'Silk Ride' },
        { property: 'og:image', content: 'https://silkride.co.uk/og-image.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@silkridechauffeur' },
      ],
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