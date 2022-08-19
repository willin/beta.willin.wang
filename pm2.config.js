module.exports = [
  {
    name: 'Tailwind CSS',
    script: 'postcss styles/**/*.css --base styles --dir app/styles --w',
    autorestart: false,
    ignore_watch: ['.']
  },
  {
    name: 'Remix',
    script: 'remix dev',
    autorestart: false,
    ignore_watch: ['.']
  }
];
