/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./js/**/*.{js,ts}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			exo2: ["var(--font-exo-2)"],
  			rubik: ["var(--font-rubik)"],
  			'zilla-slab': ["var(--font-zilla-slab)"]
  		},
  		colors: {
  			beige: {
  				'50': '#fffdf7',
  				'100': '#fefcf0',
  				'200': '#fdf9d9',
  				'300': '#fcf6c3',
  				'400': '#f9ee96',
  				'500': '#f6e669',
  				'600': '#e0d05f',
  				'700': '#b8a14c',
  				'800': '#8f733a',
  				'900': '#74602f'
  			}
  		},
  		backgroundImage: {
  			'hero-pattern': 'url("/images/hero-pattern.svg")',
  			'footer-texture': 'url("/images/houses-pattern.jpg")',
  			'footer-texture-2': 'url("/images/footer-texture-2.png")',
  			'footer-texture-3': 'url("/images/footer-texture-3.png")',
  			'footer-texture-4': 'url("/images/footer-texture-4.png")',
  			'footer-texture-5': 'url("/images/footer-texture-5.png")',
  			'footer-texture-6': 'url("/images/footer-texture-6.png")',
  			'footer-texture-7': 'url("/images/footer-texture-7.png")',
  			'footer-texture-8': 'url("/images/footer-texture-8.png")',
  			'footer-texture-9': 'url("/images/footer-texture-9.png")',
  			'footer-texture-10': 'url("/images/footer-texture-10.png")',
  			'footer-texture-11': 'url("/images/footer-texture-11.png")',
  			'footer-texture-12': 'url("/images/footer-texture-12.png")',
  			'footer-texture-13': 'url("/images/footer-texture-13.png")',
  			'footer-texture-14': 'url("/images/footer-texture-14.png")',
  			'footer-texture-15': 'url("/images/footer-texture-15.png")',
  			'footer-texture-16': 'url("/images/footer-texture-16.png")',
  			'footer-texture-17': 'url("/images/footer-texture-17.png")',
  			'footer-texture-18': 'url("/images/footer-texture-18.png")',
  			'footer-texture-19': 'url("/images/footer-texture-19.png")',
  			'footer-texture-20': 'url("/images/footer-texture-20.png")',
  			'footer-texture-21': 'url("/images/footer-texture-21.png")',
  			'footer-texture-22': 'url("/images/footer-texture-22.png")',
  			'footer-texture-23': 'url("/images/footer-texture-23.png")',
  			'footer-texture-24': 'url("/images/footer-texture-24.png")',
  			'footer-texture-25': 'url("/images/footer-texture-25.png")'
  		},
  		keyframes: {
  			rollDown: {
  				'0%': {
  					transform: 'scaleY(0)',
  					transformOrigin: 'top',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'scaleY(1)',
  					transformOrigin: 'top',
  					opacity: '1'
  				}
  			}
  		},
  		animation: {
  			rollDown: 'rollDown 0.5s ease-in-out'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
  	textShadow: {
  		white: '2px 2px 10px #fff',
  		black: '2px 2px 10px #000',
  		'white-sm': '1px 1px 5px #fff',
  		'black-sm': '1px 1px 5px #000',
  		'white-md': '2px 2px 5px #fff',
  		'black-md': '2px 2px 5px #000',
  		'white-lg': '3px 3px 10px #fff',
  		'black-lg': '3px 3px 4px #000',
  		'white-border': '0 0 0.5em #fff, 0 0 0.5em #fff, 0 0 0.5em #fff, 0 0 0.5em #fff',
  		'black-border': '0 0 0.5em #000, 0 0 0.5em #000, 0 0 0.5em #000, 0 0 0.5em #000',
  		'white-border-sm': '0 0 0.25em #fff, 0 0 0.25em #fff, 0 0 0.25em #fff, 0 0 0.25em #fff',
  		'black-border-sm': '0 0 0.25em #000, 0 0 0.25em #000, 0 0 0.25em #000, 0 0 0.25em #000',
  		'white-border-md': '0 0 0.5em #fff, 0 0 0.5em #fff, 0 0 0.5em #fff, 0 0 0.5em #fff',
  		'black-border-md': '0 0 0.5em #000, 0 0 0.5em #000, 0 0 0.5em #000, 0 0 0.5em #000',
  		'white-border-lg': '0 0 1em #fff, 0 0 1em #fff, 0 0 1em #fff, 0 0 1em #fff',
  		'black-border-lg': '0 0 1em #000, 0 0 1em #000, 0 0 1em #000, 0 0 1em #000',
  		natural: '0 0 0.5em #000, 0 0 0.5em #000, 0 0 0.5em #000, 0 0 0.5em #000',
  		'natural-sm': '1px 1px 5px #D4D4D4',
  		none: 'none'
  	}
  },
  plugins: [
    require("tailwindcss-hero-patterns"),
    require("@tailwindcss/forms"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
    }),
      require("tailwindcss-animate")
],
};
