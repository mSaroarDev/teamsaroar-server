const express = require("express");
const router = express.Router();
const checkAuth = require("../middlwares/checkAuth");
const checkNew = require("../middlwares/createBoilerPlate");

const {
  getInfo,
  updateAbout,
  updateFiles,
  updateSocial,
  updateStatistics,
  updateTestimonials,
  updateSkills,
  updateProjects,
} = require("../controllers/info");

// api's
router.get("/get", getInfo);
router.post("/update/about", checkAuth, checkNew, updateAbout);
router.post("/update/files", checkAuth, checkNew, updateFiles);
router.post("/update/social", checkAuth, checkNew, updateSocial);
router.post("/update/statistics", checkAuth, checkNew, updateStatistics);
router.post("/update/testimonials", checkAuth, checkNew, updateTestimonials);
router.post("/update/skills", checkAuth, checkNew, updateSkills);
router.post("/update/projects", checkAuth, checkNew, updateProjects);

module.exports = router;
