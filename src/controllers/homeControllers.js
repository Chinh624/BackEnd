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
  let [results, fields] = await connection.query(
    `INSERT INTO Users (userName, passWord) VALUES (?, ?)`,
    [userName, passWord]
  );
  res.send("Created user successfully");
};

// show list user
const listUsers = async (req, res) => {
  let results = await getAllUsers();
  res.render("tableUser.ejs", { list: results });
};

// delete user
const deleteUser = async (req, res) => {
  const userIdToDelete = req.params.id;
  let [result, fields] = await connection.query(
    `DELETE FROM Users WHERE id = ?`,
    [userIdToDelete]
  );
  res.render("deleteUser.ejs", { userIdToDelete });};

// edit user
const editUser = async (req, res) => {
  const userId = req.params.id;
  let [results, fields] = await connection.query(
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
  let [results, fields] = await connection.query(
    `UPDATE Users SET userName = ?, passWord = ? WHERE id = ?`,
    [userName, passWord, userId]
  );
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


// const connection = require("../config/database");
// const { getAllUsers } = require("../service/CRUDservice");

// const getHomePage = (req, res) => {
//   res.render("home.ejs");
// };

// const createUser = (req, res) => {
//   res.render("createUser.ejs");
// };

// const saveUser = async (req, res) => {
//   const { userName, passWord } = req.body;
//   console.log("Creating user - username:", userName, "password:", passWord);
//     const [results, fields] = await connection.query(
//       `INSERT INTO Users (userName, passWord) VALUES (?, ?)`,
//       [userName, passWord]
//     );
//     res.send("Create Successful")
// };

// const listUsers = async (req, res) => {
//     const results = await getAllUsers();
//     res.render("tableUser.ejs", { list: results }); 
// };

// const deleteUser = async (req, res) => {
//   const userIdToDelete = req.params.id;
//     const [result, fields] = await connection.query(
//       `DELETE FROM Users WHERE id = ?`,
//       [userIdToDelete]
//     );
//     console.log("User deleted successfully");
//     res.render("deleteUser.ejs", { userIdToDelete });
  
// };

// const editUser = async (req, res) => {
//   const userId = req.params.id;

//     const [results, fields] = await connection.query(
//       `SELECT * FROM Users WHERE id = ?`,
//       [userId]
//     );
//     const user = results && results.length > 0 ? results[0] : {};
//     res.render("editUser.ejs", { userEdit: user });
// };

// const updateUser = async (req, res) => {
//   const { userName, passWord, userId } = req.body;
//     // Update user information in the database
//     const [results, fields] = await connection.query(
//       `UPDATE Users SET userName = ?, passWord = ? WHERE id = ?`,
//       [userName, passWord, userId]
//     );

//     console.log("User updated successfully");
//     res.send("Update Successful");
  
// };

// module.exports = {
//   getHomePage,
//   createUser,
//   listUsers,
//   saveUser,
//   editUser,
//   deleteUser,
//   updateUser,
// };
