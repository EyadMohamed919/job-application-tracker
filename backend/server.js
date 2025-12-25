const express = require("express");
const jobRouter = require("./routes/JobRouter");
const connectDB = require("./config/MongoConfig");
const cors = require('cors');
const PORT = 5000;
const app = express();



connectDB();
app.use(cors());
app.use(express.json());
app.use("/api/job", jobRouter);
app.listen(PORT, console.log(`Server is running on port ${PORT}`));