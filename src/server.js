const express = require("express");// common js
const app = express();// app express
const port = 8080; // port => hardcode
const viewEngine = require("./config/viewEngine"); // import config 
const webRouter = require("./routers/web"); // router

viewEngine(app)
app.use(webRouter);


app.listen(port, () => {
  console.log(`Server web ${port}`);
});
