module.exports = {
  apps: [
    {
      name: 'Content',
      script: 'node --loader ts-node/esm content.ts',
      cwd: './scripts',
      watch: ['../content', '.'],
      ignore_watch: ['node_modules'],
      restart_delay: 1000,
      autorestart: false
    },
    {
      name: 'Prisma',
      script: 'prisma generate',
      watch: ['./prisma'],
      autorestart: false,
      env: {
        NODE_ENV: process.env.NODE_ENV ?? 'development'
      }
    },
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
