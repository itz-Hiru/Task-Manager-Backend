const express = require("express");
const {
  protect,
  adminOnly,
} = require("../middlewares/authMiddleware.middleware");
const {
  exportTaskReport,
  exportUsersReport,
} = require("../controllers/reportController.controller");

const router = express.Router();

router.get("/export/tasks", protect, adminOnly, exportTaskReport); // Export all tasks as Excel
router.get("/export/users", protect, adminOnly, exportUsersReport); // Export all user-tasks report

module.exports = router;
