const fs = require("fs");
const path = require("path");

function getProjects() {
  const filePath = path.join(__dirname, "../data/projects.json");

  const data = fs.readFileSync(filePath, "utf8");

  return JSON.parse(data);
}
function getProjectById(id) {
  const projects = getProjects();
  return projects.find((project) => project.id === Number(id));
}
module.exports = {
  getProjects,
  getProjectById,
};
