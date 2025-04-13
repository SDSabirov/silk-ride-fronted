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
  modules: [
    "@nuxtjs/seo",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
  ],
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
    optimizeTranslationDirective: false,
    defaultLocale: "en",
    lazy: true,
    langDir: "locales/",
    strategy: "prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      alwaysRedirect: true,
      fallbackLocale: "en",
    },
  },
  seo: {
    baseUrl: "https://silkride.co.uk",
    siteName: "Silk Ride Chauffeur Services",
    title: "Luxury Chauffeur & Airport Transfers in London | Silk Ride",
    description:
      "Silk Ride Chauffeur Services offers premium airport transfers to Heathrow, Gatwick, Luton, and Stansted, luxury business transport in Central London, wedding cars, and more. Travel in comfort and style with our V-Class, E-Class, and S-Class vehicles.",
    ogSiteName: "Silk Ride",
    ogTitle: "Luxury Chauffeur & Airport Transfers in London | Silk Ride",
    ogDescription:
      "Experience exceptional chauffeur service across London and all major airports with Silk Ride.",
    ogImage: "/og-image.jpg", // Ensure this image exists in your `public/` folder
    twitterCard: "summary_large_image",
    twitterSite: "@silkridechauffeur", // optional if you have a handle
    lang: "en",
    additionalMeta: [{ name: "author", content: "Silk Ride Ltd" }],
  },
  googleFonts: {
    families: {
      "Playfair+Display": [400, 500, 700],
      "Open+Sans": [300, 400, 600], // For multi-word font names
    },
    display: "swap", // Optional: Controls font-display behavior
  },
  robots: {
    UserAgent: "*", // Applies to all user agents
    Disallow: "/admin", // Disallow access to admin pages
    Allow: "/", // Allow access to all other pages
  },
});
