const path = require('path');

module.exports = (neutrino) => {
    neutrino.config.module.rule('style').delete();
    neutrino.config.module.rule('style-modules').delete('style-modules');
    const rule = neutrino.config.module
        .rule('style')

    rule.use('style')
        .loader(require.resolve('style-loader'));

    rule.use('css')
        .loader(require.resolve('css-loader'))
        .options({
            modules: true,
            importLoaders: 0,
            localIdentName: '[name]__[local]___[hash:base64:5]'
        })

}