const express = require("express");
const router = express.Router();

router.get("/", async (_, res) => {
  try {
    let result = await fetch("https://api.github.com/users/akirabrown/repos");
    result = await result.json();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
router.get("/:repo_name", async (req, res) => {
  const { repo_name } = req.params;
  try {
    let result = await fetch(
      `https://api.github.com/repos/akirabrown/${repo_name}`
    );
    result = await result.json();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
