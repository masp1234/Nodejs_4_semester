// "express" is the name of the folder in node_modules

import express from "express";
import fs from 'fs';

// components
const navbar = fs.readFileSync('./public/components/navbar/navbar.html').toString();
const footer = fs.readFileSync('./public/components/footer/footer.html')
console.log(navbar);

// pages
// readfileSync returns a buffer that we need to turn into a string
const frontpage = fs.readFileSync('./public/pages/frontpage/frontpage.html').toString();
const irlQuests = fs.readFileSync('./public/pages/irl-quests/irl-quests.html').toString();
const jokes = fs.readFileSync('./public/pages/jokes/jokes.html').toString();


// constructed pages
// this only constructs the frontPagePage once, when the server is started, instead of constructing it by concatenating every request
const frontPagePage = navbar + frontpage + footer;
const irlsQuestsPage = navbar + irlQuests + footer;
const jokesPage = navbar + jokes + footer;

const app = express();

const PORT = 8080;

import { getJoke } from "./util/jokes.js";
//console.log(await jokes.getJoke());
import path from "path";
// you can write the path without making an endpoint, but it's ugly and not something you should do
// if you dont serve the public folder, you would have to map css, audio, images etc to each endpoint
// having an endpoint that sends a html page would still work without serving the public folder, but the css and js would not work. only if you map them in the endpoint as well
app.use(express.static('public'));


// no __dirname in ecmascript module, so have to use path package or something similar
app.get("/", (req, res) => {
    res.send(frontPagePage);
})

app.get("/IRLQuests", (req, res) => {
    res.send(irlsQuestsPage);


    /*
    strings to be concatenated if you pass an array of strings. No reason to do it this way. Slower and more awkward
    path.resolve("public", "pages", "irl-quests", "irl-quests.html")

    */
});

app.get("/jokes", (req, res) => {
    res.send(jokesPage);
})


app.listen(PORT, error => {
    if (error) {
        console.log(error);
        return;
    }
    console.log(`The server is listening on ${PORT}`);
})


// how the callback gets the error
function listen (port, callback) {
    try {
        // starting the server
        if (callback) callback();
    }
    catch (error) {
        if (callback) callback(error);
    }
};