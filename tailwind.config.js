/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        "bg-img" : "url('/public/solid.jpg')"
      }
    },
    colors : {
      red :'#D22B2B',
      white : '#FFFFFF',
      black : '#023020'
    },
    fontFamily : {
      montserrat : ['Montserrat', 'sans-serif'],
      roboto : ['Roboto','sans-serif']
    }
  },
  plugins: [
    require('daisyui'),
  ],
}

