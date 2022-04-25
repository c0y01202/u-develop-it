const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  // Your MySQL username,
  user: "root",
  // Your MySQL password
  password: "Ana1ys1s2022^^",
  database: "election",
});

module.exports = db;
