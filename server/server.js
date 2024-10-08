const express = require("express");
const connectDB = require("./database");
const Post = require("./models/Post");
const bodyParser = require("body-parser");
const postRoutes = require("./routes/posts_route");
const app = express();
const cors = require("cors");

connectDB();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(cors());

app.use(postRoutes);

//list posts
// app.get("/", async (req, res) => {
//   try {
//     const posts = await Post.find().sort({ createdAt: -1 });
//     console.log("Posts fetched from DB:", posts); // Log the fetched posts
//     res.json(posts);
//   } catch (err) {
//     console.log("Error fetching posts:", err);
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// create a new post

app.post("/compose", (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    imageURL: req.body.url,
  });

  post.save((err) => {
    if (!err) {
      res.redirect("/");
      console.log("saving the post returned an error:" + err);
    } else {
      console.log("saving the post returned an error:" + err);
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

//supabase
// curl 'https://neyglygzxmppevxvqdst.supabase.co/rest/v1/posts' \
// -H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5leWdseWd6eG1wcGV2eHZxZHN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ4NDE0MTYsImV4cCI6MjA0MDQxNzQxNn0.HmsFM3be1G3vxYDjtqxySBS7thWb_M316fQzIbsnMAY" \
// -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5leWdseWd6eG1wcGV2eHZxZHN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ4NDE0MTYsImV4cCI6MjA0MDQxNzQxNn0.HmsFM3be1G3vxYDjtqxySBS7thWb_M316fQzIbsnMAY"
