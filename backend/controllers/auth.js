exports.signout = (req, res) => {
  res.send("user signedout");
};

exports.signup = (req, res) => {
  console.log("REQ BODY", req.body);
  res.send("signup success");
};