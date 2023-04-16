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
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});
// --------------
//? Home Page
app.get("/", function (req, res) {
  res.send("🤷‍♂️Welcome to the Mentor and Student Assigning DB API.");
});
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
