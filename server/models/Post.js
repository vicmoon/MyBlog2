const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    imageURL: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("PostModel", PostSchema);
