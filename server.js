require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db.config");

const authRoutes = require("./routes/authRoutes.route");
const userRoutes = require("./routes/userRoutes.route");
const taskRoutes = require("./routes/taskRoutes.route");
const reportRoutes = require("./routes/reportRoutes.route");

const app = express();

// Middleware handle cors
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware
app.use(express.json());
0;

// Connect database to servre
connectDB();

// Routes
app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/tasks", taskRoutes);
// app.use("/api/report", reportRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
