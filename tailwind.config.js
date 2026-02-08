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
          DEFAULT: '#121214',
          100: '#e8e6e4',
          200: '#c4c2bf',
          700: '#1a1a1d',
          800: '#161618',
          950: '#0c0c0d',
        },
        cream: {
          DEFAULT: '#F3F4F1',
          50: '#fafaf9',
          100: '#F3F4F1',
          200: '#e8e9e6',
        },
        accent: {
          DEFAULT: '#E65127',
          400: '#eb6d48',
          500: '#E65127',
          600: '#c94620',
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
      backdropBlur: { xs: '2px' },
    },
  },
  plugins: [],
}
