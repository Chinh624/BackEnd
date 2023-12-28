const express = require("express");
const router = express.Router();
const {
  getHomePage,
  createUser,
  listUsers,
  saveUser,
  editUser,
  deleteUser,
} = require("../controllers/homeControllers"); // import file controllers

router.get("/home", getHomePage);
router.get("/create-user", createUser);
router.get("/list-user", listUsers);
router.post("/create", saveUser);
router.get("/editUser/:id", editUser);
router.get("/deleteUser", deleteUser);

module.exports = router;
