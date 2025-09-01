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
        // Official SAWARI Brand Colors from Brand Guide
        velvet: {
          DEFAULT: "#35181E", // Primary brand color
          light: "#441F28",
          lighter: "#532531",
          lightest: "#622A39",
          dark: "#2C141A",
          darker: "#231015",
          darkest: "#190B0F",
        },
        desert: {
          DEFAULT: "#C9BEA7", // Desert Pearl
          light: "#D1C6B1",
          lighter: "#D9CFBC",
          lightest: "#E1D8C7",
          ultralight: "#EAE2D3",
          cream: "#F3ECDF",
          ivory: "#FFF8EC",
          dark: "#BAAF9A",
          darker: "#AEA28F",
          darkest: "#A29685",
        },
        pearl: {
          DEFAULT: "#F9F2E8", // Pearl - Light cream
        },
        noir: {
          DEFAULT: "#121111", // Noir - Near black
        },
        // Legacy colors for compatibility
        maroon: {
          DEFAULT: "#35181E", // Maps to velvet
          light: "#441F28",
          dark: "#2C141A",
        },
        beige: {
          DEFAULT: "#C9BEA7", // Maps to desert
          light: "#D1C6B1",
          dark: "#BAAF9A",
        },
        gold: {
          DEFAULT: "#C9BEA7", // Maps to desert for consistency
          light: "#D1C6B1",
          dark: "#BAAF9A",
        },
        charcoal: {
          DEFAULT: "#121111", // Maps to noir
          light: "#1A1A1A",
          dark: "#000000",
        },
        champagne: {
          DEFAULT: "#F9F2E8", // Maps to pearl
          light: "#FEFBF5",
          dark: "#F0E8DC",
        },
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
      },
      fontFamily: {
        // Primary font for headings - Poppins (replacing ABC Ginto Nord)
        poppins: ["var(--font-poppins)", "sans-serif"],

        // Secondary font for body - Inter (replacing Switzer)
        inter: ["var(--font-inter)", "sans-serif"],
      },
      fontWeight: {
        // Poppins weights
        "poppins-light": "300",
        "poppins-regular": "400",
        "poppins-medium": "500",
        "poppins-semibold": "600",
        "poppins-bold": "700",
        "poppins-extrabold": "800",
        "poppins-black": "900",

        // Inter weights
        "inter-light": "300",
        "inter-regular": "400",
        "inter-medium": "500",
        "inter-semibold": "600",
        "inter-bold": "700",
      },
      letterSpacing: {
        heading: "-0.025em",
        callout: "0.1em",
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
        "fade-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-down": {
          from: { opacity: "0", transform: "translateY(-30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          from: { backgroundPosition: "-200% 0" },
          to: { backgroundPosition: "200% 0" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(201, 190, 167, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(201, 190, 167, 0.6)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.8s ease-out",
        "fade-down": "fade-down 0.8s ease-out",
        "scale-in": "scale-in 0.6s ease-out",
        shimmer: "shimmer 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
