/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('./src/assets/img/elemental_header.jpg')",
      },
    },
  },
  plugins: [],
};
