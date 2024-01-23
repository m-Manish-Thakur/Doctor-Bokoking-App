const express = require("express");
const router = express.Router();
const User = require("../Models/User.Model");
const Doctor = require("../Models/Doctor.Model");
const { Router } = require("express");

router.post("/approveDoctorApplication/:userId", async (req, res) => {
  const userId = req.params.userId;
});

module.exports = router;
