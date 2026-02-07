/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#0d0d0d',
          50: '#f5f0e8',
          100: '#e8e0d5',
          200: '#d4c9bb',
          300: '#a39a8a',
          400: '#6b6560',
          500: '#3d3a37',
          600: '#2a2826',
          700: '#1a1a1a',
          800: '#141414',
          900: '#0d0d0d',
          950: '#080808',
        },
        cream: {
          DEFAULT: '#f5f0e8',
          50: '#faf8f5',
          100: '#f5f0e8',
          200: '#e8e0d5',
          300: '#d4c9bb',
        },
        accent: {
          DEFAULT: '#ea5c2b',
          50: '#fef4f0',
          100: '#fde8df',
          200: '#fad0bf',
          300: '#f6a88a',
          400: '#f07d4d',
          500: '#ea5c2b',
          600: '#db4420',
          700: '#b6341c',
          800: '#902d1e',
          900: '#75291c',
        },
        honey: {
          DEFAULT: '#ea5c2b',
          50: '#fef4f0',
          100: '#fde8df',
          200: '#fad0bf',
          300: '#f6a88a',
          400: '#f07d4d',
          500: '#ea5c2b',
          600: '#db4420',
          700: '#b6341c',
          800: '#902d1e',
          900: '#75291c',
        },
        midnight: {
          DEFAULT: '#0f172a',
          900: '#0f172a',
          950: '#020617',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'smoke-1': 'smoke 8s ease-in-out infinite',
        'smoke-2': 'smoke 10s ease-in-out 1s infinite',
        'smoke-3': 'smoke 12s ease-in-out 2s infinite',
      },
      keyframes: {
        smoke: {
          '0%, 100%': { opacity: '0.3', transform: 'translateY(0) scale(1)' },
          '50%': { opacity: '0.6', transform: 'translateY(-20px) scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
