const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "mysql8.db4free.net",
    user: "petsworld2",
    password: "petsworld",
    database: "petsworld2",
    port:"3306"
});

connection.connect(function(err){
    if(err)
    {
        console.log("Database Connection Failed!");
        throw err;
    }
    else
    {
        console.log("Database Connected!");
    }
})

module.exports = connection;