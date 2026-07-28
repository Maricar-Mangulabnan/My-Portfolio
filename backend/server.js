const express = require("express");
const cors = require("cors");
require("dotenv").config();

const projectsRoutes = require("./src/routes/projects.routes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/projects", projectsRoutes);

app.get("/", (req, res) => {
  res.send("Portfolio API is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
