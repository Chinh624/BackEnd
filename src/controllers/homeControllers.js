const connection = require("../config/database");
const { getAllUsers } = require("../service/CRUDservice");

const getHomePage = (req, res) => {
  res.render("home.ejs");
};
// create user
const createUser = (req, res) => {
  res.render("createUser.ejs");
};

//save user
const saveUser = async (req, res) => {
  const { userName, passWord } = req.body;
  console.log("username:", userName, "password:", passWord);
  let [results, fields] = await connection.execute(
    `INSERT INTO Users (userName, passWord) VALUES (?, ?)`,
    [userName, passWord]
  );
  console.log(results);
  res.send("Created user successfully");
};

// show list user
const listUsers = async (req, res) => {
  let results = await getAllUsers();
  res.render("tableUser.ejs", { list: results });
};

// delete user
const deleteUser = async (req, res) => {
  let results = await getAllUsers();

  res.render("deleteUser.ejs", { list: results });
};
// edit user
const editUser = async (req, res) => {
  const userId = req.params.id;
  let [results, fields] = await connection.execute(
    `SELECT * FROM Users WHERE id = ?`,
    [userId]
  );
  let user = results && results.length > 0 ? results[0] : {};
  res.render("editUser.ejs", { userEdit: user });
};
// update user when edit done
const updateUser = async (req, res) => {
  const { userName, passWord, userId } = req.body;
  console.log("username:", userName, "password:", passWord, "userId:", userId);
  let [results, fields] = await connection.execute(
    `UPDATE Users SET userName = ?, passWord = ? WHERE id = ?`,
    [userName, passWord, userId]
  );
  console.log(results);
  res.send("Update Successful");
};

module.exports = {
  getHomePage,
  createUser,
  listUsers,
  saveUser,
  editUser,
  deleteUser,
  updateUser,
};
