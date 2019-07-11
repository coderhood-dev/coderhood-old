const path = require('path');

module.exports = {
  webpack(config, options) {
    config.resolve.alias.components = path.join(__dirname, 'src/components');
    config.resolve.alias.theme = path.join(__dirname, 'src/theme');
    return config;
  },
};
