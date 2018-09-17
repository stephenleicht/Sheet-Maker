const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  options: {
    devtool: false,
    output: './build/client',
    mains: {
      index: 'client/index',
      popup: 'client/popup',
      background: 'client/background',
      inject: 'client/inject'
    }
  },
  use: [
    '@neutrinojs/react',
    './config/typescript.neutrino.js',
    './config/styles.neutrino.js',
    './config/html.neutrino.js',
    ['@neutrinojs/copy', {
      patterns: [
        {
          context: path.resolve(__dirname, './src/client'),
          from: '**/*.json',
        }
      ]
    }],
    './config/devServer.neutrino.js'
  ]
};
