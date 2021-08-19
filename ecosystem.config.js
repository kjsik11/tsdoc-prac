module.exports = {
  apps: [
    {
      name: 'tsdoc',
      script: 'npm',
      args: 'start',
      cwd: '/home/ec2-user/Programming/tsdoc-prac',
      autorestart: true,
      watch: true,
    },
  ],
};
