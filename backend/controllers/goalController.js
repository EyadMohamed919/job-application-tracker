const Goal = require('../models/GoalModel');

const getAllGoals = async (req, res)=> {
    
    try 
    {
        const goals = await Goal.find();
        console.log("Fetched Goals successfully");
        res.status(200).json(goals);
    } catch (error) {
        console.log("Failed job fetching: " + error);
    }
}

module.exports = [getAllGoals];

