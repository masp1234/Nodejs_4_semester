import { Router } from 'express';

const router = Router();

router.get("/:id", (req, res) => {
    console.log('Welcome')
    res.send({ message: "the test works" })
})










export default router;