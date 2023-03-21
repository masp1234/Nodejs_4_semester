const logger = (req, res, next) => {
    const date = new Date()
    console.log(`${req.url}, ${date.toLocaleTimeString()}, ${date.toLocaleDateString()}`)
    next()
}

export {
    logger
}