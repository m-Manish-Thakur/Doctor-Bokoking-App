const express = require("express");
const router = express.Router();
const User = require("../Models/User.Model");
const Doctor = require("../Models/Doctor.Model");

router.post("/approveDoctorApplication/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
    const updatedUser = await User.findByIdAndUpdate({ _id: userId }, { role: "Doctor" }, { new: true });
    const doctor = await Doctor.findOneAndUpdate({ userId: userId }, { status: "Approved" }, { new: true });
    const user = await User.findOne({ _id: userId });

    const unseenNotifications = user.unseenNotifications;
    unseenNotifications.push({
      type: "Doctor Apply",
      message: `Your application for doctor account has been approved`,
      data: {
        doctor: doctor,
        name: `${doctor.firstname} ${doctor.lastname}`,
      },
      onClickPath: "/doctor/profile",
    });
    await User.findByIdAndUpdate(user._id, { unseenNotifications });
    res.status(200).json({ message: "Doctor Approved", success: true, doctor });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error", success: false, error });
  }
});

router.get("/get-all-doctors", async (req, res) => {
  try {
    const doctors = await Doctor.find({});
    res.status(200).json({ success: true, doctors });
  } catch (error) {
    return res.status(500).json({ message: "Error Fetching doctors", success: false, error });
  }
});

module.exports = router;
