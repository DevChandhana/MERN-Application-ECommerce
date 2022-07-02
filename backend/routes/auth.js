const express = require("express");
const router = express.Router();
// controllers
const { signout } = require("../controllers/auth");
router.get("/signout", signout);

module.exports = router;
