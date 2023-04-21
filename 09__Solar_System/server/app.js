import dotenv from 'dotenv'
dotenv.config()

import express from 'express'

// everything is middleware ???

const app = express();

import cors from 'cors'
app.use(cors({
    // credentials for session
    credentials: true,
    origin: true
}))
// to server the pages if you want server-side rendering or getting around cors by being on the origin(same port)
// app.use(express.static("../client/dist"))

// to parse the request body as JSON
app.use(express.json())
const PORT = process.env.PORT || 8080

import planetsRouter from './routers/planetsRouter.js'
app.use(planetsRouter)

import peopleRouter from './routers/peopleRouter.js'
app.use(peopleRouter)


const server = app.listen(PORT, () => {
    console.log(`The server is listening on port: ${server.address().port}`)
})


// the callback is not blocking so this will show before the server start message - like any callback will be "postponed" async
console.log('hello')