//import usermodel functions
const User = require("../models/userModel");

// signin user controller
const signinUser = (req, res) => {
  res.json({ message: "signin" });
};

// signup user controller
const signupUser = (req, res) => {
  const { email, password } = req.body;
  try {
    const user = User.signup(email, password);
    res.status(200).json(email, password, user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signinUser, signupUser };
