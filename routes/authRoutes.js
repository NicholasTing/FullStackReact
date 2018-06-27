const passport = require('passport');

// exporting a function from this file
module.exports = app =>{

    app.get(
        '/auth/google',
        passport.authenticate('google', {
        scope: ['profile','email']
        })
    );

    app.get(
        '/auth/google/callback',
        passport.authenticate('google')
    );

}