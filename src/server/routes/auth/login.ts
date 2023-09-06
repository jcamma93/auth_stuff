import * as jwt from 'jsonwebtoken';
import config from '../../config';
import * as passport from 'passport';
import { Router } from 'express';


const router = Router();

router.post('/', passport.authenticate('local'), async (req, res) => {
    try {
        console.log(req.user);
        // const token = jwt.sign(
        //     { userid: userFound.id, email: userFound.email, role: 1 },
        //     config.jwt.secret!,
        //     { expiresIn: '15d' }
        // );
        // res.json(token);
    res.json('please');
        } catch (error) {
    console.log(error);
    res.status(500).json({ message: "I'm learning to code :)" })
}
});

export default router;