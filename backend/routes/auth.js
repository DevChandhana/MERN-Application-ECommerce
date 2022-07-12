const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
// controllers
const { signout, signup, signin, isSignedIn } = require("../controllers/auth");

router.post(
  "/signup",
  body("name").isLength({ min: 3 }).withMessage("invalid name"),
  body("email").isEmail().withMessage("Please enter a valid email address"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Please enter a valid password"),
  signup
);

router.post(
  "/signin",
  body("email").isEmail().withMessage("Please enter a valid email address"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Please field is required")
    .isLength({ min: 1 }),
  signin
);
router.get("/signout", signout);

router.get("/test", isSignedIn, (req, res) => {
  res.send(req.auth);
});
module.exports = router;
