/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{js,ts,jsx,tsx}'],
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      boxShadow: {
        card: '0px 4px 8px rgba(224, 224, 224, 0.3)',
      },
      colors: {
        DAppDeep: '#002C41',
        DAppGray: '#A8A8A8',
      },
      fontFamily: {
        inter: ['var(--font-inter)', ...fontFamily.sans],
      },
      fontSize: {
        '2xl': '1.375rem',
        '3xl': '1.5rem',
      },
      minHeight: {
        'screen-content': 'calc(100vh - 176px)',
      },
    },
  },
  plugins: [],
}
