import express, { Request, Response } from "express";
const router = express.Router();
const { getAllProjects } = require("../queries/project");

router.get("/", async (_: Request, res: Response) => {
  try {
    const result = await getAllProjects();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
