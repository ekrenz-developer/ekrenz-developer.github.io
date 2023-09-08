/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    colors: {
      gray: '#666',
      heading: '#42446E',
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        dmSans: ['DM Sans'],
      },
      backgroundImage: {
        'gradient-heading': 'linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%)'
      },
    },
  },
  plugins: [],
};
