/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D4AF37', // Gold
          light: '#E5C158',
          dark: '#B48F17',
          extra: '#926F34', // Deep Gold
        },
        secondary: {
          DEFAULT: '#FDFBF7', // Ivory/Off-white
          light: '#FFFFFF',
          dark: '#F4F1EA',
        },
        accent: {
          charcoal: '#2D2622', // Deep Warm Earth (Strictly Not Black)
          gold: '#FFD700',
        }
      },
      animation: {
        'glow-pulse-light': 'glow-pulse-light 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse-light': {
          '0%, 100%': { opacity: 0.6, filter: 'brightness(1)' },
          '50%': { opacity: 0.8, filter: 'brightness(1.2)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      }
    },
  },
  plugins: [],
}
