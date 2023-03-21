/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite-react/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#dd3333",
        secondary: "#676660",
      },
    },
  },
  safelist: ["bg-[#516eab]", "bg-[#29c5f6]", "bg-[#ca212a]", "bg-[#7bbf6a]", "bg-[#417096]", "bg-[#e14e42]"],
  plugins: [require("flowbite/plugin")],
};
