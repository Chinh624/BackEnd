const connection = require("../config/database");

const getHomePage = (req, res) => {
  // connection.query("SELECT * FROM Users", function (err, results, fields) {
  //   if (err) {
  //     console.error("Error fetching users:", err);
  //     res.status(500).send("Internal Server Error");
  //     return;
  //   }
  //   res.render("home.ejs", { users: results });
  // });
  
  // Instead, just render the home.ejs template without fetching users
  res.render("home.ejs");
};

const createUser = (req, res) => {
  const { uname, psw } = req.body;
  console.log("username:", uname, "password:", psw);
  // Insert the user into the Users table
  connection.query(
    "INSERT INTO Users (uname, psw) VALUES (?, ?)",
    [uname, psw],
    function (err, results) {
      console.log(results);
      res.send("Created user successfully");
    }
  );
};

const getExample = (req, res) => {
  res.render("example.ejs");
};

module.exports = {
  getHomePage,
  getExample,
  createUser, 
};
