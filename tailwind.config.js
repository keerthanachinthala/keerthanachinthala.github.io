/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      zIndex: {
        '5': '5',
        '1': '1',
      },
      animation: {
        spin: 'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
};
