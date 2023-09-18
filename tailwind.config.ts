import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    colors: {
      primary: '#42446E',
      secondary: '#666',
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
