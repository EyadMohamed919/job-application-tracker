const { getAllUsers, createUser, login, loginWithToken, logout } = require("../controllers/userController");
const express = require("express");
const userRouter = express.Router();

userRouter.get("", getAllUsers);
userRouter.post("/create", createUser);
userRouter.post("/login", login);
userRouter.get("/logout", logout);
userRouter.post("/login/token", loginWithToken);

module.exports = userRouter;