const { Router } = require('express')

const router = Router();


router.get("/visitors", (req, res) => {
    res.sendFile(__dirname + "../public/visitors/visitors.html")
})

router.get("/api/visitors", (req, res) => {
    res.send({ data: visitorCount })
})

router.put("/api/visitors", (req, res) => {
    res.send({ data: ++visitorCount });
})

let visitorCount = 0;

module.exports = router;