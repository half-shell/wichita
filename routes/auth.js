'use strict'
const models = require('../models');
let User = models.User;
//payload sous la forme login / password
module.exports = function(authRouter) {
    authRouter.post('/', passport.authenticate('local', { successRedirect: '/',
        failureRedirect: '/',
        failureFlash: true }));
}

function ExecAuth(log, passwd)
{
    //do Auth Operation here
    console.log(log + ' ' + passwd)
    return "is allRight";
}

let passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({ username: username }, function(err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    }
));
