const [getAllGoals] = require("../controllers/goalController");
const express = require("express");
const goalRouter = express.Router();

goalRouter.get("/", getAllGoals);

module.exports = goalRouter;