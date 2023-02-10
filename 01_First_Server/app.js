const { query } = require("express");

// imports the module
const express = require("express");

// one line - const app = require("express")()

// instantiates the server
const app = express();

// console.log(express) logs the library with all it's methods


// console.log(app) logs the instantiated version of the library

// 8080 is the http development port
app.use(express.json());


// route (entire thing)
// HTTP method
// first parameter is the endpoint, second is a callback function which gets the req and res arguments from express
app.get('/hello', (req, res) => {
    res.status(200).json({
        message: "hello"
    })
});

let bicycleSpins = 0;
app.get("/spinthebicycle", (req, res) => {
    bicycleSpins += 1;
    res.status(200).send(`bicycle spins: ${bicycleSpins}`);
});

app.get("/kickthedinosaur", (req, res) => {
    res.status(200).send({kickedTheDinosaur: true})
});

// can also send html and html files
app.get("/about", (req, res) => {
    res.send(`<h1>Aboudfsdfsdfsdfsdfsdft</h1>
                <div>Hello</div>`)
});
// query string kommer med som et object i req.query
app.get("/bat", (req, res) => {
    const query = req.query;
    console.log(query);
    res.send({message: `the bat is ${params.adjective}`})
});

app.get("/bottle/:bottleSize", (req, res) => {
    
    console.log(req.params)
    res.send({bottleSize: req.params.bottle})
});

app.post("/package", (req, res) => {
    console.log(req.body)
    res.send({body: req.body})
})

// why json - widely supported and easy to read - makes communication between servers and frontends easy
// why is it called Javascript Object Notation if it's not the same - because it looks very similar


app.listen(8080, () => {
    console.log('Server is listening on port 8080');
})

