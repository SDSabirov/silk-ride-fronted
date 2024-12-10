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
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        heading: ['Libre Baskerville', 'serif'],
      },
      boxShadow: {
        'glow': '0 0 10px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 0, 0, 0.4), 0 0 30px rgba(0, 0, 0, 0.4)'
      },
      keyframes: {
        fillBlack: {
          '0%': { left: '-100%' },
          '100%': { left: '0' },
        },
      },
      animation: {
        'fill-left-to-right': 'fill 1.5s ease forwards',
      },
    },
  },
  plugins: [

  ],

}