const express = require("express");
const { registerUser, loginUser, getUserProfile, updateUserProfile } = require("../controllers/authController.controller");
const { protect } = require("../middlewares/authMiddleware.middleware");

const router = express.Router();

// Authentication routes
router.post("/register", registerUser);                         // Signup user
router.post("/login", loginUser);                               // Login user
router.get("/profile", protect, getUserProfile);                // Get user profile details
router.put("/profile/update", protect, updateUserProfile);      // Update user profile

module.exports = router;
