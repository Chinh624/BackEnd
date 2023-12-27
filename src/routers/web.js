const express = require("express");
const router = express.Router();
const { getHomePage, getExample,createUser} = require("../controllers/homeControllers"); // import file controllers

router.get("/home", getHomePage);
router.get("/example", getExample);
router.post("/create-user",createUser)



module.exports = router;
