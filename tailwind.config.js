/** @type {import('tailwindcss').Config} */
export default {
  content: {
    relative: true,
    files: ["./src/components/**/*.{js,jsx,ts,tsx}"],
  },
  // dark mode by data-mode attribute
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    transparent: "transparent",
    current: "currentColor",
    extend: {
      colors: {
        brand: {
          DEFAULT: "#5900F2",
          darker: "#4400A6",
          alt: {
            DEFAULT: "#CD00A2",
            darker: "#B8008A",
          },
        },
        error: {
          DEFAULT: "#E02424",
          darker: "##9B1C1C",
        },
        success: {
          DEFAULT: "#34D399",
          darker: "#059669",
        },
        warning: {
          DEFAULT: "#F59E0B",
          darker: "#D97706",
        },
        info: {
          DEFAULT: "#3B82F6",
          darker: "#1D4ED8",
        },
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
