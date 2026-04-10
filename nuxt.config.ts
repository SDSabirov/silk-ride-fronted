// https://nuxt.com/docs/api/configuration/nuxt-config

// Fetch blog post slugs from Sanity ONCE at build time. Shared by both
// nitro.prerender.routes (to generate static HTML per post) and sitemap.urls
// (to list them in sitemap.xml). Runs at `nuxt build` time in CI with
// SANITY_PROJECT_ID in env.
type SanityBlogPost = { slug: string; language?: string; publishedAt?: string }

async function fetchSanityBlogPosts(): Promise<SanityBlogPost[]> {
  const projectId = process.env.SANITY_PROJECT_ID
  const dataset = process.env.SANITY_DATASET || 'production'
  if (!projectId) {
    console.warn('[build] SANITY_PROJECT_ID not set — skipping blog slug fetch')
    return []
  }
  const query = encodeURIComponent(
    '*[_type == "post" && defined(slug.current)]{ "slug": slug.current, language, publishedAt }'
  )
  const url = `https://${projectId}.api.sanity.io/v2024-01-01/data/query/${dataset}?query=${query}`
  try {
    const r = await fetch(url)
    if (!r.ok) throw new Error(`Sanity responded ${r.status}`)
    const { result = [] } = await r.json()
    return Array.isArray(result) ? result : []
  } catch (e) {
    console.error('[build] Failed to fetch blog slugs from Sanity:', e)
    return []
  }
}

const blogPosts = await fetchSanityBlogPosts()

const blogPrerenderRoutes: string[] = ['/blog', '/ru/blog']
for (const post of blogPosts) {
  if (!post.slug) continue
  if (post.language === 'ru') blogPrerenderRoutes.push(`/ru/blog/${post.slug}`)
  else blogPrerenderRoutes.push(`/blog/${post.slug}`)
}

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
    preset: 'cloudflare-pages',
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/ru',
        '/sitemap.xml',
        '/robots.txt',
        ...blogPrerenderRoutes,
      ],
      // /api/** is served by the Cloudflare Pages Functions runtime (Workers)
      ignore: ['/api/**'],
      failOnError: false,
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

      // Reuse the blog slugs already fetched for nitro.prerender.routes
      // (see fetchSanityBlogPosts at the top of this file). This avoids a
      // second round-trip to Sanity per build.
      const blogUrls = blogPosts
        .filter((post) => post.slug && post.language !== 'ru')
        .map((post) => ({
          loc: `/blog/${post.slug}`,
          priority: 0.7,
          changefreq: 'monthly',
          lastmod: post.publishedAt || new Date().toISOString(),
        }))

      return [...staticUrls, ...blogUrls]
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
      // NOTE: @nuxtjs/google-fonts in this version has a known bug where
      // multi-weight families generate @font-face rules that all src: the
      // lowest weight's woff2 file (verified in build output). As a result
      // only the first listed weight is actually rendered correctly; the
      // others are browser-synthesised. Keep this list to weights that are
      // actually used to avoid wasting downloads. Playfair Display only
      // ever pairs with font-bold (700) in the codebase (grep-confirmed), so
      // 400 here acts as the rendered weight for any unexpected fallback.
      // Fix: migrate to @nuxt/fonts in Phase 1.
      "Playfair+Display": [400, 700],
      "Open+Sans": [300, 400, 600],
    },
    display: "swap",
    preload: true,
    preconnect: true,
    inject: true
  },
 
 
});