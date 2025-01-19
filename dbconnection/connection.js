const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '', // Set host address
  port: '3306', // Set port number
  database: '', // Set database name
  user: '', // Set user name for the service
  password: '' // Set password for the user
});

module.exports = connection;