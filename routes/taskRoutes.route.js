const express = require("express");
const {
  protect,
  adminOnly,
} = require("../middlewares/authMiddleware.middleware");
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  updateTaskCheckList,
  updateTaskStatus,
  deleteTask,
  getAdminDashboardData,
  getDashboardData,
} = require("../controllers/taskController.controller");

const router = express.Router();

router.post("/create", protect, adminOnly, createTask); //  Create new task (Admin only)
router.get("/", protect, getTasks); // Get all tasks
router.get("/:id", protect, getTaskById); // Get a specific task by id
router.put("/update/:id", protect, updateTask); // Update existing task
router.put("/update/:id/todo", protect, updateTaskCheckList); // Update task check list
router.put("/update/:id/status", protect, updateTaskStatus); // Update specific task status
router.delete("/delete/:id", protect, adminOnly, deleteTask); // Delete specific task (Admin only)
router.get("/admin/dashboard-data", protect, getAdminDashboardData); // Get admin dashboard data
router.get("/user/dashboard-data", protect, getDashboardData); // Get user dashboard data

module.exports = router;
