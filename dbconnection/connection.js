const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  database: 'donation',
  user: 'nebes',
  password: 'pwns'
});

module.exports = connection;