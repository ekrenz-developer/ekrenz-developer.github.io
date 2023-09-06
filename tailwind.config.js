/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    colors: {
      'gray': '#666',
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'serif'],
        dmSans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
