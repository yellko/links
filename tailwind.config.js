//tailwind.config.js
const colors  = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {},
      borderWidth: {
        '3': '3px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
