/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("@tailwindcss/forms")],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      "2md": { max: "950px" },
      // => @media (max-width: 950px) { ... }

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
          G15: "#F5F5F5",
          G20: "#E7E7E7",
          G30: "#5A5A5A",
        },
        danger: {
          D10: "#ff0202",
        },
      },
      keyframes: {
        slideDown: {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        slideUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        slideUpAndFade: {
          from: { opacity: 0, transform: "translateY(2px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: "translateX(-2px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideDownAndFade: {
          from: { opacity: 0, transform: "translateY(-2px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: "translateX(2px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },

      },
      animation: {
        slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
          "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideDownAndFade:
          "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade:
          "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
