
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark' :  '#202022',
        'light': '#efe7da',
      },
      backgroundImage:{
        'prueba2' : 'linear-gradient(to top, rgba(255, 244, 210, 0.2) 10%, rgba(255, 244, 210, 0.4) 60%, rgba(255, 244, 210, 0.6) 70%, rgba(249, 235, 216, 0.9) 90%)        ',
        'prueba':'linear-gradient(to top, rgba(0, 0, 0, 0.3) 10%, rgba(0, 0, 0, 0.5) 60%, rgba(0, 0, 0, 0.7) 70%, rgba(0, 0, 0, 0.9) 90%)',

        'gradient-conic-blue': 'conic-gradient(#04b0ee 20deg, transparent 120deg)',
      },
      // colors : {
      //   'first-color' : '#323847',
      // },

      backgroundColor:{
        'first-color' : '#323847',
      },
      keyframes : {
        fullSpin : {
          '100%' : {
            transform : 'rotate(-360deg)'
          }
        },
       
      },
      animation : {
        fullSpin : {
          fullSpin : 'fullSpin 3s linear infinite'
        }
      },

      screens : {
        'mobil': { max: '639px' },
      'tablet': { max: '767px' },
      'laptop': { max: '1023px' },
      }

    },
  },
  plugins: [],
}

