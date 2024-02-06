import type { Config } from "tailwindcss";

export default {
  purge: ["./index.html", "./src/**/*.{ts,tsx}"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  plugins: [],
  theme: {
    extend: {},
    colors: {
      white: "#ffffff",
      black: "#000000",
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      
      gray: {
        400: "#989898",
      },

      pink: {
        300: "#FF59C0",
        400: "#F3469D",
        700: "#DF008A",
        800: "#C7007B"
      },

      yellow: {
        300: "#FFC30D",
      },

      blue: {
        300: "#0ED6FA",
        600: "#0180FD"
      },

      violet: {
        50: "#F4F4F9",
        100: "3EBEBF4",
        200: "#AEABCE",
        300: "#9B95BF",
        400: "#897EAD",
        500: "#766C96",
        600: "#61597A",
        900: "#200837"
      },
      
      purple: {
        100: "B64ADF",
        200: "#E7D6FE",
        300: "#D4B5FD",
        400: "#6B11D2",
        500: "#8A35E8",
        600: "#6423A6",
        700: "#5A2092",
        800: "#360863",
        900: "#2A074C",
        950: "#200837",
      }
    },
    fontFamily: {
      sans: ["SF", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
} satisfies Config;
