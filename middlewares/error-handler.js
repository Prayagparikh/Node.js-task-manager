const errorHandlerMiddleware = (err, req, res, next) => {
    return res.status(500).json({msg: 'i love'})
}

module.exports = errorHandlerMiddleware