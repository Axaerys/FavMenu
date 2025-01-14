/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        baumans: ['Baumans', 'cursive'],
        playwrite: ['Playwrite DE Grund', 'sans-serif'],
      },
      colors: {
        "dark-red": "#CC0000", // CC0000 , FF6452
        "slate-gray": "#6D6D6D",
        "bg": "#111111",
        "dark-gray": "#1E1E1E",
        "light-gray" : "#393939"
      },
      boxShadow: {
        '3xl': '0 0 15px rgba(0, 0, 0, 0.4)',
        '3xlhover': '0 10px 20px rgba(0, 0, 0, 0.6)'
      },
      screens: {
        "wide": "1440px",
        "4xl" : "1920px"
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-black': {
          textShadow: '0px 0px 3px black',
        },
        '.text-shadow-white': {
          textShadow: '0px 0px 1px white',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}