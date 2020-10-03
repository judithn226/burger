// setting up mysql connection
const mysql = require("mysql");

const connnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ngozika1",
  port: 3306,
  database: "burgers_db",
});
//making connection
connnection.connect(function (err) {
  if (err) {
    console.error("error with connection:" + err.stack);
    return;
  }
  console.log("connected as id" + connnection.threadId);
});

//exporting connection
module.exports = connnection;
