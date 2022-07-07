// bringing models
const User = require("../models/user");
exports.signout = (req, res) => {
  res.send("user signedout");
};

exports.signup = (req, res) => {
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
