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
          primary: "#5900F2",
          secondary: "#CD00A2",
        },
        error: {
          DEFAULT: "#E02424",
        },
        success: {
          DEFAULT: "#34D399",
        },
        warning: {
          DEFAULT: "#F59E0B",
        },
        info: {
          DEFAULT: "#3B82F6",
        },
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
