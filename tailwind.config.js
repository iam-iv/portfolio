const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        platinum: '#eaebea',
        'eerie-black': '#141414',
        'cyber-yellow': '#fdd121',
        'spanish-orange': '#f46201',
        'blood-red': '#660000',
      },
      fontFamily: {
        sans: ['Monserrat', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
