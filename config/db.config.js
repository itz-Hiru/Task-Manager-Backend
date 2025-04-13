const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {});
    console.log("MongoDB connected to the server.");
  } catch (e) {
    console.error("Error while connecting MongoDB", e);
    process.exit(404);
  }
};

module.exports = connectDB;
