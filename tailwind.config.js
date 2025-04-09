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
        garamond: ['Cormorant Garamond', 'serif']
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
      },
      animation: {
        'fill-left-to-right': 'fill 1.5s ease forwards',
        fadeDown: 'fadeDown 0.5s ease-out forwards',
        fadeUp: 'fadeUp 0.5s ease-out forwards',
        fadeLeft: 'fadeLeft 0.5s ease-out forwards',
        fadeRight: 'fadeRight 0.5s ease-out forwards',
        slideRight: 'slideRight 0.5s ease-in forwards',
        slideLeft: 'slideLeft 0.5s ease-in forwards',
      },
      colors: {
        'gold':'#FFCB6C'
      }
    },
  },
  plugins: [

  ],

}