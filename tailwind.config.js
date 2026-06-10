/** @type {import('tailwindcss').Config} */
export default {
  content: [
   "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",

  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        garamond: ['"Playfair Display"', 'Georgia', 'serif']
      },
      boxShadow: {
        'glow': '0 0 10px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 0, 0, 0.4), 0 0 30px rgba(0, 0, 0, 0.4)'
      },
      keyframes: {
        fillBlack: {
          '0%': { left: '-100%' },
          '100%': { left: '0' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeRight: {
          '0%': { opacity: '0', transform: 'translateX(50%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '1', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideLeft: {
          '0%': { opacity: '1', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fill-left-to-right': 'fill 1.5s ease forwards',
        fadeDown: 'fadeDown 0.5s ease-out forwards',
        fadeUp: 'fadeUp 0.5s ease-out forwards',
        fadeLeft: 'fadeLeft 0.5s ease-out forwards',
        fadeRight: 'fadeRight 0.5s ease-out forwards',
        slideRight: 'slideRight 0.5s ease-in forwards',
        slideLeft: 'slideLeft 0.5s ease-in forwards',
        marquee: 'marquee 38s linear infinite',
      },
      colors: {
        // Champagne gold ramp — single source of truth for brand gold.
        // design-system.css --color-gold mirrors DEFAULT; do not diverge.
        gold: {
          DEFAULT: '#D4AF37',
          50: '#FBF6E9',
          100: '#F5EBD0',
          200: '#EFD9A7',
          300: '#E9CE89',
          400: '#E3C36A',
          500: '#D4AF37',
          600: '#B8941F',
          700: '#9A7B1A',
          800: '#8C6E14',
        },
        // Warm near-black surface system (homepage dark sections).
        // Warm-hued, not Tailwind's blue-slate gray-900.
        surface: {
          950: '#0A0908',
          900: '#121110',
          800: '#1A1816',
          700: '#242220',
        },
        ivory: '#F7F3EC',
      }
    },
  },
  plugins: [

  ],

}
