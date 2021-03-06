const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

//user - mongoose model.
passport.serializeUser((user,done)=>{
    done(null, user.id);
});

// mongoose model instance
passport.deserializeUser((id, done)=>{
    //  asyncronous, then we assume its a promise
    User.findById(id)
        .then(user=>{
            done(null, user);
        });
});

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy:true
    },
    async (accessToken, refreshToken, profile, done) =>{

        const existingUser = await User.findOne({googleId:profile.id})
            
        if(existingUser){
            // already have a record with the given profile id.
            // First is no error, second is user record.
            done(null, existingUser);
        }
        
        // creates a mongoose model instance,
        // save that instance
        // then get another model instance

        // Just make a new user
        const user = await new User({googleId:profile.id}).save();
        done(null,user);
        
    }
  )

);

