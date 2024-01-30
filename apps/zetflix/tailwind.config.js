/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  plugins: [],

  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      screens: {
        "3xl": "1820px",
      },
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(57.19% 91.3% at 49.26% 48.46%, #2D2F35 0%, #16171A 66.15%, #000000 96.88%)",
        bgTablet: "url('/bg-tablet.png')",
      },
      keyframes: {
        toast: {
          "0%": {
            opacity: "0",
            transform: "translateX(0px)",
          },
          "50%": {
            opacity: "0",
            transform: "translateX(0px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(-50%)",
          },
        },
      },
      animation: {
        toast: "toast 0.3s ease",
      },
    },
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#000000",

      gray: {
        50: "#F4F6F7",
        100: "#E3E6EA",
        200: "#D9D9D9",
        300: "#798897",
        700: "#494949",
        900: "#2A2A2A",
      },

      yellow: {
        50: "#FFDE57",
        100: "#FFCD01",
        200: "#EEBF00",
      },
    },
  },
};
