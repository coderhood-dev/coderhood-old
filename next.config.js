const Dotenv = require("dotenv-webpack");

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new Dotenv({ silent: true }));
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  }
};