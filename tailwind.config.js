/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white": '#ffffff',
        "blue": "rgb(0, 145, 255)"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        jetmono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
}