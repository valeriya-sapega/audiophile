/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"Manrope"', 'sans-serif'],
    },

    extend: {
      colors: {
        primary: '#101010',
        accentOrange: '#D87D4A',
        accentOrangeHover: '#fbaf85',
        greyBg: '#F1F1F1',
        greyBgLight: '#FAFAFA',
      },
    },
  },
  plugins: [],
};
