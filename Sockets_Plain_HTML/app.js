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

    socket.on('ready event', (data) => {
        console.log('ready event', data)
    })
    
    socket.on('send color', (data) => {
        // only emits to the socket itself. try opening more tabs to test
        // socket.emit('a color was chosen', data)

        // sends to all EXCEPT for the socket (client) itself

        // in a game, it's useful to update the state immediately, for example position and then broadcast the event to everyone else
        socket.broadcast.emit('a color was chosen', data)
        console.log(data.data)
    })
})



const PORT = process.env.PORT || 8080
server.listen(PORT, (error) => {
    if (error) console.log(error)
    console.log('The server is listening on port: ' + PORT)

})


/// rooms

// namespaces
// default namespace is called io, contains all the namespaces - global namespace