/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
      },
      colors: {},
      fontFamily: {
        Poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
