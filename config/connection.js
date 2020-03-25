var mysql = require("mysql");

// Set up our connection information
var connection = mysql.createConnection({
  port: 3308, //may have to change back to 3306 or whatever your root port is
  host: "localhost",
  user: "root",
  password: "Silent7even", //need to ask about how to go about this without giving my pw out to the world- process.env
  database: "burgers_db"
});

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;
