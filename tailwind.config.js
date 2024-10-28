/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,vue}"],
  theme: {
    container: {
      center: true,
      padding: "20px",
    },

    extend: {
      // custom colors
      colors: {
        "custom-black": "#161617",
        "custom-blue": "#0077E5",
      },

      // animation energy
      keyframes: {
        scaleOut: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0)" },
        },
      },
      animation: {
        scaleOut: "scaleOut 1s forwards",
      },

      // animateion marque
    },
  },
  plugins: [],
};
