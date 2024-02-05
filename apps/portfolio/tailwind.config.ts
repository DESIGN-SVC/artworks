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
      purple: {
        200: "#B64ADF",
        500: "#6B11D2",
      },
      blue: {
        300: "#0ED6FA",
        600: "#0180FD"
      },
      selago: {
        50: "#F4F4F9",
        100: "3EBEBF4",
        300: "#AEABCE",
        500: "#9B95BF",
        600: "#897EAD",
        700: "#766C96",
        800: "#61597A",
        950: "#200837"
      },
      daisy: {
        200: "#E7D6FE",
        300: "#D4B5FD",
        600: "#8A35E8",
        800: "#6423A6",
        900: "#5A2092",
        930: "#360863",
        970: "#2A074C",
        1000: "#200837",
      }
    },
    fontFamily: {
      sans: ["SF", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
} satisfies Config;
