const tsConfig = require('./config/typescript.neutrino');
const StartServerPlugin = require('start-server-webpack-plugin');

module.exports = {
  options: {
    index: 'server/server',
  },
  use: [
    '@neutrinojs/node',
    '@neutrinojs/react',
    tsConfig,
    './config/styles.neutrino.js',
  ]
};
