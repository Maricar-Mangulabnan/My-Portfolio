const projectsService = require("../services/projects.service");

function getProjects(req, res) {
  try {
    const projects = projectsService.getProjects();
    res.status(200).json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error.message);
    res.status(500).json({ message: "Failed to fetch projects" });
  }
}

function getProjectById(req, res) {
  try {
    const project = projectsService.getProjectById(req.params.id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json(project);
  } catch (error) {
    console.error("Error fetching project:", error.message);
    res.status(500).json({ message: "Failed to fetch project" });
  }
}

module.exports = {
  getProjects,
  getProjectById,
};
