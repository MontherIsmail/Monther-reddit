const signUp = require('./signUp');
const login = require('./login');
const { renderPostsPub } = require('./renderPostsPub');
const { addPost } = require('./addPost');
const { upVote } = require('./upVote');
const { downVote } = require('./downVote');


module.exports = { signUp, login, renderPostsPub, addPost, upVote, downVote };