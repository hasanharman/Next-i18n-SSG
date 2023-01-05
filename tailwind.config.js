/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "Montserrat",
        playflair: "Playfair Display",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        slide: {
          from: { opacity: 0.2 },
          to: { opacity: 1 },
        },
        textSlide: {
          from: { marginTop: "100%", height: "100%", opacity: 0.2 },
          to: { marginTop: "0%", height: "25%", opacity: 1 },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "waving-hand": "wave 2s linear infinite",
        sliding: "textSlide 1s ease-in",
        fadeIn: "fadeIn 2s ease-in forwards",
      },
      variants: {
        animation: ["motion-safe"],
      },
    },
  },
  plugins: [],
};
