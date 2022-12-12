/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    //
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}'
  ],
  daisyui: {
    themes: [
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          'primary-content': '#333'
        }
      }
    ]
  },
  theme: {
    extend: {
      colors: {
        current: 'currentColor'
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme('colors.primary-content'),
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.primary')
            },
            a: {
              color: theme('colors.neutral'),
              '&:hover': {
                color: theme('colors.neutral-focus')
              }
            }
          }
        },
        corePlugins: {
          code: false
        }
      })
    }
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
