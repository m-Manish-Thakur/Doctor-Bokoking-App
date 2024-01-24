const express = require("express");
const router = express.Router();
const User = require("../Models/User.Model");

router.post("/mark-as-read-notifications/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Move unseenNotifications to seenNotifications
    user.seenNotifications = user.seenNotifications.concat(user.unseenNotifications);
    user.unseenNotifications = [];

    // Update the user document
    await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          seenNotifications: user.seenNotifications,
          unseenNotifications: user.unseenNotifications,
        },
      },
      { new: true }
    );

    return res.status(200).json({ message: "Notifications marked as read successfully", success: true, user: user });
  } catch (error) {
    console.error("Error marking notifications as read:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/delete-notifications/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found", success: false });
    }
    // Delete seenNotifications
    user.seenNotifications = [];

    // Save the updated user document
    await user.save();

    return res.status(200).json({ message: "Notifications deleted successfully", success: true, user: user });
  } catch (error) {
    console.error("Error deleting notifications", error);
    return res.status(500).json({ message: "Internal Server Error", success: false });
  }
});
module.exports = router;
