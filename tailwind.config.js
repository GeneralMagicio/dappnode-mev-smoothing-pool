/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{js,ts,jsx,tsx}'],
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      minHeight: {
        'screen-content': 'calc(100vh - 176px)',
      },
    },
  },
  plugins: [],
}
