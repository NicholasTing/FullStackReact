const mongoose = require('mongoose');

// Same thing as the below
// const Schema = mongoose.Schema;

const {Schema} = mongoose;

const userSchema = new Schema({

    // can use lower or upper case, just be consistent.
    googleId: String,
    credits: { type: Number, default: 0}

});

mongoose.model('users', userSchema);