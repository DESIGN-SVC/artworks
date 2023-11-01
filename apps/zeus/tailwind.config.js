/** @type {import('tailwindcss').Config} */
export default {
  purge: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      'white': {
        '100': '#FFFFFF',
      },
      'black': {
        '100': '#000000',
      },
      'blue': {
        '300': '#63F3FD',
        '350': '#00D6E3',
        '400': '#1CE2F4',
        '500': '#00BED2',
        '950': '#004650'
      },
      'cool-gray': {
        '50': '#F6F8F9',
        '100': '#EBEFF3',
        '600': '#303944',
      },
      'gray': {
        '50': '#F4F6F7',
        '100': '#E3E6EA',
        '200': '#CAD1D7',
        '400': '#798897',
        '500': '#5E6D7C',
        '600': '#505B6A',
        '700': '#303944',
        '800': '#3E444C',
        '900': '#373B42',
        '950': '#22252A',
      },
      'transparent': {
        
      }
    },
    fontFamily: {
      'trenda': ['Trenda Light', 'sans-serif'],
      'zen-dots': ['Zen Dots', 'sans-serif'],
    },
    plugins: [],
  }
}

