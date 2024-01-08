/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["CustomFont", "Source Sans Pro"],
      },
      colors: {
        blueText: "#0E2368", // Replace with your desired color code
        redText: "#E23744",
        smallText: "#444957",
        btnColor: "#E23744",
      },
    },
  },
  plugins: [],
};
