const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const notFoundMiddleware = require('./middlewares/not-found')
const errorHandlerMiddleware = require('./middlewares/error-handler')
require('dotenv').config()
const port = process.env.PORT || 5000

app.use(express.static('./public'))
app.use(express.json())
app.use('/api/v1/tasks', tasks)
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

// We're connecting mongodb here, so that only if we're successfully connected then only we'll spin up the server and accept the client request
const start = async() => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => console.log(`Server is listening on port ${port}...`))
    }
    catch(err) {
        console.log('ERROR: ', err)
    }
}
start()