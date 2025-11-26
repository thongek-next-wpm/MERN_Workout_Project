const expess = require("express");

//import userController functions
const { signinUser, signupUser } = require("../controllers/userController");

const userRouter = expess.Router();

// signin
userRouter.post("/login", signinUser);

// signup
userRouter.post("/signup", signupUser);

module.exports = userRouter;
