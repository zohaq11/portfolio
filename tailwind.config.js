/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        // Main color palette
        softPink: "#FADADD",     // Main pink
        bubblegum: "#FFB6C1",    // Accent pink
        blush: "#FFC0CB",        // Light blush pink
        pixelBlue: "#AEEEEE",    // Cute techy blue
        pixelPurple: "#D8BFD8",  // Soft lavender
        purple: "#bb8acf",
        black: "#000000",
        white: "#ffffff",

        // Utility
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(174, 238, 238, 0.15)", // Lighter, pixel-vibe blue
      },
      fontFamily: {
        pixel: ["Pixelify Sans", "cursive"],
        cute: ["Caveat", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};