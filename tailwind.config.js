/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
  },
  plugins: [],
}
