/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0e0c0a",
        surface: "#161210",
        surface2: "#1e1a16",
        gold: {
          DEFAULT: "#c9a96e",
          light: "#e8d5aa",
          dim: "#7a6340",
        },
        ink: {
          DEFAULT: "#f5f0e8",
          muted: "#a09070",
        },
        line: {
          DEFAULT: "rgba(201,169,110,0.15)",
          strong: "rgba(201,169,110,0.32)",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Jost"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.18em",
        widest3: "0.25em",
      },
    },
  },
  plugins: [],
};
