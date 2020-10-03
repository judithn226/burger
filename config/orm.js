const connnection = require("./connection");
const connection = require("./connection");
const tableName = "burgers";

function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

const orm = {
  selectAll: (tableName, callback) => {
    let queryStatement = "SELECT * FROM ${tableName};";

    connnection.query(queryStatement, (err, result) => {
      if (err) throw err;
      callback(result);
    });
  },

  insertOne: (tableName, cols, vals, callback) => {
    let queryStatement =
      "INSERT TO ${tableName} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)});";

      connnection.query(queryStatement, vals (err, result) =>{
          if (err) throw err;
          console.log("Successfuly Added");
          callback(result);
      }
  

// exporting orm object
module.exports = orm;
