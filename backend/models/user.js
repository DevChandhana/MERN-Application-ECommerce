const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxLength: 32,
  },
  lastname: {
    type: String,
    trim: true,
    maxLength: 32,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  userinfo: {
    type: String,
    trim: true,
  },
  // TODO: password
  password: {
    type: String,
    // required: true,
    trim: true,
  },
  // for hashing passwords
  salt: String,
  role: {
    type: Number,
    default: 0,
  },
  purchases: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("User", userSchema);
