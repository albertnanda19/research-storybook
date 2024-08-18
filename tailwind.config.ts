import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
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
        "rmb-primary": "#002D7A",
        "brand-80": "#335795",
        "brand-50": "#738CB6",
        "rmb-secondary": "#FFD13E",
        "secondary-75": "rgba(255, 209, 62, 0.75)",
        "secondary-50": "rgba(255, 209, 62, 0.50)",
        info: "#002D7A",
        "info-300-15": "rgba(93, 158, 235, 0.15)",
        success: "#15A455",
        "success-300": "#6CE28A",
        "success-300-60": "rgba(108, 226, 138, 0.6)",
        "success-300-15": "rgba(108, 226, 138, 0.15)",
        danger: "#DE3328",
        "danger-300": "#F3987B",
        "danger-300-60": "rgba(243, 152, 123, 0.6)",
        "danger-300-15": "rgba(243, 152, 123, 0.15)",
        warning: "#F08F02",
        "warning-300": "#FACA64",
        "warning-300-60": "rgba(250, 202, 100, 0.6)",
        "warning-300-15": "rgba(250, 202, 100, 0.15)",
        "title-text": "#0B0D32",
        "body-text": "#545670",
        "subtle-mid": "#949DAD",
        mid: "#D0D5DD",
        "rmb-accent": "#ECF1F4",
        emphasis: "#F5F8F9",
        cloud: "#FAFCFE",
        white: "#FFFFFF",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
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
} satisfies Config;

export default config;
