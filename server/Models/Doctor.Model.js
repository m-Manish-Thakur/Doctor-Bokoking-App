const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
});
