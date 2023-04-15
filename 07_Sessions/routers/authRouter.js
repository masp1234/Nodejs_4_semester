// task finish this file
// do the bcrypt authentication in here
import { Router } from 'express';

const router = Router();


router.get("/auth/logout", (req, res) => {
    res.send({});
})

router.post("/auth/login", (req, res) => {
    res.send({});
})


export default router;