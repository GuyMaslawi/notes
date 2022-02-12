const mongoose = require("mongoose");
const config = require("./default.json");

const connectDB = () => {
  try {
    mongoose.connect(config.mongo_uri);
    console.log("MongoDB Connected!!");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
