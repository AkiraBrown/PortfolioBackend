import express, { Request, Response } from "express";
const router = express.Router();

router.get("/", async (_: Request, res: Response) => {
  try {
    res.status(200).json({ message: "Hello" });
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
