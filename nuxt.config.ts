// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname),
    "~": resolve(__dirname),
  },
  image: {
    // Configuration options (if any)
  },
  css: ['~/assets/css/main.css','boxicons/css/boxicons.min.css'],
  modules: ["@nuxtjs/seo", "@nuxtjs/google-fonts",'@nuxt/image', "@pinia/nuxt"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
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
})
