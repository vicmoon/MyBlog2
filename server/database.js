const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://Admin_Victoria:lJwV8fJpjGMSMRg2@clusterx.govu4la.mongodb.net/blogDB"
    );
    console.log("Database connected");
  } catch (error) {
    console.log("Ooops, there is a problem with the database" + error);
  }
};

module.exports = connectDB;
