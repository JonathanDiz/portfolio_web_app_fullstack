/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [ "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        starjedi: 'starjedi',
      },
      colors: {
        'star-light': '#c6bbaa',
        'star-light-tone': '#f5f3f0',
        'star-light-ceniza': '#22211f'
      }
    },
  },
  plugins: [],
}
