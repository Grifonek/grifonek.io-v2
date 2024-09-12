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
        html: "#e34f26",
        tailwind: "#06b6d4",
        javascript: "#f0db4f",
        typescript: "#007acc",
        react: "#61dbfb",
        nextjs: "#7b809a",
      },
    },
  },
  plugins: [],
};
