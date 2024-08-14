const express = require("express");
const router = express.Router();
const {
  createAvailability,
  getAvailability,
} = require("../controllers/availabilityController");

// Define routes
router.post("/", createAvailability);
router.get("/", getAvailability);
// router.get("/:id", getUserById);
// router.put("/:id", updateUser);
// router.delete("/:id", deleteUser);

module.exports = router;
