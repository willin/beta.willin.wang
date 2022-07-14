module.exports = {
  apps: [
    {
      name: 'Tailwind CSS',
      script: 'postcss styles/**/*.css --base styles --dir app/styles --w',
      autorestart: false,
      ignore_watch: ['.']
    },
    {
      name: 'Remix',
      script: 'remix watch',
      autorestart: false,
      ignore_watch: ['.']
    }
  ]
};
