const connection = require('../config/connection');

const loginDB = (email) => {
    return connection.query({
        text   : 'SELECT * FROM users WHERE email = ($1);',
        values : [email]
    });
}

module.exports = { loginDB };