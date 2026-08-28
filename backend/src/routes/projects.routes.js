const express = require("express");
const router = express.Router();

const projectsController = require("../controllers/projects.controller");

// GET /api/projects
router.get("/", projectsController.getProjects);

// GET /api/projects/:id
router.get("/:id", projectsController.getProjectById);

module.exports = router;
