import type { Config } from "tailwindcss";

import plugin from "tailwindcss/plugin";
export default {
  purge: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [
    plugin(({ addComponents }) => {
      addComponents([
        {
          ".container": {
            paddingLeft: "1.875rem",
            paddingRight: "1.875rem",
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%",
            maxWidth: "1280px",
          },
        },
        {
          "@media (min-width: 1280px) ": {
            ".container": {
              paddingLeft: "5.625rem",
              paddingRight: "5.625rem",
            },
          },
        },
      ]);
    }),
  ],
  theme: {
    extend: {
      keyframes: {
        fade: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        entrance: {
          "0%": {
            "animation-timing-function": "ease-in",
            opacity: "0",
            transform: "translateY(-250px)",
          },
          "38%": {
            "animation-timing-function": "ease-out",
            opacity: "1",
            transform: "translateY(0)",
          },
          "55%": {
            'animation-timing-function': 'ease-in',
            transform: 'translateY(-65px)',
          },
          '72%': {
            'animation-timing-function': 'ease-out',
            transform: 'translateY(0)',
          },
          "81%": {
            'animation-timing-function': "ease-in",
            transform: "translateY(-28px)",
          },
          '90%': {
            'animation-timing-function': 'ease-out',
            transform: 'translateY(0)',
          },
          '95%': {
            "animation- timing -function": "ease-in",
            transform: 'translateY(-8px)',
          },
          '100%': {
            "animation-timing-function": 'ease-out',
            transform: 'translateY(0)',
          }
        },
        bounceInForward: {
          "0%": {
            'animation-timing-function': 'ease-in',
            opacity: '0',
            transform: 'scale(0)',
          },
          "38%": {
            "animation-timing-function": "ease-out",
            opacity: "1",
            transform: 'scale(1)',
          },
          "55%": {
            'animation-timing-function': "ease-in",
            transform: "scale(0.7)",
          },
          "72%": {
            'animation-timing-function': 'ease-out',
            transform: "scale(1)",
          },
          '81%': {
            "animation-timing-function": "ease-in",
            transform: 'scale(0.84)',
          },
          '89%': {
            'animation-timing-function': "ease-out",
            transform: 'scale(1)'
          },
          "95%": {
            'animation-timing-function': 'ease-in',
            transform: 'scale(0.95)',
          },
          '100%': {
            'animation-timing-function': 'ease- out',
            transform: "scale(1)"
          }
        },
        slideInLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-250px)",
          },

          "100%": {
            opacity: '1',
            transform: "translateX(0)"
          }
        },
        slideInRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(250px)",
          },
          "100%": {
            opacity: '1',
            transform: "translateX(0)",
          }
        },
        slideInBottom: {
          '0%': {
            opacity: '0',
            transform: "translateY(250px)",
          },
          "100%": {
            opacity: '1',
            transform: 'translateY(0)',
          }
        },
        SwingInForwardBottom: {
          "0%": {
            opacity: "0",
            transform: 'rotateX(100deg)',
            "transform-origin": 'bottom'
          },
          "100%": {
            opacity: "1",
            transform: "rotateX(0)",
            "transform-origin": "bottom",
          }
        },
        scaleInForwardBottom: {
          "0%": {
            transform: "scale(0)",
            "transform-origin": "50 % 100 %",
          },
          "100%": {
            transform: "scale(1)",
            "transform-origin": '50 % 100 %',
          }
        },
        scaleInForwardVerticalBottom: {
          '0%': {
            transform: "scaleY(0)",
            "transform-origin": "0% 100%"
          },

          "100%": {
            transform: 'scaleY(1)',
            'transform-origin': "0% 100%",
        }
      }
    },
    animation: {
      fade: "fade 1.3s ease",
      entrance: "entrance 2s ease 0s 1 normal forwards",
      bounceInForward: 'bounceInForward 2s ease 0s 1 normal forwards',
      slideInLeft: 'slideInLeft 2s ease 0s 1 normal forwards',
      slideInRight: "slideInRight 2s ease 0s 1 normal forwards",
      slideInBottom: "slideInBottom 2s ease 0s 1 normal forwards",
      SwingInForwardBottom: "SwingInForwardBottom 2s ease 0s 1 normal forwards",
      scaleInForwardBottom: "scaleInForwardBottom 2s ease 0s 1 normal forwards",
      scaleInForwardVerticalBottom: "scaleInForwardVerticalBottom 2s ease 0s 1 normal forwards",
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
},
} satisfies Config
