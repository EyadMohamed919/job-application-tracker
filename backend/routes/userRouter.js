const { getAllUsers, createUser, login } = require("../controllers/userController");
const express = require("express");
const userRouter = express.Router();

userRouter.get("", getAllUsers);
userRouter.post("/create", createUser);
userRouter.post("/login", login);

module.exports = userRouter;