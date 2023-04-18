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
      lineClamp: {
        7: "7",
      },
      animation: {
        "scale-up-center": "scale-up-center 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
        "scale-down-center":
          "scale-down-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
      },
      keyframes: {
        "scale-up-center": {
          "0%": {
            transform: "scale(.5)",
          },
          to: {
            transform: "scale(1)",
          },
        },
        "scale-down-center": {
          "0%": {
            transform: "scale(1)",
          },
          to: {
            transform: "scale(.1)",
          },
        },
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
