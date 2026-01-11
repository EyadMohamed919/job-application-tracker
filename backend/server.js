const express = require("express");
const jobRouter = require("./routes/JobRouter");
const connectDB = require("./config/MongoConfig");
const cors = require('cors');
const userRouter = require("./routes/userRouter");
const PORT = 5000;
const app = express();



connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routers
app.use("/api/job", jobRouter);
app.use("/api/user", userRouter);
app.listen(PORT, console.log(`Server is running on port ${PORT}`));