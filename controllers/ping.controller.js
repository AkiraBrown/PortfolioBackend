const express = require("express");
const router = express.Router();
const { getAllPings, updatePing } = require("../queries/ping");

router.get("/", async (_, res) => {
  try {
    const result = await getAllPings();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
