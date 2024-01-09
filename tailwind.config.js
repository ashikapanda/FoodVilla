/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "r-cream": "#D9CDBC",
      },
    },
    fontFamily: {
      body: [
        "Open Sans",
        "Lato",
        "SST W01 Roman",
        "Helvetica Neue",
        "Helvetica",
      ],
    },
  },
  plugins: [],
};
