/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**.html", "./dist/*.js"],
  theme: {
    extend: {
      colors: {
        darkBlue: "hsl(240, 38%, 20%)",
        grayishBlue: "hsl(240, 18%, 77%)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        pattern: "url(../images/pattern-bg.svg)",
      },
    },
  },
  plugins: [],
};
