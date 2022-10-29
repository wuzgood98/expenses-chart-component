/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* primary */
        softRed: "hsl(10, 79%, 65%)",
        cyan: "hsl(186, 34%, 60%)",
        /* neutral */
        darkBrown: "hsl(25, 47%, 15%)",
        mediumBrown: "hsl(28, 10%, 53%)",
        cream: "hsl(27, 66%, 92%)",
        veryPaleOrange: "hsl(33, 100%, 98%)",
      },
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"],
      },
      animation: {
        grow: "grow 1s ease-in-out forwards",
      },
      keyframes: {
        grow: {
          "0%": { height: "0" },
          "100%": { maxHeight: "max-content" },
        },
      },
    },
  },
  plugins: [],
};
