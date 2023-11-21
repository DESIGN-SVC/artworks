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
      "transparent-black": "rgba(0, 0, 0, 0.20)",
      blue: {
        500: "#1267FE",
        600: "#0e52cb",
        700: "#0b42a2",
        900: "#143D58",
        1000: "#012442",
      },
      green: {
        950: "#004650",
      },
      "cool-gray": {
        200: "#DBE0E9",
        600: "#5F6D72",
      },
      gray: {
        100: "#DBE0E9",
        300: "#5F6D72",
        600: "#AEB3BB"
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    plugins: [],
  },
};
