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
}