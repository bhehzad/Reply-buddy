/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      '4xl': '2.75rem',
    },

    extend: {
      screens: {
        'small': '350px',

        'mobile': '375px',
        // => @media (min-width: 640px) { ... }
        
        'custom': '420px',

        'tablet': '576px',
        // => @media (min-width: 1024px) { ... }
  
        'laptop': '993px',

        'howworks': '856px',

        // 'query': '925px',

        'query': '924px',

        'container-full': '1100px',

        'spacer': '830px',
        // => @media (min-width: 1280px) { ... }

        'review': '1150px',

        'mdscreen': '1200px',

        'medium': '1300px', 

        'desktop': '1400px',
      },

      fontFamily: {
        lato: ['Lato'],
        latosemibold: ['lato-semibold']
      },


      //color
      colors: {
      primaryvarient: '#9D6FFE',
      primary: '#804EEA',
      primary25: '#FAF8FF',
      neutral: '#8F8F8F',
      neutral50: '#F8F8F8',
      neutral200: '#E5E5E5',
      neutral500: '#676767',
      neutral700: '#545454',
      neutral900: '#161616',
      purplish: '#180345',
      gradcolor: 'rgba(rgba(250, 248, 255, 0)',
      gradcolor1: 'rgba(250, 248, 255, 0.796879)',

    },

    fontSize: {
      'btn-xs': '.875rem',
      'small': '1.37rem',

    },

    fontSize: {
      textxl4: ['44px', '55px'],
    },

    margin: {
      '15.5': '15.5rem',
      
    },

    spacing: {
      '32.5': '9rem',
      '68' : '17rem',
      '100' : '25rem',
      '102' : '25.5rem',
      '104' : '26rem',
      'top': '5rem',
      '15': '3.75rem',
      'bottom': '3.56rem',
      'leftright': '8.093rem',
    },

    padding: {
      'top': '5rem',
      '15': '3.75rem',
      'bottom': '3.56rem',
      'leftright': '8.093rem',
      '2.37': '2.375rem',
    },

    inset: {
      '32.5': '9rem',
      '68' : '17rem',
      '100' : '25rem',
      '102' : '25.5rem',
      '104' : '26rem',
    },

    backgroundPosition: {
      'rr': '30rem',
    }




      
    },
  },
  plugins: [],
}
