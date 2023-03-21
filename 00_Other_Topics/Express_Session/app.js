const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)


const app = express()
const PORT = 8080
const dbString = 'mongodb://localhost:27017/session_tutorial_db'
const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const connection = mongoose.createConnection(dbString, dbOptions)


const sessionStore = new MongoStore({
    mongooseConnection : connection,
    collection: 'sessions'
})

app.use(session({
    secret: 'some secret',
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))





app.listen(PORT, () => {
    console.log(`The server is listening on port: ${PORT}`)
})