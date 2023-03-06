// "express" is the name of the folder in node_modules

import express from "express";
import path from "path";
import { getJokes } from "./util/jokes.js";

const app = express();

const PORT = 8080;

// you can write the path without making an endpoint, but it's ugly and not something you should do
// example : http://localhost:8080/pages/jokes/jokes.html -> will get the jokes.html page without needing an endpoint
// if you dont serve the public folder, you would have to map css, audio, images etc to each endpoint
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

app.get("/api/jokes", (req, res) => {
    console.log(getJokes());
    test();
    res.status(200).send({ data: getJokes() })
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