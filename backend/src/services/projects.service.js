const fs = require("fs");
const path = require("path");

function getProjects() {
  const filePath = path.join(__dirname, "../data/projects.json");

  const data = fs.readFileSync(filePath, "utf8");

  return JSON.parse(data);
}

module.exports = {
  getProjects,
};
