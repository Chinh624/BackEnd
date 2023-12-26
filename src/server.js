const express = require("express");// common js
const app = express();// app express
const port = 8080; // port => hardcode
const viewEngine = require("./config/viewEngine"); // import config 
const webRouter = require("./routers/web"); // router
// get the client
const mysql = require('mysql2');
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307, 
  // if not null default 3306
  user: 'root', // empty
  password:'123456',
  database: 'DataLearn',
});

connection.query(
  'SELECT * FROM Users u',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);






viewEngine(app)
app.use(webRouter);


app.listen(port, () => {
  console.log(`Server web ${port}`);
});
