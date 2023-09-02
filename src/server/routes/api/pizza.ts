import * as jwt from 'jsonwebtoken';
import config from '../../config';
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    try {
        const bearerToken = req.headers.authorization?.split(' ')
        const token = bearerToken && bearerToken[0] === 'Bearer' ? bearerToken[1] : null;
        if (!bearerToken || !token) {
            res.status(401).json({ message: 'unauthorized' });
            return;
        }

        const payload = <{ email: string }>jwt.verify(token, config.jwt.secret!);

        console.log(payload);

        res.json({ message: `Enjoy your Pizza Time ${payload.email}` });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "I'm learning to code!  :)", error: error.message })
    }
});

export default router;