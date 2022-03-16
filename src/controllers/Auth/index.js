const { signUp } = require('./signUp');
const { login } = require('./login');
const { logout } = require('./logout');
const { routesProtector } = require('./routesProtector');

module.exports = { signUp, login, logout, routesProtector };