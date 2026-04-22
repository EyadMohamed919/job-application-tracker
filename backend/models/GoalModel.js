const mongoose = require('mongoose');

const goalSchemema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    deadline: { type: Date, required: true },
    status: { type: String, enum: ['Pending', 'In Progress', 'Completed'], default: 'Pending' }
});

const Goal = mongoose.model('Goal', goalSchemema);

module.exports = Goal;