module.exports = {
  apps: [
    // {
    //   name: 'Content',
    //   script: 'npx ts-node ./scripts/content.ts'
    // },
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
