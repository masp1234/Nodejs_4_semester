import express from 'express'
const app = express()

// index.html is server automatically - special name
app.use(express.static('public'))


import http from 'http'
// the express server wrapped with the bindings of the HTTP server module
const server = http.createServer(app)

import { Server } from 'socket.io'
// pass the server to IO - wraps the http server
const io = new Server(server)

io.on('connection', (socket) => {
    console.log('A client connected', socket.id)
})

io.on('ready event', (data) => {
    console.log('ready event', data)
})

const PORT = process.env.PORT || 8080
server.listen(PORT, (error) => {
    if (error) console.log(error)
    console.log('The server is listening on port: ' + PORT)

})