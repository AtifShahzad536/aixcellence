/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aix: {
          primary: '#0A1A2F',   // Dark Navy
          secondary: '#18CBBE', // Cyan
          blue: '#0E4B8E',      // Darker Blue for gradients
          gold: '#D4AF3F',      // Accent
        },
        teal: {
          primary: '#18CBBE',
          secondary: '#13a59a',
        },
        dark: {
          bg: '#0A1A2F',        // Updated to match official primary
          card: '#112240',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}

