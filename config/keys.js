// keys.js - figure out what set of credentials to return

if (process.env.NODE_ENV === 'production'){
    // production
    module.exports = require('./prod');

} else {
    // development
    module.exports = require('./dev');
}