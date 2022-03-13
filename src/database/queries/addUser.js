const connection = require('../config/connection');

const addUserDB = (name, email, hashedPass) => {
   return connection.query({
        text   : 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *;',
        values : [name, email, hashedPass]
    });
};

module.exports = { addUserDB };