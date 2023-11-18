/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    files: ["./src/components/**/*.{js,jsx,ts,tsx}"],
  },
  // dark mode by data-mode attribute
  darkMode: ["class", '[data-mode="dark"]'],
  // theme: {
  //   transparent: "transparent",
  //   current: "currentColor",
  //   extend: {
  //     colors: {
  //       brand: {
  //         primary: "#5900F2",
  //         secondary: "#CD00A2",
  //       },
  //       error: {
  //         DEFAULT: "#E02424",
  //       },
  //       success: {
  //         DEFAULT: "#34D399",
  //       },
  //       warning: {
  //         DEFAULT: "#F59E0B",
  //       },
  //       info: {
  //         DEFAULT: "#3B82F6",
  //       },
  //     },
  //     card: {
  //       backgroundColor: "#fff",
  //       borderColor: "#E5E7EB",
  //       textColor: "#111827",
  //       dark: {
  //         backgroundColor: "#111827",
  //         borderColor: "#374151",
  //         textColor: "#fff",
  //       },
  //     },
  //     input: {
  //       backgroundColor: "#fff",
  //       borderColor: "#E5E7EB",
  //       textColor: "#111827",
  //       dark: {
  //         backgroundColor: "#111827",
  //         borderColor: "#374151",
  //         textColor: "#fff",
  //       },
  //     },
  //   },
  // },
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        danger: {
          DEFAULT: "hsl(var(--danger))",
          foreground: "hsl(var(--danger-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
