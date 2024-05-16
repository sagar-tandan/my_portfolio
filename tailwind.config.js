/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'SagarFont':['Poppins','sans-serif'], 
        'Midtown':['Midtown','Poppins','sans-serif'],     }
    },
  },
  plugins: [
    function({addUtilities}){
      const newUtilities = {
        ".no-Scrollbat ::-webkit-scrollbar":{
          display:"none",
        },
        ".no-scrollbar":{
          ".-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};

