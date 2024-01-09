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
      },
      fontFamily: {
        montserrat: ["Montserrat", "ui-sans-serif"],
      },
    },
  },
  plugins: [],
};
