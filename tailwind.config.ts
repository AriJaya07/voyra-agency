import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#0AB4C4",
          dark: "#089aaa",
          soft: "#E6F8FA",
        },
        accent: {
          DEFAULT: "#D4874A",
          dark: "#c07a40",
          soft: "#F5E6D3",
        },
        deep: "#1A1208",
        cream: "#F5F0E8",
        sand: "#E8DFC8",
        earth: "#C4A882",
        burnt: "#8B5E3C",
        muted: "#6B5B45",
        surface: {
          light: "#F8F7F5",
          dark: "#111009",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1360px",
      },
    },
  },
  plugins: [],
} satisfies Config;
