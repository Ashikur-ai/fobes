const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Playfair: ["Playfair Display", "sans-serif"], // Adding Roboto
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}