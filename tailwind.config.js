/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#242424",
        btnPrimary: "#FFA500",
        btnSecondary: "#00925D",
      },
    },
  },
  plugins: [],
};
