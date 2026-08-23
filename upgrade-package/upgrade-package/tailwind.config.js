/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#f7f4ef',
        ink: '#171717',
        accent: '#b45309',
      },
      borderRadius: {
        xl2: '1rem',
      },
      boxShadow: {
        card: '0 8px 24px rgb(0 0 0 / 0.08)',
        cardHover: '0 14px 36px rgb(0 0 0 / 0.14)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
