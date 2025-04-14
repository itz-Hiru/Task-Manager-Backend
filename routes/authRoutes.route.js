const express = require("express");
const {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
} = require("../controllers/authController.controller");
const { protect } = require("../middlewares/authMiddleware.middleware");
const upload = require("../middlewares/uploadMiddleware.middleware");

const router = express.Router();

// Authentication routes
router.post("/register", registerUser); // Signup user
router.post("/login", loginUser); // Login user
router.get("/profile", protect, getUserProfile); // Get user profile details
router.put("/profile/update", protect, updateUserProfile); // Update user profile

router.post("/upload-image", upload.single("image"), (req, res) => {
  // Upload profile image
  if (!req.file) {
    return res.status(401).json({ message: "No image uploaded" });
  }

  const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${
    req.file.filename
  }`;

  res.status(200).json({ imageUrl });
});

module.exports = router;
