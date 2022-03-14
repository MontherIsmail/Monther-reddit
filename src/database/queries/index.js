const { addUserDB } = require('./addUser');
const { loginDB } = require('./login');
const { renderPostsDB } = require('./renderPostsDB');
const { addPostDB } = require('./addPostDB');
const { upVoteDB } = require('./upVoteDB');
const { downVoteDB } = require('./downVoteDB');


module.exports = { addUserDB, loginDB, renderPostsDB, addPostDB, upVoteDB, downVoteDB };
