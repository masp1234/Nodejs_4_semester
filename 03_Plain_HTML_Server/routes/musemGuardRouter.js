const { Router } = require('express')

const router = Router();

router.get("/museum-guards", (req, res) => {
    res.sendFile(__dirname + "/public/museum-guards/museum-guards.html");
});

router.get("/guards", (req, res) => {
    res.status(200).send({ hello: true });
});

router.get("/api/guards", (req, res) => {
    // req.query is an object that contains key-value pairs
    if (req.query.passport === 'secret') {
        return res.redirect('/museum-guards')
    }
    res.send({ message: 'passport is wrong' })
})

module.exports = router;