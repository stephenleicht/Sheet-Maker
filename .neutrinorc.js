module.exports = {
  options: {
    output: './build/client',
    mains: {
      index: 'client/index'
    }
  },
  use: [
    '@neutrinojs/react',
    './config/typescript.neutrino.js',
    './config/styles.neutrino.js',
    // ['@neutrinojs/copy', {
    //   patterns: [
    //     {from: 'src/extension/manifest.json', to: 'extension'}
    //   ]
    // }],

    './config/devServer.neutrino.js'
  ]
};
