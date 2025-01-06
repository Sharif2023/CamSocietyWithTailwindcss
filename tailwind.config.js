/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{vue,js}",
    "./pages/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontSize: {
        'tiny': '0.875rem', // Custom size
      },
    },
  },
  plugins: [],
}

