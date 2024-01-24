const express = require("express");
const router = express.Router();
const Doctor = require("../Models/Doctor.Model");

router.get("/get-all-doctors", async (req, res) => {
  try {
    const doctors = await Doctor.find({});
    res.status(200).json({ success: true, doctors });
  } catch (error) {
    return res.status(500).json({ message: "Error in fetching data", success: false, error });
  }
});

module.exports = router;
