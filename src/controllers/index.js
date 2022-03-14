const signUp = require('./signUp');
const login = require('./login');
const { routesProtector } = require('./routesProtector');
const { renderPostsPub } = require('./renderPostsPub');
const { addPost } = require('./addPost');
const { upVote } = require('./upVote');
const { downVote } = require('./downVote');
const { renderPostsHome } = require('./renderPostsHome');

module.exports = { signUp, login, routesProtector, renderPostsPub, addPost, upVote, downVote, renderPostsHome };