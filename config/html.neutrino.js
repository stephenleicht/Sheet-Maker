module.exports = (neutrino) => {
    // Neutrino is nice enough to make html pages for all your entries,
    // the background and inject script don't need them. 
    // Cleaning them up, thanks though!
    neutrino.config.plugins
        .delete('html-background')
        .delete('html-inject')
}