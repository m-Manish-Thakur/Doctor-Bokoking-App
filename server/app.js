const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { MongoDB } = require("./constants");
const cors = require("cors");

// Routes
const userRoute = require("./Routes/User");
const adminRoute = require("./Routes/Admin");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.json("Welcome to Doctor Appointment App");
});

app.use("/api/user", userRoute);
app.use("api/admin", adminRoute);

// Ports and Database Connect

app.listen(8000, () => {
  console.log("Server Started");
  mongoose
    .connect(MongoDB)
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.log(err);
    });
});
