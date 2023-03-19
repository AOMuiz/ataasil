/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("tailwindcss-logical"), require("@tailwindcss/forms")],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ["Almarai", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          P50: "#eaf9fa",
          P75: "#abe5ea",
          P100: "#88dae1",
          P200: "#54cbd5",
          P300: "#31c0cc",
          P400: "#22868f",
          P500: "#1e757c",
          P600: "#039BE5",
          P700: "#E5E5E5",
        },
        secondary: {
          S50: "#e7e8ee",
          S75: "#9ba0b9",
          S100: "#72789c",
          S200: "#353e72",
          S300: "#0c1755",
          S400: "#08103b",
          S500: "#070e34",
        },
        success: {
          S50: "#ebf6f1",
          S75: "#abd8c5",
          S100: "#88c8ad",
          S200: "#55b089",
          S300: "#32a071",
          S400: "#23704f",
          S500: "#1f6245",
        },
        neutral: {
          N0: "#ffffff",
          N10: "#fafbfb",
          N20: "#f5f6f7",
          N30: "#ebedf0",
          N40: "#dfe2e6",
          N50: "#c2c7d0",
          N60: "#b3b9c4",
          N70: "#a6aebb",
          N80: "#98a1b0",
          N90: "#8993a4",
          N100: "#7a8699",
          N200: "#6b788e",
          N300: "#5d6b82",
          N400: "#505f79",
          N500: "#42526d",
          N600: "#354764",
          N700: "#243757",
          N800: "#15294b",
          N900: "#091e42",
        },
        gray: {
          G10: "#f4f4f4",
          G20: "#E7E7E7",
          G30: "#5A5A5A",
        },
      },
    },
  },
  plugins: [],
};
