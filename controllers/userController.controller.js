const bcrypt = require("bcryptjs");
const Task = require("../models/Task.model");
const User = require("../models/User.model");

// Get all users ( GET -> /api/users/ ) Private router (Admin only)
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({ role: "member"}).select("-password");
        
        // get task counts of each user
        const usersWithTaskCount = await Promise.all(users.map(async (user) => {
            const pendingTasks = await Task.countDocuments({
                assignedTo: user._id,
                status: "Pending",
            });
            const isProgressTasks = await Task.countDocuments({
                assignedTo: user._id,
                status: "In progress",
            });
            const completedTasks = await Task.countDocuments({
                assignedTo: user._id,
                status: "Completed",
            });

            return {
                ...user._doc, // Include all existing user data
                pendingTasks,
                isProgressTasks,
                completedTasks,
            };
        }));

        res.json(usersWithTaskCount);
    } catch (e) {
        res.status(500).json({ message: "Server error", error: e.message });
    }
}

// Get a specific users ( GET -> /api/users/:id )
const getUserById = async (req, res) => {
    try {

    } catch (e) {
        res.status(500).json({ message: "Server error", error: e.message });
    }
}

// Deleted a specific user ( DELETE -> /api/users/delete/:id )
const deleteUser = async (req, res) => {
    try {

    } catch (e) {
        res.status(500).json({ message: "Server error", error: e.message });
    }
}

module.exports = { getAllUsers, getUserById, deleteUser }
