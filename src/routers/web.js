const express = require("express");
const router = express.Router();
const { getHomePage, getExample } = require("../controllers/homeControllers"); // import file controllers

router.get("/test", getHomePage);
router.get("/example", getExample);

module.exports = router;
