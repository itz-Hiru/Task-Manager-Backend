const express = require("express");
const {
  protect,
  adminOnly,
} = require("../middlewares/authMiddleware.middleware");
const {
  getAllUsers,
  getUserById,
  deleteUser,
} = require("../controllers/userController.controller");

const router = express.Router();

router.get("/", protect, adminOnly, getAllUsers); // Get all users (Admin only)
router.get("/:id", protect, getUserById); // Get a specific user
router.delete("/delete/:id", protect, adminOnly, deleteUser); // Delete a specific user (Admin only)

module.exports = router;
