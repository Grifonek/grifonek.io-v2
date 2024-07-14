/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-main": "#142d4c",
        "bg-shadow1": "#122844",
        "bg-shadow2": "#2b425d",
        secondary: "#385170",
        tertiary: "#9fd3c7",
        ternary: "#ececec",
      },
    },
  },
  plugins: [],
};
