
// next is a function you call when the middleware is done running
// indicate when you call this function, pass this middleware to the next
// function in the chain / next middleware in the chain
module.exports = (req, res, next) => {
    if(!req.user){
        return res.status(401).send({error:'You must log in!'});
    }

    next();
    
}