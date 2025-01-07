/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#636AE8',
        'hover-purple': '#7F55E0',
        'accent-pink': '#E8618C',
        'accent-teal': '#22CCB2',
        'neutral-light': '#DEE1E6',
        'neutral-dark': '#171A1F',
        'neutral-black': '#000000',
        'neutral-white': '#FFFFFF',
        'text-muted': '#565E6C',
        'text-secondary': '#9095A0',
      },
      fontFamily:{
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'navbar-bottom': '0px 4px 6px rgba(222, 225, 230, 0.50)', // Custom shadow for navbar
      }
    },
  },
  plugins: [],
}

