const path = require("path");// common js


const viewEngine = (app) =>{
app.set("views", path.join('./src', 'views'));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("Hello World!");
  });

}

module.exports = viewEngine;