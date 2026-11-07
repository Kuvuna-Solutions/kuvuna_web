/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kuvuna: {
          navy: '#12304A',
          amber: '#F28C28',
          teal: '#2E8B7A',
          slate: '#5B6B7A',
          cloud: '#EEF2F6',
          'navy-dark': '#0B1D2D',
          'navy-light': '#1A4367',
          'amber-hover': '#D9771C',
          'teal-light': '#3AA894',
          'cloud-light': '#F8FAFC',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        'tight-heading': '-0.02em',
        'spaced-label': '0.14em',
      }
    },
  },
  plugins: [],
}
