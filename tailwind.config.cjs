/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      dropShadow :{
        '6xl': 'box-shadow: 9px 7px 36px -1px rgba(0,0,0,0.69);'
      }
      
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require("daisyui")],
}
