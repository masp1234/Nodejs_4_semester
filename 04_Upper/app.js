// "express" is the name of the folder in node_modules

import express from "express";

const app = express();

const PORT = 8080;

import jokes from "./util/jokes.js";
import path from "path";
// you can write the path without making an endpoint, but it's ugly and not something you should do
// if you dont serve the public folder, you would have to map css, audio, images etc to each endpoint
// having an endpoint that sends a html page would still work without serving the public folder, but the css and js would not work. only if you map them in the endpoint as well
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/pages/frontpage/frontpage.html"));
})

app.get("/IRLQuests", (req, res) => {
    res.sendFile(path.resolve("public/pages/irl-quests/irl-quests.hmtl"));

    /*
    strings to be concatenated if you pass an array of strings. No reason to do it this way. Slower and more awkward
    path.resolve("public", "pages", "irl-quests", "irl-quests.html")

    */
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