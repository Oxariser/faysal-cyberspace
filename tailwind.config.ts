import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
          glow: "hsl(var(--primary-glow))",
        },
        cyber: {
          blue: "hsl(var(--cyber-blue))",
          green: "hsl(var(--cyber-green))",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { 
            opacity: "0.4",
            transform: "scale(1)",
          },
          "50%": { 
            opacity: "1",
            transform: "scale(1.05)",
          },
        },
        "glow-pulse": {
          "0%, 100%": { 
            boxShadow: "0 0 5px currentColor",
            opacity: "0.8",
          },
          "50%": { 
            boxShadow: "0 0 20px currentColor, 0 0 30px currentColor",
            opacity: "1",
          },
        },
        "matrix-rain": {
          "0%": { 
            transform: "translateY(-100%)",
            opacity: "0",
          },
          "10%": { 
            opacity: "1",
          },
          "90%": { 
            opacity: "1",
          },
          "100%": { 
            transform: "translateY(100vh)",
            opacity: "0",
          },
        },
        "grid-flow": {
          "0%": { transform: "translateX(0) translateY(0)" },
          "100%": { transform: "translateX(-20px) translateY(-20px)" },
        },
        "gradient-shift": {
          "0%, 100%": { 
            background: "linear-gradient(45deg, hsl(var(--primary) / 0.1), hsl(var(--cyber-blue) / 0.1))",
          },
          "50%": { 
            background: "linear-gradient(45deg, hsl(var(--cyber-blue) / 0.1), hsl(var(--primary) / 0.1))",
          },
        },
        "scan-line": {
          "0%": { 
            top: "0%",
            opacity: "0",
          },
          "10%": { 
            opacity: "1",
          },
          "90%": { 
            opacity: "1",
          },
          "100%": { 
            top: "100%",
            opacity: "0",
          },
        },
        "data-stream": {
          "0%": { 
            transform: "translateY(-100%)",
            opacity: "0",
          },
          "50%": { 
            opacity: "1",
          },
          "100%": { 
            transform: "translateY(200%)",
            opacity: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "matrix-rain": "matrix-rain 3s linear infinite",
        "grid-flow": "grid-flow 8s linear infinite",
        "gradient-shift": "gradient-shift 4s ease-in-out infinite",
        "scan-line": "scan-line 3s ease-in-out infinite",
        "data-stream": "data-stream 2s ease-in-out infinite",
        "fade-in": "fade-in 0.6s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
