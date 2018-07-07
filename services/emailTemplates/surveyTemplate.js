const keys = require('../../config/keys');

module.exports = survey => {
    return `
        <html>
            <body>
                <div style="text-align: center;">
                    <h3>I want your input!</h3>
                    <p>Please answer the following questions: </p>
                    <p>${survey.body}</p>

                    <div>
                        <a href="${keys.redirectDomain}">Yes</a>
                    </div>

                    <div>
                    <a href="${keys.redirectDomain}">No</a>
                    </div>
                </div>
            </body>
        </html>
    `;
};