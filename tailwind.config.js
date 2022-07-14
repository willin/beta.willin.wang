const path = require('path');

const fromRoot = (p) => path.join(__dirname, p);

module.exports = {
  darkMode: false,
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
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  content: [fromRoot('./+(app|content)/**/*.+(js|ts|tsx|mdx|md)')]
};
