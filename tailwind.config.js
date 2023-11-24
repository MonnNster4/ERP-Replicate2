/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
          primary: ['Red Hat Display', "sans-serif"],
          secondary: ['Roboto', 'sans-serif']
        },
        textColor: {
          primaryBlack: "#22092C",
          primaryRed: "#C70039",
          primaryGray: "#4B5563"
        },
        backgroundColor: {
          primary: "#22092C",
          secondary: "#C70039",
          tertiary: "#9D9D9D",
          hover: "#4caf4f",
          mainWhite: "#fff",
          screen: "#eceff180"
        },
        borderColor: {
          primaryBlack: "#22092C",
          primaryRed: "#C70039",
        }
      },
    },
    plugins: [],
  }