import express from 'express'
const app = express()
app.use(express.json())


import session from 'express-session'
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    // even if you dont use the session, save it
    saveUninitialized: true,
    // cookie secure: true, means that you are running on HTTPS
    cookie: { secure: false }
  }))

import cors from 'cors'
app.use(cors({
    credentials: true,
    origin: true
}))
// part of node
import http from 'http'
const server = http.createServer(app)

import { Server } from 'socket.io'

// io is the default namespace - global
const io = new Server(server, {
    // should be more specific in production
    // it works for me without cors for some reason, but it should not
    // can also accepts credentials etc.
    cors: {
        origin: '*',
        methods: ["*"]
    }
})

io.on('connection', (socket) => {
    console.log('A client connected', socket.id)


    socket.on('some event', (data) => {
        // io.emit broadcasts to everyone, since it's the global namespace??
        io.emit('a new color was chosen', data)
    })
})

// what's the difference between a single pipe and doublepipe?
const PORT = process.env.PORT || 8080

app.get("/something", (req, res) => {
    res.send({data: 'hello'})
})
app.get('/users/me', (req, res) => {
    res.send({ data: req.session.username })
})

app.post("/register", (req, res) => {
    console.log('registered')
    req.session.username = req.body.username
    res.send({ data: req.body.username })
})

server.listen(PORT, () => {
    console.log('the server is listening on port: ' + PORT)
})





