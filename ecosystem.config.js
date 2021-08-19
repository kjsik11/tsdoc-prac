module.exports = {
  apps: [
    {
      name: 'tsdoc',
      script: 'npm',
      args: 'start',
      cwd: './',
      autorestart: true,
      watch: false,
    },
  ],
};
