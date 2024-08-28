const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.log("Ooops, there is a problem with the database: " + error);
    process.exit(1); // Exit the process if the database connection fails
  }
};

module.exports = connectDB;
