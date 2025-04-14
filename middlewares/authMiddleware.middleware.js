const jwt = require("jsonwebtoken");
const User = require("../models/User.model");

// Protect authorization routes Midddleware
const protect = async (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (token && token.startsWith("Bearer ")) {
      token = token.split(" ")[1]; // Extract token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } else {
      res.status(401).json({ message: "Not authorized. No token!" });
    }
  } catch (e) {
    res.status(401).json({ message: "Token failed", error: e.message });
  }
};

// Admin only access Middleware
const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    req.status(403).json({
      message: "Access denied! This feature available for admins only.",
    });
  }
};

module.exports = { protect, adminOnly };
