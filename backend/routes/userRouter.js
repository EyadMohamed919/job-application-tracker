const { getAllUsers, createUser } = require("../controllers/userController");
const express = require("express");
const userRouter = express.Router();

userRouter.get("", getAllUsers);
userRouter.post("/create", createUser);

module.exports = userRouter;