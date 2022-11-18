/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        current: 'currentColor'
      },
      typography: {
        corePlugins: {
          code: false
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
