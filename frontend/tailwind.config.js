/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#043927",
        secondary: "#D2BD69",
        accent: "#FDFCF0",
      },
    },
  },
  plugins: [],
};
