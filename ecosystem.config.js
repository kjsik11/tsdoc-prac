module.exports = {
  apps: [
    {
      name: 'tsdoc',
      script: 'yarn',
      args: 'start',
      instances: 2,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
        API_URL: 'YOUR ENV URL',
        PORT: 8000,
      },
    },
  ],
};
