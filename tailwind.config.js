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
        slider: "left 10s linear infinite",
      },
      keyframes: {
        left: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-185%)" },
        },
      },
    },
  },
  plugins: [],
};
