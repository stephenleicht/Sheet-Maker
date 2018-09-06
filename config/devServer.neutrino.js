module.exports = (neutrino) => {
    // Proxy everything else to the backend
    //TODO: only do for /api and only in dev mode
    neutrino.config.devServer.proxy({
        "*": 'http://localhost:4000'
    })
}