import { Router } from 'express';

const router = Router();

router.post('/', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "I'm learning to code :)" })
    }
});

export default router;