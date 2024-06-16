const { override } = require('customize-cra');
const path = require('path');

module.exports = override(
  (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      "stream": require.resolve("stream-browserify"),
    };
    return config;
  }
);
