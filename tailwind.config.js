/* eslint-disable no-undef */

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-first": "#081B29",
        "dark-second": "#06131D",
        "light-first": "#FFFFFE",
        "light-second": "#D8EEFE",
        secondary: "#3DA9FC",
        headings: "#094067",
        paragraphs: "#5F6C7B",
        "gray-field": "#EBEBEB",
        navbar: "#04243A",
        "card-hover": "#081B2970",
      },
      fontFamily: {
        montserrat: ["Montserrat", "ui-sans-serif"],
      },
      animation: {
        "loop-scroll": "loop-scroll 10s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-298%)" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
