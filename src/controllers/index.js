const signUp = require('./signUp');
const login = require('./login');
const { routesProtector } = require('./routesProtector');
const { renderPostsPub } = require('./renderPostsPub');
const { addPost } = require('./addPost');
const { upVote } = require('./upVote');
const { downVote } = require('./downVote');
const { renderPostsHome } = require('./renderPostsHome');
const { logout } = require('./logout');
const { deletePost } = require('./deletePost');

module.exports = { signUp, login, routesProtector, renderPostsPub, addPost, upVote, downVote, renderPostsHome, logout, deletePost };