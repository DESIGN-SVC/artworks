/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      inerit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      overlay: "rgba(0, 0, 0, 0.20)",
      blue: {
        100: "#00D6E3",
        300: "#63F3FD",
        350: "#009FC2",
        400: "#1CE2F4",
        500: "#00BED2",
        800: "#063746",
        900: "#0D3356",
        950: "#004650",
        1100: "#011324",
      },
      "cool-gray": {
        50: "#F6F8F9",
        100: "#EBEFF3",
        500: "#628295",
        600: "#303944",
        800: "#374855",
        900: "#323E48",
        950: "#212930",
      },
      gray: {
        50: "#F4F6F7",
        100: "#E3E6EA",
        150: "#D0DAE1",
        200: "#CAD1D7",
        300: "#DBE3EB",
        400: "#798897",
        500: "#5E6D7C",
        600: "#505B6A",
        700: "#303944",
        800: "#3E444C",
        900: "#373B42",
        950: "#22252A",
      },
    },
    fontFamily: {
      sans: ["Trenda", "sans-serif"],
      trenda: ["Trenda", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      "zen-dots": ["Zen Dots", "sans-serif"],
    },
    keyframes: {
      "text-up": {
        "0%": { transform: "translateY(6%)" },
        "100%": { transform: "translateY(0)" },
      },
      "video-up": {
        "0%": { transform: "translateY(15%)" },
        "100%": { transform: "translateY(0)" },
      },
      blowing: {
        "0%": { transform: "scale(0.6) translate(0, 150px)" },
        "50%": { transform: "scale(1.1) translate(0, 0px)" },
        "100%": { transform: "scale(1) translate(0, 0)" },
      },
      "icon-up-right": {
        "0%": { transform: "translate(0, 0)" },
        50: { transform: "translate(50%, -50%)" },
        "100%": { transform: "translate(50%, -50%)" },
      },
    },
    animation: {
      "text-up": "text-up 1s ease-in-out",
      "video-up": "video-up 1.5s ease-in-out",
      blowing: "blowing 1s ease-in-out",
    },

    plugins: [],
  },
};
