const { getAllUsers } = require("../controllers/userController");
const express = require("express");
const userRouter = express.Router();

userRouter.get("", getAllUsers);