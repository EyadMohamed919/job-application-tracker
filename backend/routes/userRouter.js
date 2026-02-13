const { getAllUsers, createUser, login, LoginWithToken } = require("../controllers/userController");
const express = require("express");
const userRouter = express.Router();

userRouter.get("", getAllUsers);
userRouter.post("/create", createUser);
userRouter.post("/login", login);
userRouter.post("/login/token", LoginWithToken);

module.exports = userRouter;