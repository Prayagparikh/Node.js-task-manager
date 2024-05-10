const notFound = (req, res) => {
    res.status(404).send('The requested path does not exist!')
}

module.exports = notFound