const multer = require("multer");
const fs = require("fs");
const path = require("path");

// Ensure 'uploads/' directory exists
const uploadDir = path.join(__dirname, "../uploads/");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, ext);
    cb(null, `${Date.now()}-${baseName}${ext}`);
  },
});

// File filtering
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only jpeg, jpg, png file formats are supported."), false);
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
