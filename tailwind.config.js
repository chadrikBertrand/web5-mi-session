/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xl: "1200px",
    },
    fontFamily: {
      cool: ["Coolvetica", "sans-serif"],
      butler: ["Butler", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "fond-breuvage":
          "linear-gradient(to left, black, transparent), url('/src/assets/fond-breuvage.jpg')",
        "fond-entree": 'url("/src/assets/images/fond-breuvage.jpg")',
        "fond-plats": 'url("/src/assets/images/fond-breuvage.jpg")',
        "fond-dessert": 'url("/src/assets/images/fond-breuvage.jpg")',
      },
      rotate: {
        270: "270deg",
      },
      colors: {
        orange: {
          pale: "#F08400",
          reg: "#D57500",
          fonce: "#BD6800",
        },
        rouge: {
          pale: "#A84520",
          reg: "#8F3B1B",
          fonce: "#753016",
        },
        jaune: {
          pale: "#E0A510",
          reg: "#C8930E",
          fonce: "#AD7F0C",
        },
        bleu: {
          pale: "#60778C",
          reg: "#4E6172",
          fonce: "#3D4C59",
        },
        gris: {
          pale: "#4D5D66",
          reg: "#3A464D",
          fonce: "#262E33",
        },
      },
    },
  },
  plugins: [],
};
