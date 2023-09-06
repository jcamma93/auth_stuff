import * as passport from 'passport';
import * as PassportLocal from 'passport-local';
import db from '../db';
import { compareHash } from '../utils/passwords';

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user!));


passport.use(new PassportLocal.Strategy({
    usernameField: 'email'
}, async (email, password, done) => {
    try {
        const [userFound] = await db.users.find('email', email);
        if (userFound && compareHash(password, userFound.password)) {
            done(null, userFound);
        } else {
            done(null, false);
        }
    } catch (error) {
        done(error);
    }
}));