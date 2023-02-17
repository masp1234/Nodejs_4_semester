const express = require('express');

const app = express();
// app.use(express.json());

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
    res.status(200).send({ data: birds });
});

app.get("/api/v1/birds/:id", (req, res) => {
    // brug find i stedet for filter, da filter returnerer et array
    // brug for at lave reg.params.id om fra string til number
    const bird = birds.find(bird => bird.id === Number(req.params.id));
    console.log(bird)
    res.status(200).send({ data: bird });
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});
