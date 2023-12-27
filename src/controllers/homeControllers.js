const connection = require("../config/database");

const getHomePage = (req, res) => {
  let users = [];

  connection.query("SELECT * FROM Users", function (err, results, fields) {
    users = results;
    console.log("User", users);
    res.send(JSON.stringify(users));
  });
};

const getExample = (req, res) => {
  res.render("index.ejs");
};

module.exports = {
  getHomePage,
  getExample,
};
