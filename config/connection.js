const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
   connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
   connection = mysql.createConnection({
      host: "localHost",
      port: 3308,
      user: "root",
      password: "Silent7even",
      database: "burgers_db"
   });
}

// database connection info

// make connection to the database

connection.connect(function(err) {
   if (err) {
      console.error("error connecting: " + err.stack);
      return;
   }
   console.log("\nconnected as ID " + connection.threadId + "\n");
});

module.exports = connection;
