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
      colors: {
        blue: {
          'primary': '#4C92D1',
          // '100': '#e4eefa',
          // '200': '#c2dcf5',
          // '300': '#8cc2ed',
          // '400': '#2790fd',
          // '500': '#0d83fd',
          // '600': '#1a69af',
          // '700': '#16548e',
          // '800': '#164876',
          // '900': '#183e62',
          // '950': '#2d465e'
        }
      },
      backgroundColor: {
        blue: {
          '500': "#0d83fd",
        },
      },
       fontFamily: {
        jacques: ['"Jacques Francois"', 'serif'],
        alex: ['"Alex Brush"', 'cursive'],
      },
    },
  },
  plugins: [],
}



