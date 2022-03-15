
const { Strategy, ExtractJwt } = require('passport-jwt')
const { getUserCollection } = require('./mongodb')
const passport = require('passport');
const jwt = require('jsonwebtoken');

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret'
}

passport.use(new Strategy(opts, async function (payload, done) {
    const result = getUserCollection().findOne({ username: payload.username });
    if (!result) {
        return done(null, false)
    } else {
        return done(null, true)
    }
}));

Api.post('/singin', async(req, res) => {
    const { username, password } = req.body;
    const result = await itemCollection.findOne({username});
    console.log(result)
    if (!result) {
        res.status(404).send('Unautherize')
    } else if (result && result.password === password) {
        const token = jwt.sign({ username }, 'secret', { expiresIn: 86400 });
        res.send(token)
    }
}); 

