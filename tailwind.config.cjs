/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: "#323E4F",
        secondary: "#5E949F",
        "hover-green": "#00C6A7",
        "background-light-blue": "#D1DFDF",
        "background-light-gray": "#f5f5f5",
      },
      fontFamily: {
        aller: "allerbold, serif",
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
    },
    keyframes: {
      "fade-in-out": {
        "0%, 10%": { opacity: 0.7 },
        "30%": { opacity: 1 },
        "100%": { opacity: 0 },
      },
    },
    animation: {
      "fade-in-out": "fade-in-out 5.2s ease-in-out infinite",
    },
  },
  plugins: [],
};
