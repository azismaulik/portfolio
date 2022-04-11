const colors = require('tailwindcss/colors')

module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        pink: '#831843',
        warning: '#fbbf24',
        indigo: '#4338ca',
        primary: '#14b8a6',
        dark: '#0f172a',
        blue: '#164e63',
        teal: '#134e4a',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}
