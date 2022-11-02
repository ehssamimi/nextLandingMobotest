/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // content: ["*"],
  theme: {
    extend: {
      fontSize: {
        '40px': ['40px', '63px'],
        '32px': ['32px', '50px'],


      },

      fontFamily: {
        'IranSansMobile': ['IranSansMobile'],
        'FaNum': ['FaNum'],
      },
      spacing: {
        '18px': '18px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'Blaze': '#FF5C00',
        BlackPearl: {
          50: 'rgba(4, 25, 41, 0.05)',
          100: 'rgba(4, 25, 41, 0.1)',
          200: 'rgba(4, 25, 41, 0.2)',
          300: 'rgba(4, 25, 41, 0.3)',
          400: 'rgba(4, 25, 41, 0.4)',
          480: 'rgba(4, 25, 41, 0.48  )',
          500: 'rgba(4, 25, 41, 0.5)',
          600: 'rgba(4, 25, 41, 0.6)',
          640: 'rgba(4, 25, 41, 0.64)',
          700: 'rgba(4, 25, 41, 0.7)',
          800: 'rgba(4, 25, 41, 0.8)',
          900: 'rgba(4, 25, 41, 0.9)',
          1000: 'rgba(4, 25, 41, 1)',
        },
        "AthensGray":"#FAFBFC",
        "Line":"#FCF6F2"


        // ...
      },

    },
  },
  plugins: [],
}
