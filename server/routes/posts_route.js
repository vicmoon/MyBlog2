const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  //   try {
  //     const posts = await Post.find().sort({ createdAt: -1 });
  //     console.log("Posts fetched from DB:", posts); // Log the fetched posts
  //     res.json(posts);
  //   } catch (err) {
  //     console.log("Error fetching posts:", err);
  //     res.status(500).json({ message: "Server Error" });
  //   }

  console.log("Get request in Posts ");
  res.json({ message: "It works" });
});

module.exports = router;
