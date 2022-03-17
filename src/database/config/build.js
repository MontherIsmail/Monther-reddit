const {readFileSync} = require('fs');
const {join} = require('path');
const connection = require('./connection');

const buildDB = () => {
  const path = join(__dirname, 'build.sql');
  const sql = readFileSync(path).toString();
  return connection.query(sql);
};

module.exports = buildDB;
