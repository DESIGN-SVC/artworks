import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  purge: ["./index.html", "./src/**/*.{ts,tsx}"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  plugins: [
    function groupPeer({ addVariant }) {
      const pseudoVariants = [
        // ... Any other pseudo variants you want to support.
        // See https://github.com/tailwindlabs/tailwindcss/blob/6729524185b48c9e25af62fc2372911d66e7d1f0/src/corePlugins.js#L78
        "checked",
      ].map((variant) =>
        Array.isArray(variant) ? variant : [variant, `&:${variant}`],
      );

      for (const [variantName, state] of pseudoVariants) {
        addVariant(`group-peer-${variantName}`, (ctx) => {
          const result = typeof state === "function" ? state(ctx) : state;
          return result.replace(/&(\S+)/, ":merge(.peer)$1 ~ .group &");
        });
      }
    },
    plugin(({ addComponents }) => {
      addComponents([
        {
          ".hover-this": {
            transition: "all 0.3s ease-out",
            cursor: "pointer",
          },
          ".container": {
            paddingLeft: "2rem",
            paddingRight: "2rem",
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

  darkMode: "class",

  theme: {
    extend: {},
    colors: {
      white: "#ffffff",
      black: "#000000",
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",

      violet: {
        50: "#F9F5FF",
        100: "#F2E8FF",
        200: "#E7D6FE",
        300: "#D4B5FD",
        400: "#BA85FB",
        500: "#A057F5",
        600: "#8A35E8",
        700: "#6423A6",
        800: "#5A2092",
        900: "#360863",
        950: "#2A074C",
        1000: "#200837",
      },

      selago: {
        50: "#F4F4F9",
        100: "#EBEBF4",
        200: "#DADBEB",
        300: "#AEABCE",
        400: "#AEABCE",
        500: "#9B95BF",
        600: "#897EAD",
        700: "#766C96",
        800: "#61597A",
        900: "#504B64",
        950: "#2F2C3A",
      },

      green: {
        50: "#EFF9EC",
        100: "#D0EDC8",
        200: "#BBE5B1",
        300: "#91D383",
        400: "#6CC05B",
        500: "#4CA53D",
        600: "#38832D",
        700: "#2D6526",
        800: "#285123",
        900: "#254522",
        950: "#0F250E",
      },

      gray: {
        50: "#F6F6F6",
        100: "#E7E7E7",
        200: "#D1D1D1",
        300: "#B0B0B0",
        400: "#989898",
        500: "#6D6D6D",
        600: "#5D5D5D",
        700: "#4F4F4F",
        800: "#454545",
        900: "#3D3D3D",
        950: "#262626",
      },

      red: {
        50: "#FFF0F1",
        100: "#FFDDDF",
        200: "#FFC1C5",
        300: "#FF959C",
        400: "#FF5963",
        500: "#FF2633",
        600: "#FC0615",
        700: "#D3000D",
        800: "#AF050F",
        900: "#900C14",
        950: "#500005",
      },

      pink: {
        50: "#FFF0FB",
        100: "#FFE4F8",
        200: "#FFC9F4",
        300: "#FF9CE9",
        400: "#FF5FD8",
        500: "#FF30C3",
        600: "#F50DA3",
        700: "#DF008A",
        800: "#B0046C",
        900: "#92095C",
        950: "#5B0034",
      },
      purple: {
        900: "#371642",
      },
    },
    fontFamily: {
      sans: ["SF", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    keyframes: {
      shake: {
        "25%": {
          transform: "translateX(4px)",
        },
        "50%": {
          transform: "translateX(-5px)",
        },
        "100%": {
          transform: "translateX(4px)",
        },
      },
      hide: {
        from: { opacity: "1" },
        to: { opacity: "0" },
      },
      slideInRight: {
        from: { transform: "translateX(calc(100% + var(--viewport-padding)))" },
        to: { transform: "translateX(0)" },
      },
      slideInLeft: {
        from: {
          transform: "translateX(calc(-100% - var(--viewport-padding)))",
        },
        to: { transform: "translateX(0)" },
      },
      swipeOutLeft: {
        from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
        to: { transform: "translateX(calc(-100% - var(--viewport-padding)))" },
      },
      swipeOutRight: {
        from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
        to: { transform: "translateX(calc(100% + var(--viewport-padding)))" },
      },
      'openProdCast': {
        from: { transform: "translateY(12%)", opacity: "0" },
        to: { transform: "translateY(0)", opacity: "1", }

      },
      'closeProdCast': {
        from: { transform: "translateY(0)", opacity: "1" },
        to: { transform: "translateY(12%)", opacity: "0", }
      },
      'popShowIn': {
        from: { transform: "translateY(0.5)", opacity: "0" },
        to: { transform: "translateY(1)", opacity: "1" },
      },
      'popShowOut': {
        from: { transform: "translateY(1)", opacity: "1" },
        to: { transform: "translateY(0.5)", opacity: "0" },
      },
    },
    animation: {
      shake: "shake 200ms",
      hide: "hide 100ms ease-in",
      slideInLeft: "slideInLeft 1500ms cubic-bezier(0.16, 1, 0.3, 1)",
      slideInRight: "slideInRight 1500ms cubic-bezier(0.16, 1, 0.3, 1)",
      swipeOutLeft: "swipeOutLeft 100ms ease-out",
      swipeOutRight: "swipeOutRight 100ms ease-out",
      openProdCast: "openProdCast 500ms ease-in-out",
      closeProdCast: "closeProdCast 500ms ease-in-out",
      popShowIn: "popShowIn 300ms ease-in-out",
      popShowOut: "popShowOut 300ms ease-in-out",
    },
    backgroundImage: {
      hero: "url('/images/bg-login.png')",
      purple: "linear-gradient(180deg, #4A1979 0%, #200837 100%)",
    },
  },

} satisfies Config;
