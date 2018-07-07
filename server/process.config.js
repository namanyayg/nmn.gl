module.exports = {
  apps: [{
    name: 'nmngl',
    watch: true,
    script: './bin/www',
    env: {
      "NODE_ENV": "production"
    }
  }]
}