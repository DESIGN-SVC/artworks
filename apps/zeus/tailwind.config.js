/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        up: {
          "0%": { opacity: 0, transform: "translate3d(0, 50px, 5px)" },
          "50%": { opacity: 0, transform: "translate3d(0, 50px, 5px)" },
          "100%": { opacity: 1, transform: "translate3d(0, 0px, 0px)" },
        },
        fade: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        persona: {
          "0%": { transform: "scale(0.6) translate(0, 170px)" },
          "65%": { transform: "scale(1.1) translate(0, 0)" },
          "100%": { transform: "scale(1) translate(0, 0)" },
        },
        "text-down-md": {
          "0%": { transform: "translateY(-14%)" },
          "100%": { transform: "translateY(0)" },
        },
        "text-down": {
          "0%": { transform: "translateY(-8%)" },
          "100%": { transform: "translateY(0)" },
        },
        "audio-up": {
          "0%": { transform: "translateY(15%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "animation-up": "up 1.2s",
        "animation-up2": "up 1.4s",
        "animation-up3": "up 1.6s",
        fade: "fade 1.4s ease",
        "text-down": "text-down 1s ease-in-out",
        "text-down-md": "text-down-md 1s ease-in-out",
        "audio-up": "audio-up 1.5s ease-in-out",
        persona: "persona 1s ease-in-out",
      },
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      inerit: "inherit",
      current: "currentColor",
      transparent: "transparent",

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

    plugins: [],
  },
};
