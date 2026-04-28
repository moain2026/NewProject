import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        teal: {
          50: "#E6F7FB",
          100: "#B3E5F0",
          200: "#80D2E5",
          300: "#4DC0DA",
          400: "#26AECF",
          500: "#009BC5",
          600: "#0089AE",
          700: "#006B89",
          800: "#004D63",
          900: "#002F3D",
          950: "#001A22",
        },
        gold: {
          50: "#FBF6E7",
          100: "#F5E9BC",
          200: "#EDDB8E",
          300: "#E5CC60",
          400: "#DDC044",
          500: "#D4AF37",
          600: "#B8942A",
          700: "#8B6F1F",
          800: "#5E4B15",
          900: "#31280B",
        },
        flame: {
          50: "#FEF1E7",
          100: "#FCD9BC",
          200: "#F9C08E",
          300: "#F7A560",
          400: "#F58A3F",
          500: "#F27628",
          600: "#D45F18",
          700: "#A14712",
          800: "#6E300B",
          900: "#3B1A05",
        },
        pearl: {
          50: "#FBFCFD",
          100: "#F4F6F8",
          200: "#E8ECF0",
          300: "#D0D7DE",
          400: "#9BA4AE",
          500: "#6B7480",
        },
        ink: {
          50: "#F5F6F7",
          100: "#E1E3E6",
          400: "#4A5058",
          700: "#1F232A",
          800: "#14171C",
          900: "#0A0C10",
          950: "#05060A",
        },
      },
      fontFamily: {
        sans: ["var(--font-cairo)", "system-ui", "sans-serif"],
        cairo: ["var(--font-cairo)", "sans-serif"],
        amiri: ["var(--font-amiri)", "serif"],
        display: ["var(--font-amiri)", "serif"],
      },
      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "1rem" }],
        "display-sm": ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["3.5rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-lg": ["5rem", { lineHeight: "1", letterSpacing: "-0.04em" }],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #F27628 100%)",
        "gold-gradient-soft":
          "linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(242,118,40,0.15) 100%)",
        "gold-shine":
          "linear-gradient(135deg, #D4AF37 0%, #F4D472 25%, #F27628 75%, #D4AF37 100%)",
        "teal-glow":
          "radial-gradient(circle at 30% 50%, rgba(0,155,197,0.25) 0%, transparent 70%)",
        "mesh-luxury":
          "radial-gradient(at 12% 20%, rgba(0,155,197,0.10) 0px, transparent 50%), radial-gradient(at 88% 0%, rgba(212,175,55,0.08) 0px, transparent 50%), radial-gradient(at 75% 75%, rgba(242,118,40,0.06) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(0,155,197,0.07) 0px, transparent 50%)",
        "glass-dark":
          "linear-gradient(135deg, rgba(20,23,28,0.85) 0%, rgba(10,12,16,0.75) 100%)",
        "glass-light":
          "linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.4) 100%)",
        "premium-noise":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        "luxe-sm": "0 2px 8px -2px rgba(0,0,0,0.06), 0 1px 3px -1px rgba(0,0,0,0.04)",
        luxe: "0 8px 24px -8px rgba(0,0,0,0.10), 0 4px 12px -4px rgba(0,0,0,0.06)",
        "luxe-lg": "0 24px 48px -16px rgba(0,0,0,0.18), 0 12px 24px -8px rgba(0,0,0,0.10)",
        "luxe-xl": "0 40px 80px -24px rgba(0,0,0,0.25), 0 20px 40px -12px rgba(0,0,0,0.12)",
        "gold-glow":
          "0 0 24px -4px rgba(212,175,55,0.5), 0 8px 24px -8px rgba(242,118,40,0.4)",
        "gold-glow-lg":
          "0 0 48px -8px rgba(212,175,55,0.6), 0 16px 48px -16px rgba(242,118,40,0.5)",
        "teal-glow":
          "0 0 24px -4px rgba(0,155,197,0.45), 0 8px 24px -8px rgba(0,155,197,0.3)",
        "inner-luxe": "inset 0 1px 0 0 rgba(255,255,255,0.08)",
      },
      keyframes: {
        "gold-pulse": {
          "0%, 100%": {
            boxShadow:
              "0 0 0 0 rgba(212,175,55,0.7), 0 0 20px -4px rgba(242,118,40,0.5)",
          },
          "50%": {
            boxShadow:
              "0 0 0 12px rgba(212,175,55,0), 0 0 30px -2px rgba(242,118,40,0.7)",
          },
        },
        "mesh-drift": {
          "0%, 100%": { backgroundPosition: "0% 0%, 100% 0%, 100% 100%, 0% 100%" },
          "50%": { backgroundPosition: "20% 10%, 80% 20%, 80% 80%, 20% 90%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "badge-bounce": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
      },
      animation: {
        "gold-pulse": "gold-pulse 2.5s cubic-bezier(0.4,0,0.6,1) infinite",
        "mesh-drift": "mesh-drift 24s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "fade-in-up": "fade-in-up 0.6s cubic-bezier(0.16,1,0.3,1) both",
        float: "float 4s ease-in-out infinite",
        "scale-in": "scale-in 0.4s cubic-bezier(0.16,1,0.3,1) both",
        "slide-in-right": "slide-in-right 0.5s cubic-bezier(0.16,1,0.3,1) both",
        "badge-bounce": "badge-bounce 0.4s cubic-bezier(0.34,1.56,0.64,1)",
      },
      backdropBlur: {
        xs: "2px",
        "4xl": "72px",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      transitionTimingFunction: {
        luxe: "cubic-bezier(0.16, 1, 0.3, 1)",
        magnetic: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
