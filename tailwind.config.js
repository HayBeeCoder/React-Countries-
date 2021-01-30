const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['src/**/*.js', 'public/index.html'],
   darkMode: 'class', // or 'media' or 'class'
   theme: {
    fontFamily: {
      'nunito': ['"Nunito Sans"' , 'sans-serif']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
      blueGray: colors.blueGray
    },
  extend: {
    fontSize: {
      'tinyx': '.80rem',
       'tiny': '.825rem'
    },
      colors: {
        gray: {
           450: '#858585',
           950: '#111517',
        },
        blue:{
          750: '#2B3945'
        },
        blueGray:{
          750: '#202C37'
        }
      }
    },
  },
   variants: {
     extend: {},
   },
   plugins: [],
 }