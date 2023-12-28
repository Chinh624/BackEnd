const connection = require("../config/database");
const {getAllUsers} = require("../service/CRUDservice");

const getHomePage = (req, res) => {
  res.render("home.ejs");
};

const createUser = (req, res) => {
  res.render("createUser.ejs");
};

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


const listUsers = async (req, res) => {
  let results = await getAllUsers();
  res.render("tableUser.ejs",{list: results});
};

const editUser = async (req,res) =>{
  const userID = req.params.id;
  console.log(req.params)
  res.render("editUser.ejs",)
}

const deleteUser = async(req,res) =>{
  let results = await getAllUsers();

  res.render("deleteUser.ejs",{list: results})
}
module.exports = {
  getHomePage,
  createUser,
  listUsers,
  saveUser,
  editUser,
  deleteUser
};
