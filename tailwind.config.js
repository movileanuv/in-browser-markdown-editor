/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        woodsmoke: "#151619",
        shark: "#1D1F22",
        sharkLight: "#2B2D31",
        abbey: "#35393F",
        shuttleGray: "#5A6069",
        rollingStone: "#7C8187",
        frenchGray: "#C1C4CB",
        mercury: "#E4E4E4",
        wildSand: "#F5F5F5",
        burntSienna: "#E46643",
        sandyBrown: "#F39765",
      },
      fontFamily: {
        'mono': ['Space Mono', ...defaultTheme.fontFamily.mono],
        'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
        'serif': ['Roboto Slab', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
}
