const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res) => {
    // console.log('hrsdhdsdtfrjhgk');
});

router.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email'],
    })
);

router.get(
    '/oauth2callback',
    passport.authenticate(
        'google',
        {
            successRedirect: '/', // where do you want the client to go after you login
            failureRedirect: '/', // where do you want the client to go if login fails
        },
        (req, res) => {
            console.log('test res');
        }
    )
);

module.exports = router;
