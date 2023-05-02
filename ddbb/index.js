const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "b01f23101q23c01",
  database: "ourspace",
});

module.exports = db;
