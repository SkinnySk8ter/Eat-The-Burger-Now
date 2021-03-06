// Connection to mysql
const connection = require("../config/connection");

 
// function printQuestionMarks(num) {
//    var arr = [];

//    for (var i = 0; i < num; i++) {
//       arr.push("?");
//    }

//    return arr.toString();
// }

// convert object key/value pairs to SQL syntax
function objToSql(ob) {
   var arr = [];

   // loop through the keys and push the key/value as a string int arr
   for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
     
         if (typeof value === "string" && value.indexOf(" ") >= 0) {
            value = "'" + value + "'";
         }
         arr.push(key + "=" + value);
      }
   }

   // translate array of strings to a single comma-separated string
   return arr.toString();
}

const orm = {
    selectAll: function (cb) {
        const queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err
            }
            cb(result);
        })
    },
    insertOne: function (vals, cb) {
        let queryString = "INSERT INTO burgers(burgername) VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    updateOne: function (condition, cb) {
        let queryString = "UPDATE burgers SET devoured = 1 WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

module.exports = orm;