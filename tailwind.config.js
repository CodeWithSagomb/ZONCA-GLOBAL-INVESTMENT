/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zonca: {
          red: '#8B0000',
          redLight: '#A52A2A',
          grey: '#A9A9A9',
          dark: '#1A1A1A',
          light: '#F5F5F5',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'diagonal-stripes': 'repeating-linear-gradient(45deg, rgba(169, 169, 169, 0.05), rgba(169, 169, 169, 0.05) 10px, transparent 10px, transparent 20px)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
