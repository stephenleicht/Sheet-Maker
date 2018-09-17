const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = (neutrino) => {
    // Proxy everything else to the backend
    //TODO: only do for /api and only in dev mode
    neutrino.config.devServer.proxy({
        "*": 'http://localhost:4000'
    })

    neutrino.config.plugin('write-file')
    .use(WriteFilePlugin, [])

    neutrino.config.devServer.headers({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
}