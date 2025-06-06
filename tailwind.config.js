/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "navy-blue": "#003366",
        red: "#e63946",
        green: "#2a9d8f",
        "light-blue": "#4cc9f0",
        grey: "#6c757d",
      },
    },
  },
  plugins: [],
};
