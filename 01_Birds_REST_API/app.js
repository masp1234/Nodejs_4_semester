const express = require('express');

const app = express();

app.use(express.json());

const PORT = 8080;

const birds = [
    {
        id: 1,
        name: "Dove",
        averageWeightInGrams: 120
    },
    {
        id: 2,
        name: "Hummingbird",
        averageWeightInGrams: 4
    },
    {
        id: 3,
        name: "Seagull",
        averageWeightInGrams: 1900
    }
];

app.get("/api/v1/birds", (req, res) => {
    res.status(200).send({ data: birds });
});

app.get("/api/v1/birds/:id", (req, res) => {
    // brug find i stedet for filter, da filter returnerer et array
    // brug for at lave reg.params.id om fra string til number
    const bird = birds.find(bird => bird.id === Number(req.params.id));
    res.status(200).send({ data: bird });
});

app.post("/api/v1/birds", (req, res) => {
    const bird = { id: generateId(), ...req.body };
    birds.push(bird);
    res.status(201).send({ data: bird });
});

app.put("/api/v1/birds/:id", (req, res) => {
    const birdIndex = birds.findIndex(bird => bird.id === Number(req.params.id));
    const updatedBird = { id: birds[birdIndex].id, ...req.body};

    birds.splice(birdIndex, 1, updatedBird);
    res.status(200).send({ data: updatedBird });
});

app.patch("/api/v1/birds/:id", (req, res) => {
    const bird = birds.find(bird => bird.id === Number(req.params.id));
    if (req.body.name != null) {
        bird.name = req.body.name;
    }
    if (req.body.averageWeightInGrams != null) {
        bird.averageWeightInGrams = req.body.averageWeightInGrams;
    }
    res.status(200).send({ data: bird });
});

app.delete("/api/v1/birds/:id", (req, res) => {
    const birdIndex = birds.findIndex(bird => bird.id === Number(req.params.id));
    // kan ikke bruge birds.filter, da den ikke ændrer på arrayet, men i stedet returnerer et nyt
    birds.splice(birdIndex, 1)
    res.status(200).send({ msg: `The bird with id: ${req.params.id} was removed successfully`});
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

const generateId = () => birds.length + 1;
