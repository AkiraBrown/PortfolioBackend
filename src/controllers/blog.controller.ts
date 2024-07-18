import express, { Request, Response } from "express";
const fs = require("fs");
const router = express.Router();
const {
  getAllBlogs,
  getOneBlog,
  updateBlog,
  createBlog,
  deleteBlog,
} = require("../queries/blog");
// const blog_file_path = "../db/Blogdb";
// const { fillSqlDatabase } = require("../lib/BlogSeed.ts");

router.get("/", async (_: Request, res: Response) => {
  try {
    const result = await getAllBlogs();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await getOneBlog(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/new-blog", async (req: Request, res: Response) => {
  const { title, date_uploaded } = req.body;
  const file_path = `../db/Blogdb/${title.replace(/\s/g, "_")}.md`;
  try {
    const result = await createBlog({ title, date_uploaded, file_path });
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
