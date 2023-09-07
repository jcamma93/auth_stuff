import { Router } from 'express';
import * as passport from 'passport';
import { ReqUser } from '../../types';

const router = Router();

router.get('/', passport.authenticate('jwt', { session: false }), (req: ReqUser, res) => {
    try {
       res.json({ message: `Enjoy your Pizza Time ${req.user!.email}` });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "I'm learning to code!  :)", error: error.message })
    }
});

export default router;