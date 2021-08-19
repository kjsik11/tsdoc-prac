module.exports = {
  apps: [
    {
      name: 'tsdoc',
      script: 'yarn',
      args: 'start',
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
