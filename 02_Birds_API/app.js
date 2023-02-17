const express = require('express')
const app = express();


const PORT = 8080;

app.get("/birds", (req, res) => {
    res.status(200).send('bird');
})

app.listen(PORT, () => {
    console.log('server is listening on port', PORT)
})