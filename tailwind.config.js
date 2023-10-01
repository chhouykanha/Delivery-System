/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : '#4073f5',
        secondary : '#303030',
        warning : '#ffbe5c',
        lightgray : '#f5f5f9',
      },
      fontFamily: {
        battambang : 'Battambang'
      }
    },
  },
  plugins: [],
}