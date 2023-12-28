/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      dark: "#140024",
      white: "#FFFFFF",
      primary: "#F36430",
      secondary: "#CC02FF",
      transparent: "transparent",
    },
    fontFamily: {
      barlow: ["Barlow", "sans-serif"],
      montserrat: ["Montserrat", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
