const path = require("path");// common js
// const connection = require("../config/database");


const viewEngine = (app) =>{
app.set("views", path.join('./src', 'views'));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home.ejs");
  });

}

module.exports = viewEngine;