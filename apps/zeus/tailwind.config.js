/** @type {import('tailwindcss').Config} */
export default {
  purge: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          '300': '#63F3FD',
          '350': '#00D6E3',
          '400': '#1CE2F4',
          '500': '#00BED2',
          '950': '#004650'
        },
        gray: {
          '50':  '#F6F8F9',
          '100': '#EBEFF3',
          '200': '#CAD1D7',
          '500': '#5E6D7C',
          '900': '#373B42',
          '950': '#22252A',
        }
      },
    },
  },
  plugins: [],
}

