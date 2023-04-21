import { Router } from 'express'
import db from '../databases/connection.js'

const router = Router()

router.get("/planets", async (req, res, next) => {
    const test = await db.all("SELECT * FROM planets")
    console.log(test)
    res.send({ data: 'hello' })
})



export default router