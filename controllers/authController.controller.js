const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User.model");

// Generate JWT Token
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// Signup new user ( POST -> /api/auth/register )
const registerUser = async (req, res) => {
  try {
    const { name, email, password, profileImageUrl, adminInviteToken } =
      req.body;

    // Check user is already exists
    const existsUser = await User.findOne({ email });
    if (existsUser) {
      return res
        .status(400)
        .json({ message: "User is already exists with the email." });
    }

    // User role: Admin if token is provided else only member
    let role = "member";
    if (
      adminInviteToken &&
      adminInviteToken === process.env.ADMIN_INVITE_TOKEN
    ) {
      role = "admin";
    }

    // Secure password
    const salt = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(password, salt);

    // Signup new user
    const user = await User.create({
      name,
      email,
      password: securePassword,
      profileImageUrl,
      role,
    });

    // Return user data
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      profileImageUrl: user.profileImageUrl,
      token: generateToken(user._id),
    });
  } catch (e) {
    res.status(500).json({ message: "Server error!", error: e.message });
  }
};

// Login existing user ( POST -> /api/auth/login )
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "User not found with the email" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Return user data
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      profileImageUrl: user.profileImageUrl,
      token: generateToken(user._id),
    });
  } catch (e) {
    res.status(500).json({ message: "Server error!", error: e.message });
  }
};

// Get user profile ( GET -> /api/auth/profile ) Private router
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(401).json({ message: "User not found!" });
    }

    res.json(user);
  } catch (e) {
    res.status(500).json({ message: "Server error!", error: e.message });
  }
};

// Update user profile ( PUT -> /api/auth/profile/update ) Private router
const updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(401).json({ message: "User not found!" });
    }

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.password = req.body.password || user.password;

    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(req.body.password, salt);
    }

    const updateUser = await user.save();

    res.json({
      _id: updateUser._id,
      name: updateUser.name,
      email: updateUser.email,
      role: updateUser.role,
      token: generateToken(updateUser._id),
    });
  } catch (e) {
    res.status(500).json({ message: "Server error!", error: e.message });
  }
};

module.exports = { registerUser, loginUser, getUserProfile, updateUserProfile };
