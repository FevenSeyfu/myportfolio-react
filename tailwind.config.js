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
        'primary-dark-red': '#dc2626',
        'secondary-lighter-red': '#f87171',
      },
      fontFamily: {
        croissant: ["Croissant One", "serif"]
      },
    },
  },
  plugins: [],
}

