const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // Add the Node.js polyfill plugin to the Webpack config
  config.plugins.push(new NodePolyfillPlugin());

  return config;
};
