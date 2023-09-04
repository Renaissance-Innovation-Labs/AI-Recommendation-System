/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans'],
        'nunito-sans': ['Nunito Sans', 'sans'],
        roboto: ['Roboto', 'sans'],
      },
      colors: {
        'primary-green': '#125252',
        'primary-gray': '#727272',
        'primary-red': '#D55015',
        'off-white': '#f4f4f4',
        'offed-white': '#F6F6F6',
        'bazaar-black': '#121212',
        'green-1': '#104141',
        'orange-1': '#EB8517',
        'primary-white': '#FFFFFF',
        'orange-background': 'rgba(213, 80, 21, 0.08)',
      }
    },
  },
  plugins: [],
}

