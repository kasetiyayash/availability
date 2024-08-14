const express = require("express");
const connectDB = require("./config/db");
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to database
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

// Import routes
const userRouter = require("./routes/users");
const availabilityRouter = require("./routes/availability");

app.use("/users", userRouter);
app.use("/availability", availabilityRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
