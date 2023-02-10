const express = require('express');

const app = express();
const PORT = 8080;

const birds = [
    {
        id: 1,
        name: "Dove"
    },
    {
        id: 2,
        name: "Hummingbird"
    },
    {
        id: 3,
        name: "Seagull"
    }
]


app.get("/api/v1/birds", (req, res) => {
    res.status(200).send(birds);
})

app.get("/api/v1/birds/:id", (req, res) => {
    const bird = birds.filter(bird => bird.id == req.params.id);
    res.status(200).send(bird);
})



app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})