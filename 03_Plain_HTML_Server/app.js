const express = require('express');

const app = express();
const PORT = 8080;

// specifying which files can be accessed, so you cant access private files - for security
app.use(express.static('public'));

console.log(__dirname)

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/frontpage/frontpage.html');

})

app.get("/tanks", (req, res) => {
    res.sendFile(__dirname + '/public/tanks/tanks.html');
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