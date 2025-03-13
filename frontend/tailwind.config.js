/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        "top-gray": "0px -2px 0px #b0b0b0",
        "bottom-black": "0px 5px 0px black",
        "bottom-red": "0px 5px 0px #7f1d1d",
        "bottom-light-red": "0px 5px 0px #ef4444",
        "bottom-gray": "0px 5px 0px #111827",
        "bottom-green": "0px 5px 0px #14532d",
      },
    },
  },
  plugins: [],
}

