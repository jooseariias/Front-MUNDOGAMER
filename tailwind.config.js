/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'primary':'Bungee Shade, cursive',
        'secundary':'Tomorrow, sans-serif'
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

