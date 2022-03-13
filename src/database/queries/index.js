const { addUserDB } = require('./addUser');
const { loginDB } = require('./login');
const { renderPostsPubDB } = require('./renderPostsPubDB');
const { addPostDB } = require('./addPostDB');
const { upVoteDB } = require('./upVoteDB')



module.exports = { addUserDB, loginDB, renderPostsPubDB, addPostDB, upVoteDB };
