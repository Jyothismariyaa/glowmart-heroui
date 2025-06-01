import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Poppins', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'orbit': 'orbit 20s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { filter: 'drop-shadow(0 0 2px rgba(255, 192, 203, 0.7))' },
          '100%': { filter: 'drop-shadow(0 0 8px rgba(255, 192, 203, 0.9))' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      backgroundImage: {
        'grid-pattern': 'radial-gradient(circle, rgba(255, 192, 203, 0.1) 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'grid': '30px 30px',
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        dividerWeight: "1px", 
        disabledOpacity: 0.5, 
        fontSize: {
          tiny: "0.75rem",   // 12px
          small: "0.875rem", // 14px
          medium: "1rem", // 16px
          large: "1.125rem", // 18px
        },
        lineHeight: {
          tiny: "1rem", 
          small: "1.25rem", 
          medium: "1.5rem", 
          large: "1.75rem", 
        },
        radius: {
          small: "8px", 
          medium: "12px", 
          large: "16px", 
        },
        borderWidth: {
          small: "1px", 
          medium: "1px", 
          large: "2px", 
        },
      },
      themes: {
        light: {
          colors: {
            background: "#000000",
            foreground: "#ffffff",
            focus: "#ff9cac",
            divider: "rgba(255, 255, 255, 0.1)",
            content1: {
              DEFAULT: "rgba(18, 18, 18, 0.7)",
              foreground: "#ffffff"
            },
            content2: {
              DEFAULT: "rgba(28, 28, 28, 0.6)",
              foreground: "#ffffff"
            },
            content3: {
              DEFAULT: "rgba(38, 38, 38, 0.5)",
              foreground: "#ffffff"
            },
            content4: {
              DEFAULT: "rgba(48, 48, 48, 0.4)",
              foreground: "#ffffff"
            },
            default: {
              50: "#f8f8f8",
              100: "#f0f0f0",
              200: "#e4e4e4",
              300: "#d1d1d1",
              400: "#b4b4b4",
              500: "#9a9a9a",
              600: "#818181",
              700: "#6a6a6a",
              800: "#5a5a5a",
              900: "#3d3d3d",
              DEFAULT: "rgba(255, 255, 255, 0.1)",
              foreground: "#ffffff"
            },
            primary: {
              50: "#fff0f3",
              100: "#ffe4ea",
              200: "#ffc9d6",
              300: "#ff9cac",
              400: "#ff6683",
              500: "#ff3a5e",
              600: "#ff1745",
              700: "#e70033",
              800: "#c2002b",
              900: "#a10026",
              DEFAULT: "#ff9cac",
              foreground: "#000000"
            },
            secondary: {
              50: "#f2f0ff",
              100: "#e8e5ff",
              200: "#d5ceff",
              300: "#b9a9ff",
              400: "#9c7dff",
              500: "#8250ff",
              600: "#7132f5",
              700: "#6022e1",
              800: "#521db7",
              900: "#451c93",
              DEFAULT: "#b9a9ff",
              foreground: "#000000"
            }
          }
        },
        dark: {
          colors: {
            background: "#000000",
            foreground: "#ffffff",
            focus: "#ff9cac",
            divider: "rgba(255, 255, 255, 0.1)",
            content1: {
              DEFAULT: "rgba(18, 18, 18, 0.7)",
              foreground: "#ffffff"
            },
            content2: {
              DEFAULT: "rgba(28, 28, 28, 0.6)",
              foreground: "#ffffff"
            },
            content3: {
              DEFAULT: "rgba(38, 38, 38, 0.5)",
              foreground: "#ffffff"
            },
            content4: {
              DEFAULT: "rgba(48, 48, 48, 0.4)",
              foreground: "#ffffff"
            },
            default: {
              50: "#f8f8f8",
              100: "#f0f0f0",
              200: "#e4e4e4",
              300: "#d1d1d1",
              400: "#b4b4b4",
              500: "#9a9a9a",
              600: "#818181",
              700: "#6a6a6a",
              800: "#5a5a5a",
              900: "#3d3d3d",
              DEFAULT: "rgba(255, 255, 255, 0.1)",
              foreground: "#ffffff"
            },
            primary: {
              50: "#fff0f3",
              100: "#ffe4ea",
              200: "#ffc9d6",
              300: "#ff9cac",
              400: "#ff6683",
              500: "#ff3a5e",
              600: "#ff1745",
              700: "#e70033",
              800: "#c2002b",
              900: "#a10026",
              DEFAULT: "#ff9cac",
              foreground: "#000000"
            },
            secondary: {
              50: "#f2f0ff",
              100: "#e8e5ff",
              200: "#d5ceff",
              300: "#b9a9ff",
              400: "#9c7dff",
              500: "#8250ff",
              600: "#7132f5",
              700: "#6022e1",
              800: "#521db7",
              900: "#451c93",
              DEFAULT: "#b9a9ff",
              foreground: "#000000"
            }
          }
        }
      }
    })
  ]
}
