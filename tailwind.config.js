/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat Alternates", "sans-serif"],
        Rubik: ["Rubik Spray Paint", "sans-serif"],
        DynaPuff: ["DynaPuff", "sans-serif"],
        Lemon: ['"Lemon"', "serif"],
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
