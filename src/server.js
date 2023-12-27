require('dotenv').config()
const express = require("express");// common js
const app = express();// app express
const viewEngine = require("./config/viewEngine"); // import config 
const webRouter = require("./routers/web"); // router
const connection = require("./config/database");
const port = process.env.PORT ||8888; //port => hardcode • uat • prod
const hostname = process. env.HOST_NAME;


connection.query(
  'SELECT * FROM Users',
  function(err, results, fields) {
    console.log(results); 
  }
);

viewEngine(app)
app.use(webRouter);


app.listen(port, () => {
  console.log(`Server web ${port}`);
});
