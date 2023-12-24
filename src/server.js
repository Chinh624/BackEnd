const express = require("express");// common js
const app = express();// app express
const port = 8080; // port => hardcode
const path = require("path");// common js
//template engine
app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");

// router
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// run view
app.get("/example", (req, res) => {
  res.render("index.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
