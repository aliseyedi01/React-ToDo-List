/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Dark_Background: "#0f172a",
        Dark_OnBackground: "#e2e8f0",
        Dark_Surface: "#141e33",
        Dark_OnSurface: "#94a3b8",
        Dark_Primary: "#5b21b6",
        Dark_OnPrimary: "#eeecfc",
        Dark_Secondary: "#5b21b6",
        Dark_OnSecondary: "#eeecfc",

        Light_Background: "#e2e8f0",
        Light_ONBackground: "#47557f",
        Light_Surface: "#f1f5f9",
        Light_OnSurface: "#475580",
        Light_Primary: "#684a5c",
        Light_OnPrimary: "#b6d529",
        Light_Secondary: "#5b21b6",
        Light_OnSecondary: "#eeecfc",
      },
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
