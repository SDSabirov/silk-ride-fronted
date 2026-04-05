// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-03-18",
  srcDir: '.',
  devtools: { enabled: false },
  runtimeConfig: {
    googlePlacesApiKey: process.env.GOOGLE_PLACES_API_KEY || '',
    googlePlaceId: process.env.GOOGLE_PLACE_ID || '',
    public: {
      siteUrl: 'https://silkride.co.uk',
      sanity: {
        projectId: process.env.SANITY_PROJECT_ID || '',
        dataset: process.env.SANITY_DATASET || 'production',
      }
    }
  },
  experimental: {
    payloadExtraction: false,
  },
  nitro: {
    prerender: {
      crawlLinks: false,
      routes: [],
    },
    compressPublicAssets: true,
    routeRules: {
      '/__sitemap__/en.xml': { redirect: '/__sitemap__/en-GB.xml' },
      '/__sitemap__/ru.xml': { redirect: '/__sitemap__/ru-RU.xml' },
      // 301 redirects for moved/renamed pages (fixes GSC 404s and 5xx errors)
      '/booking/customer': { redirect: { to: '/customer', statusCode: 301 } },
      '/booking/customer/': { redirect: { to: '/customer', statusCode: 301 } },
      '/our-partners': { redirect: { to: '/partners', statusCode: 301 } },
      '/our-partners/': { redirect: { to: '/partners', statusCode: 301 } },
      '/testimonials': { redirect: { to: '/', statusCode: 301 } },
      '/testimonials/': { redirect: { to: '/', statusCode: 301 } },
      '/Luxury': { redirect: { to: '/', statusCode: 301 } },
      '/Luxury/': { redirect: { to: '/', statusCode: 301 } },
      // Trailing slash redirects handled globally by middleware/redirect-en.global.ts
    },
  },
  vite: {
    server: {
      proxy: {
        '/api/widget': {
          target: 'https://api.chat4biz.com',
          changeOrigin: true,
        },
        '/ws/chat': {
          target: 'https://api.chat4biz.com',
          changeOrigin: true,
          ws: true,
        },
      },
    },
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
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/seo", "@nuxtjs/google-fonts", "@nuxt/image", "@pinia/nuxt", "@nuxtjs/i18n", 'nuxt-gtag'],
  ogImage: {
    enabled: false,
  },
  gtag: {
    // Google Consent Mode v2 - Advanced Mode Implementation
    // Consent defaults are set via 00.consent-mode.client.ts plugin which runs BEFORE nuxt-gtag
    // This ensures gtag.js loads and sends cookieless pings even when consent is denied
    loadingStrategy: 'async',
    tags:[
      {
        id: 'G-KGTCEM0MZ4',
        config: {
          send_page_view: true,
          anonymize_ip: true,
          custom_map: {
            'dimension1': 'traffic_source',
            'dimension2': 'traffic_medium',
            'dimension3': 'landing_page'
          }
        }
      },
      {
        id: 'AW-16982457254',
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
        language: 'en-GB',
        name: 'English',
        file: 'en.json',
        label: 'English',
        flag: '/flags/gb.svg'
      },
      {
        code: 'ru',
        language: 'ru-RU',
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
      const staticUrls = [
        { loc: '/', priority: 1.0, changefreq: 'daily' },
        { loc: '/services', priority: 0.9, changefreq: 'weekly' },
        { loc: '/services/airport-transfers', priority: 0.9, changefreq: 'weekly' },
        { loc: '/fleet', priority: 0.9, changefreq: 'weekly' },
        { loc: '/booking', priority: 0.9, changefreq: 'weekly' },
        { loc: '/contact-us', priority: 0.8, changefreq: 'monthly' },
        { loc: '/blog', priority: 0.8, changefreq: 'daily' },
        { loc: '/airport-transfers/biggin-hill', priority: 0.8, changefreq: 'weekly' },
        { loc: '/airport-transfers/farnborough', priority: 0.8, changefreq: 'weekly' },
      ]

      // Fetch blog post slugs from Sanity for dynamic sitemap entries
      try {
        const projectId = process.env.SANITY_PROJECT_ID
        const dataset = process.env.SANITY_DATASET || 'production'
        if (projectId) {
          const query = encodeURIComponent('*[_type == "post"]{ "slug": slug.current, publishedAt }')
          const url = `https://${projectId}.api.sanity.io/v2024-01-01/data/query/${dataset}?query=${query}`
          const response = await fetch(url)
          const data = await response.json()
          if (data.result) {
            const blogUrls = data.result.map((post: any) => ({
              loc: `/blog/${post.slug}`,
              priority: 0.7,
              changefreq: 'monthly',
              lastmod: post.publishedAt || new Date().toISOString(),
            }))
            return [...staticUrls, ...blogUrls]
          }
        }
      } catch (e) {
        // Silently fall back to static URLs if Sanity is unavailable
      }

      return staticUrls
    },
    exclude: [
      '/booking/cancel',
      '/booking/success',
      '/customer',
      '/customer/**',
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
      ],
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