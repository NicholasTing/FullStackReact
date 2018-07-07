const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

const Survey = mongoose.model('surveys');

module.exports = app => {

    app.post(
        '/api/surveys', requireLogin,requireCredits,
        (req,res) => {
            const {title, subjet, body, recipients} = req.body;

            const survey = new Survey({
                title,
                subject,
                body,
                recipients: recipients.split(',').map(email => ({ email: email.trim() })),
                // recipients: recipients.split(',').map(email => { return { email : email }})
                _user: req.user.id,
                dateSent: Date.now()

            });
        }

    )
};