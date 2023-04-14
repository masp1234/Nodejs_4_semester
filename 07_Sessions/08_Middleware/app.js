import express from 'express';

const app = express();

const PORT = process.env.PORT || 8080

app.use("/room", houseButler);


function houseButler(req, res, next) {
    console.log("This way...");
    next();
}

import roomRouter from './routers/room-router.js';
app.use(roomRouter);
/* function get(path, cb) {
    // matches the path
    let req, res, next = {};
    cb(req, res, next);
}

const app = { };

app.get("/path", (req, res, next) => {

}) */

// could be a session check or something that authenticates checking if a user exists in a database
// there is no security, if you only do it in the client - can be overridden and hacked easily
function guard(req, res, next) {
    console.log("are you allowed in?");
    if (req.query.name === 'Anders') {
        req.myName = "Anders";
        // could also return next()
        next()
    }
    else {
        res.send( { message: 'You are not allowed to enter'});
    }
}
// variadic function (...)
app.get("/frontdoor", [guard, guard, guard, guard, guard], (req, res) => {
    res.send({ message: `Please enter, ${req.myName}` })
})



// will run through the endpoints untill it finds the first one that matches. so it will be room 1
app.get('/room', (req, res, next) => {
    next();
});

app.get("inlinemiddleware", (req, res, next) => {
    console.log('enters here first');
    next();
}, 
(req, res, next) => {
    console.log("is here now");
    res.send( {message: "called the inline middleware"} )
}
);

// middleware runs before your custom callback - after the request, but before the response. Happens before our callback
app.get("/room", (req, res) => {
    res.send({message: ' i am in room 2'});
});

// fallback route
app.get('*', (req, res) => {
    res.send('<h1>404 - Not found</h1>')
})
app.listen(PORT, () => {
    console.log(`The server is listening on port: ${PORT}`);
});