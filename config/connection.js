// Set up MySQL connection.
var mysql = require("mysql");

// var connection = mysql.createConnection({
//     port: 3306,
//     host: "localhost",
//     user: "root",
//     password: "CYBERDYNEsystems!984",
//     database: "burgers_db"
// });

var connection;

console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === "production") {
    conncetion = mysql.createConnection({
        port: 3306,
        host: "i943okdfa47xqzpy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "sc1kth7gp7zcchev",
        password: "f02v6xcbtrvt39ns",
        database: "uqt0va05p1zzb7sp"
    });
} else {
    connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: "CYBERDYNEsystems!984",
        database: "burgers_db"
    });
}

// Make connection.
console.log(connection)
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;