/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'SagarFont':['Poppins','sans-serif'], 
        'SagarFont2':['Dancing Script','sans-serif'],     }
    },
  },
  plugins: [],
}

