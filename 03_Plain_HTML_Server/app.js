const express = require('express');


// const tankUtils = require("./util/tanks.js");


// Destructuring
const { getTanks, addTank } = require("./util/tanks.js");
const { getGuards, addGuard } = require("./public/museum-guards/barracks.js");


const app = express();
const PORT = 8080;

// specifying which files can be accessed, so you cant access private files - for security
app.use(express.static('public'));

console.log(__dirname)


let visitorCount = 0;

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/frontpage/frontpage.html');

})

app.get("/tanks", (req, res) => {
    res.sendFile(__dirname + '/public/tanks/tanks.html');
})

app.get("/visitors", (req, res) => {
    res.sendFile(__dirname + "/public/visitors/visitors.html")
})

// API
app.get("/api/tanks", (req, res) => {
    res.status(200).json(getTanks());
});

app.get("/api/visitors", (req, res) => {
    res.send({ data: visitorCount })
})

app.put("/api/visitors", (req, res) => {
    res.send({ data: ++visitorCount });
})

app.get("/museum-guards", (req, res) => {
    res.sendFile(__dirname + "/public/museum-guards/museum-guards.html");
});

app.get("/proxy", async (req, res) => {
    const response = await fetch('https://google.com');
    const data = await response.text();
    console.log(data)
    res.send(data)
})

app.get("/guards", (req, res) => {
    res.status(200).send({ hello: true });
});

app.get("/api/guards", (req, res) => {
    // req.query is an object that contains key-value pairs
    if (req.query.passport === 'secret') {
        return res.redirect('/museum-guards')
    }
    res.send({ message: 'passport is wrong' })
})




// error is undefined if there is no error. if there is an error it will be an object, and then the if will run
app.listen(PORT, (error) => {
    if (error) {
        console.log(error)
        return;
    }
    console.log('Server is listening on port', PORT);
    
})

/* falsy values: tjek falsy values */
const falsy = undefined;
if (falsy) {
    console.log('ooh nooo');

}