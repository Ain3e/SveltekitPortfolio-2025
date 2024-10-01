/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors:{
      Black: '#111111',
      White: '#FFFFFF',
      Grayline: '#292929',
      Gray: '#7B7B7B',
      offWhite: '#888888',
      trueblack: '#000000',
    },
    extend: {
      fontFamily: {
        suisseIntl: ['Suisse Intl'],
      },
      fontWeight: {
        regular: 400,
        bold: 700,
        thin: 265,
        medium: 500,
      },

      fontSize:{
        '14px': '0.875rem',
        '17px': '1.0625rem',
        '20px': '1.25rem',
        '36px': '2.25rem',
        '48px': '3rem',

      },

      borderRadius:{
        '5px': '0.3125rem',

      },

      lineHeight: {
        'h1': '3.59925rem',
        'h2': '2.9375rem',
      },
      fontSmoothing: {
        antialiased: '-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;',
        grayscale: '-webkit-font-smoothing: auto; -moz-osx-font-smoothing: grayscale;',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.font-smoothing-antialiased': {
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
        },
        '.font-smoothing-auto': {
          '-webkit-font-smoothing': 'auto',
          '-moz-osx-font-smoothing': 'auto',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}


