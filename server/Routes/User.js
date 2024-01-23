const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../Models/User.Model");
const Doctor = require("../Models/Doctor.Model");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { jwtSecretKey } = require("../constants");

router.use(express.json());
router.use(cookieParser());

router.post("/signup", async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists. Please Login", success: false });
    }

    // Encrypt the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = await User.create({
      firstname,
      lastname,
      email: email.toLowerCase(), // Ensure email is lowercase for consistency
      password: hashedPassword,
    });

    return res.status(200).json({ message: "User created successfully", success: true });
  } catch (error) {
    console.log("Error creating user:", error);
    return res.status(500).json({ message: "Error creating user", success: false, error });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(200).json({ message: "User doesn't exist. Please Register", success: false });
    }
    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(200).json({ message: "Password or Email is incorrect", success: false });
    }
    const token = jwt.sign({ id: user._id }, jwtSecretKey, {
      expiresIn: "1d",
    });
    console.log(user);
    res.status(200).json({ message: "Login Successful", success: true, user, token: token });
  } catch (error) {
    return res.status(500).json({ message: "Error creating user", success: false, error });
  }
});

router.post("/apply-for-doctor", async (req, res) => {
  try {
    const newDoctor = await Doctor.create(req.body);
    const userAdmin = await User.findOne({ role: "Admin" });
    const unseenNotifications = userAdmin.unseenNotifications;
    console.log(unseenNotifications);
    unseenNotifications.push({
      type: "New Doctor Apply",
      message: `${newDoctor.firstname} has applied for a doctor account`,
      data: {
        doctorId: newDoctor._id,
        name: `${newDoctor.firstname} ${newDoctor.lastname}`,
      },
      onClickPath: "/admin/doctors",
    });
    await User.findByIdAndUpdate(userAdmin._id, { unseenNotifications });
    res.status(200).json({ message: "Apply Successful", success: true, newDoctor, userAdmin });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error applying for a doctor account", success: false, error });
  }
});

module.exports = router;
