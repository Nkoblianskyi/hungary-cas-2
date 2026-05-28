  import type { Config } from "tailwindcss"

  const config: Config = {
    darkMode: ["class"],
    content: [
      "./pages/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./app/**/*.{ts,tsx}",
      "./src/**/*.{ts,tsx}",
      "*.{js,ts,jsx,tsx,mdx}",
    ],
    prefix: "",
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
          border: "#262626",
          input: "#262626",
          ring: "#fbbf24",
          background: "#0f0f0f",
          foreground: "#fafafa",
          primary: {
            DEFAULT: "#fbbf24", // bright vibrant gold
            foreground: "#000000",
          },
          secondary: {
            DEFAULT: "#1f2937", // gray-800
            foreground: "#ffffff",
          },
          destructive: {
            DEFAULT: "#ef4444", // red-500
            foreground: "#fafafa",
          },
          muted: {
            DEFAULT: "#111827", // gray-900
            foreground: "#9ca3af", // gray-400
          },
          accent: {
            DEFAULT: "#1f2937", // gray-800
            foreground: "#ffffff",
          },
          popover: {
            DEFAULT: "#141414",
            foreground: "#fafafa",
          },
          card: {
            DEFAULT: "#111827", // gray-900
            foreground: "#ffffff",
          },
        },
        borderRadius: {
          lg: "0.5rem",
          md: "0.375rem",
          sm: "0.25rem",
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
  } satisfies Config

  export default config
