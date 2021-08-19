module.exports = {
  apps: [
    {
      name: 'tsdoc',
      script: 'npm',
      args: 'start',
      cwd: '/home/ec2-user/Programming/tsdoc-prac',
      instances: 2,
      autorestart: true,
      watch: true,
    },
  ],
};
