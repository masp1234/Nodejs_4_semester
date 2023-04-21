import { Router } from "express"
import db from "../databases/connection.js"

const router = Router()

router.post("/people", async (req, res, next) => {
    if (!req.body.name) {
        return res.status(400).send({ message: 'Missing the key (name) in the body' })
    }
    // prepared statement to avoid SQL injection - how is injection avoided by this?
    const { lastID } = await db.run('INSERT INTO people (name, planet_id) VALUES(?, 3);', [req.body.name])
    res.send({
        id: lastID,
        name: req.body.name
            })

})


export default router