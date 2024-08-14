const mongoose = require("mongoose");

const AvailabilitySchema = new mongoose.Schema({
  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  days: {
    type: [Number],
    enum: [0, 1, 2, 3, 4, 5, 6],
    default: [1, 2, 3, 4, 5],
  },
  date: {
    type: Date,
    default: null,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
});

const Availability = mongoose.model("Availability", AvailabilitySchema);

module.exports = Availability;
