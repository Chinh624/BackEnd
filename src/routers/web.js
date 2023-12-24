const express = require("express");
const router = express.Router();
const { getHomePage, getExample } = require("../controllers/homeControllers"); // import file controllers

router.get("/s", getHomePage);
router.get("/test", getExample);

module.exports = router;
