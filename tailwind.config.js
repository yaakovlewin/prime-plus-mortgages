/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'exo2': ['var(--font-exo-2)'],
        'rubik': ['var(--font-rubik)'],
        'zilla-slab': ['var(--font-zilla-slab)'],
      },
      backgroundImage: {},
      keyframes: {
        rollDown: {
          '0%': {
            transform: 'scaleY(0)',
            transformOrigin: 'top',
            opacity: 0
          },
          '100%': {
            transform: 'scaleY(1)',
            transformOrigin: 'top',
            opacity: 1
          },
        },
      },
      animation: {
        rollDown: 'rollDown 0.5s ease-in-out',
      },
    },
    textShadow: {
      'white': '2px 2px 10px #fff',
      'black': '2px 2px 10px #000',
      'white-sm': '1px 1px 5px #fff',
      'black-sm': '1px 1px 5px #000',
      'white-md': '2px 2px 5px #fff',
      'black-md': '2px 2px 5px #000',
      'white-lg': '3px 3px 10px #fff',
      'black-lg': '3px 3px 5px #000',
      'white-border': '0 0 0.5em #fff, 0 0 0.5em #fff, 0 0 0.5em #fff, 0 0 0.5em #fff',
      'black-border': '0 0 0.5em #000, 0 0 0.5em #000, 0 0 0.5em #000, 0 0 0.5em #000',

    }
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}
