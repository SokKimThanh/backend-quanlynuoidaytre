"user strict";

var mysql = require("mysql");

//local mysql db connection
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@Sfg2708",
  database: "dashboard"
});

connection.connect(function(err) {
  if (err) throw err;
});

module.exports = connection;
