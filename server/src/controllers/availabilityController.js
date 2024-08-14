const Availability = require("../models/Availability");

// Create a new user
const createAvailability = async (req, res) => {
  try {
    const { days, date, provider, startTime, endTime } = req.body;
    const newAvailability = new Availability({
      days,
      date,
      provider,
      startTime,
      endTime,
    });
    await newAvailability.save();
    res.status(201).json(newAvailability);
  } catch (error) {
    res.status(500).json({ message: "Error creating availability", error });
  }
};

// // Get all users
const getAvailability = async (req, res) => {
  try {
    const availability = await Availability.find().populate('provider');
    res.status(200).json(availability);
  } catch (error) {
    res.status(500).json({ message: "Error fetching availability", error });
  }
};

// // Get a single user by ID
// const getUserById = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching user", error });
//   }
// };

// // Update a user by ID
// const updateUser = async (req, res) => {
//   try {
//     const user = await User.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).json({ message: "Error updating user", error });
//   }
// };

// // Delete a user by ID
// const deleteUser = async (req, res) => {
//   try {
//     const user = await User.findByIdAndDelete(req.params.id);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     res.status(200).json({ message: "User deleted" });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting user", error });
//   }
// };

module.exports = {
  createAvailability,
  getAvailability,
  // getUserById,
  // updateUser,
  // deleteUser,
};
