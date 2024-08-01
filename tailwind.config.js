/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark-blue': "#0a192f",
        'primary-dark-red': '#EF4444',
        'light-red': '#fdb0b0',
        'lighter-red': '#fecaca',
      },
      fontFamily: {
        croissant: ["Croissant One", "serif"]
      },
    },
  },
  plugins: [],
}

