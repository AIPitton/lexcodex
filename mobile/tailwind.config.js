/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      tr: 'transparent',
      r: '#991B1B',
      y: '#FDE047',
      b: '#1D4ED8',
      g: '#14532D',
      B: '#000000',
      W: '#FFFFFF',
      s: '#0C4A6E',
      o: '#EA580C',
      gr: '#6F6F6F',
    },
    fontFamily: {
      bookerly: 'BookerlyRegular',
      bookerlyBold: 'BookerlyBold',
    },
    extend: {
      height: {
        909: '9.090909090909091%',
      },
    },
  },
  plugins: [],
}
