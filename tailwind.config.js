/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lilac: {
          50: '#f8f6fc',
          100: '#f3edfa',
          200: '#e5d9f5',
          300: '#d1b8ee',
          400: '#b983ff', // purple from screenshot
          500: '#f67acb', // pink from screenshot
          600: '#e06fc6',
          700: '#a259c9',
          800: '#7c3fa0',
          900: '#4d2676',
        },
      },
      backgroundImage: {
        'lilac-gradient': 'linear-gradient(135deg, #7c3fa0 0%, #b983ff 50%, #f67acb 100%)',
      },
    },
  },
  plugins: [],
};
