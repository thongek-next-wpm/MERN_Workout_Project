//import usermodel functions
const User = require("../models/userModel");

// signin user controller
const signinUser = (req, res) => {
  res.json({ message: "signin" });
};

// signup user controller
const signupUser = (req, res) => {
  res.json({ message: "signup" });
};

module.exports = { signinUser, signupUser };
