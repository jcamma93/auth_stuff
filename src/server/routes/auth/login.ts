import * as jwt from 'jsonwebtoken';
import db from '../../db';
import config from '../../config';
import { Router } from 'express';
import { compareHash } from '../../utils/passwords';

const router = Router();

router.post('/', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
        const [userFound] = await db.users.find('email', email);
        if (userFound && compareHash(password, userFound.password)) {
            const token = jwt.sign(
                { userid: userFound.id, email: userFound.email, role: 1 },
                config.jwt.secret!,
                { expiresIn: '15d' }
            );
            res.json(token);
            return;
        }
        return res.status(401).json({ message: 'invalid credentials' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "I'm learning to code :)" })
    }
});

export default router;