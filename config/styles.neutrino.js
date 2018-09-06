const { WatchIgnorePlugin } = require('webpack');

module.exports = (neutrino) => {
    // TODO switch to change test to /\.(global.css)$/ and exclude that from style-modules
    neutrino.config.module.rules.delete('style');

    // Change modules to have the .css file ending instead of the default .module.css, because I'm picky.
    neutrino.config.module
        .rule('style-modules')
        .test(/\.(css)$/)
        .use('css-modules')
        .loader('typings-for-css-modules-loader')
        .options({
            importLoaders: 0,
            modules: true,
            namedExport: true,
            localIdentName: '[path][name]__[local]--[hash:base64:5]'
        });

    neutrino.config.plugin('watch-ignore')
    .use(WatchIgnorePlugin, [[/\.css\.d\.ts$/]])
}