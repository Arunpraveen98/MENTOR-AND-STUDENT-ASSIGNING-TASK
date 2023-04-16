const express = require("express");
const { MongoDbConnection } = require("./DB");
const MentorRouter = require("./Routes/Mentor");
const StudentRouter = require("./Routes/Student");
const dotenv = require("dotenv").config();
const app = express();
const PORT = 8000;
// --------------
//? MongoDB connection
MongoDbConnection();
// --------------
//? Middleware to parse request body as JSON
app.use(express.json());
// --------------
//? Use the mentor and Student routes
app.use("/Mentor", MentorRouter);
app.use("/Student", StudentRouter);
// --------------
//? Start the server
app.listen(PORT, () => {
  console.log(`Server running on PORT - ${PORT}`);
});
// --------------