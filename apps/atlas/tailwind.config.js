/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#FFFF",
      black: "#000",
      inerit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      blue: {
        300: "#2E4566",
        700: "#04426F",
        800: "#001446",
        900: "#032839",
        950: "#004650",
        1000: "#13253F",
      },
      "cool-blue": {
        600: "#011748",
      },
      "cool-gray": {
        200: "#DBE0E9",
        600: "#5F6D72",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    plugins: [],
  },
};
