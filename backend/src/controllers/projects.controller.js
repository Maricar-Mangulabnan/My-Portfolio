const projectService = require("../services/projects.service");

function getProjects(req, res) {
  const projects = projectService.getProjects();

  res.json(projects);
}

module.exports = {
  getProjects,
};
