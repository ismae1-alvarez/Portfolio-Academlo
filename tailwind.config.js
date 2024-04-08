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
				// '' : 'linear-gradient(to top, transparent 10%, rgba(0, 255, 255, 0.449) 60%, rgba(0, 255, 255, 0.526)70%, #01eeffe4 90%)',
        'prueba2' : 'linear-gradient(to top, rgba(255, 244, 210, 0.2) 10%, rgba(255, 244, 210, 0.4) 60%, rgba(255, 244, 210, 0.6) 70%, rgba(249, 235, 216, 0.9) 90%)        ',
        'prueba':'linear-gradient(to top, rgba(0, 0, 0, 0.3) 10%, rgba(0, 0, 0, 0.5) 60%, rgba(0, 0, 0, 0.7) 70%, rgba(0, 0, 0, 0.9) 90%)        '
      
      }
    },
  },
  plugins: [],
}

