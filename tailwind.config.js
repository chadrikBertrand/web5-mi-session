/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xl: "1200px",
    },
    extend: {
      backgroundImage: {
        "fond-breuvage": 'url("src/assets/19326390.jpg")',
        "fond-entree": 'url("/src/assets/images/fond-breuvage.jpg")',
        "fond-plats": 'url("/src/assets/images/fond-breuvage.jpg")',
        "fond-dessert": 'url("/src/assets/images/fond-breuvage.jpg")',
      },
    },
  },
  plugins: [],
};
