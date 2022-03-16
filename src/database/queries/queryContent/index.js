const { addPostDB } = require('./addPostDB');
const { renderPostsDB } = require('./renderPostsDB');
const { deletePostDB } = require('./deletePostDB');

module.exports = { renderPostsDB, addPostDB, deletePostDB };