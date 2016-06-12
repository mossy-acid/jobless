const mysql = require('mysql');
const config = require('./config');

const connection = mysql.createConnection({
  host: config.config.host,
  user: config.username,
  password: config.password,
});
connection.connect();

connection.query(`DROP DATABASE IF EXISTS ${config.database}`, err => {
  if (err) throw err;
});
connection.query(`CREATE DATABASE IF NOT EXISTS ${config.database}`, err => {
  if (err) throw err;
});
require('./index.js');

connection.end();
