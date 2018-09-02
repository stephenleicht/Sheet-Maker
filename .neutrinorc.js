const tsConfig = require('./config/typescript.neutrino');

module.exports = {
  options: {
    index: 'server/server'
  },
  use: [
    '@neutrinojs/node',
    '@neutrinojs/react',
    tsConfig
  ]
};
