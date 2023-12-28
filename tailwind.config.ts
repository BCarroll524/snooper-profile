import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkgray: "#13141e",
        lightgray: "#1F1F28",
        lightergray: "#282831",
        purple: "#8668F5",
        lightgrayborder: "#FFFFFF33",
        gray: "#C3C3C3",
        lightestgray: "#FFFFFF",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        bold: "700",
      },
    },
  },
  plugins: [],
} satisfies Config;
