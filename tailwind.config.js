/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: '#f6f0e7',
        earth: '#9b6b43',
        clay: '#c07b54',
        ink: '#1c1a19',
        mist: '#fef7ea',
        leaf: '#2f5d50',
        sun: '#f4b44f',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
