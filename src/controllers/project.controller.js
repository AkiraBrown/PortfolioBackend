const express = require("express");
const router = express.Router();
const { getAllProjects } = require("../queries/project");

router.get("/", async (_, res) => {
  try {
    const result = await getAllProjects();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
