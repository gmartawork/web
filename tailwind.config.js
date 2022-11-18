/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },

      backgroundImage:{
        app: 'url(/app-bg.png)'
      },

      colors: {
        ignite: {
          500: '#129e57'
        },
        yellow:{
          500: '#F7DD43',
          700: '#E5CD3D'
        },
        gray: {
          600: '#323238',
          300: '#8D8D99',
          800: '#202024',
          900: '#121214',
          100: '#E1E1E6'
        }
      }
    },
  },
  plugins: [],
}
