const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
// bringing models
const User = require("../models/user");
exports.signout = (req, res) => {
  res.send("user signedout");
};

exports.signup = (req, res) => {
  const errors = validationResult(req, res);
  if (!errors.isEmpty()) {
    return res.status(422).json({ error: errors.array()[0].msg });
  }
  const user = new User(req.body);
  // to save into db
  user.save((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        err: "NOT able to save user into database",
      });
    }
    res.json({
      name: user.name,
      email: user.email,
      id: user._id,
    });
  });
};

exports.signin = (req, res) => {
  const { email, password } = req.body;
  // validation check
  const errors = validationResult(req, res);
  if (!errors.isEmpty()) {
    return res.status(422).json({ error: errors.array()[0].msg });
  }
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res
        .status(400)
        .json({ error: "This email doesn't exist in our database" });
    }
    if (!user.authenticate(password)) {
      return res
        .status(401)
        .json({ error: "Email and Password do not match!" });
    }
    // creating a token
    const authToken = jwt.sign({ _id: user._id }, process.env.SECRET);
    // keeping token in cookie
    res.cookie("token", authToken, { expire: new Date() + 9999 });
    // sending response to frontend
    const { _id, name, email, role } = user;
    return res.json({ authToken, user: { _id, name, email, role } });
  });
};