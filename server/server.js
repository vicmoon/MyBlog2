const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

app.get("/api", (req, res) => {
  console.log("API request received");
  res.json({ users: ["userOne", "userTwo", "userThree"] });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

//mongodb+srv://Admin_Victoria:<lJwV8fJpjGMSMRg2>@clusterx.govu4la.mongodb.net/?retryWrites=true&w=majority&appName=ClusterX
