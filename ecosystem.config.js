module.exports = {
  apps: [
    {
      name: 'tsdoc',
      script: 'yarn',
      args: 'start',
      cwd: '/home/ec2-user/Programming/tsdoc-prac',
      instances: 2,
      autorestart: true,
      watch: false,
      env_production: {
        NODE_ENV: 'production',
        API_URL: 'YOUR ENV URL',
        PORT: 3000,
      },
    },
  ],
};
