const { Router } = require('express')

const router = Router();

router.get("/tanks", (req, res) => {
    res.sendFile(__dirname + '/public/tanks/tanks.html');
})

// API
router.get("/api/tanks", (req, res) => {
    res.status(200).json(getTanks());
});


module.exports = router;