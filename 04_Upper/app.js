// "express" is the name of the folder in node_modules
import{ renderPage, readPage } from './util/template-engine.js'
import express from "express";
// main css repeats on all pages, so css link is for specific css
const frontpagePath = './public/pages/frontpage/frontpage.html'

// constructed pages
// this only constructs the frontPagePage once, when the server is started, instead of constructing it by concatenating every request
const frontPagePage = renderPage(readPage(frontpagePath), {
    tabTitle: 'Frontpage'
});


const irlsQuestsPage = renderPage(readPage('./public/pages/irl-quests/irl-quests.html'), {
    tabTitle: 'IRL-Quests',
    cssLinks: ['<link rel="stylesheet" href="/pages/irl-quests/irl-quests.css">']
})

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

app.get("/jokes", async (req, res) => {
    const joke = await getJoke();
    const jokes = readPage('./public/pages/jokes/jokes.html').replace("$JOKE", JSON.stringify(joke))
    const jokesPage = renderPage(jokes, {
        tabTitle: 'Jokes'
    })
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