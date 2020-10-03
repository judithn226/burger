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
      "INSERT INTO ${tableName} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)});";

    connection.query(queryStatement, vals, (err, result) => {
      if (err) throw err;
      console.log("Successfully Added");
      callback(result);
    });
  },

  updateOne: (tableName, cols, vals, condition, callback) => {
    let queryStatement =
      "UPDATE ${tableName} SET ${col.toString()} = ? WHERE ${condition}";

    connection.query(queryStatement, vals, (err, result) => {
      if (err) throw err;
      console.log("Successfully Updated");
      console.log("Execiting Third Declared Callback");
      callback(result);
    });
  },
};

// exporting orm object
module.exports = orm;
