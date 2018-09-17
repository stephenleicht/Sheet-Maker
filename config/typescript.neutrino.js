const path = require('path');

module.exports = (neutrino) => {
    neutrino.config.resolve
        .extensions
        .add('.ts')
        .add('.tsx')

    neutrino.config.module
        .rule('typescript')
            .test(/\.tsx?$/)
            .use('ts-loader')
            .loader('ts-loader')
            .end()

    // Add aliases to mimick typscripts module resolution
    neutrino.config.resolve.alias
    .set('engines', path.resolve(__dirname, '../src/engines'))
}