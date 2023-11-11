/** @type {import('tailwindcss').Config} */
export default {
  content: {
    relative: true,
    files: ["./src/components/**/*.{js,jsx,ts,tsx}"],
  },
  // dark mode by data-mode attribute
  darkMode: '[data-mode="dark"]',
  theme: {
    extend: {},
  },
  plugins: [require("@headlessui/tailwindcss")],
};
