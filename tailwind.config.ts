import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

export default {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    colors: {
      ...colors,
      primary: '#42446E',
      secondary: '#666',
      'secondary-light': '#A7A7A7',
      'secondary-light-2': '#EBEAED',
      success: '#018C0F',
      'success-light': '#D7FFE0',
      'gradient-logo': 'linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%)',
    },
    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        'dm-sans': ['DM Sans'],
      },
      backgroundImage: {
        'gradient-heading':
          'linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
