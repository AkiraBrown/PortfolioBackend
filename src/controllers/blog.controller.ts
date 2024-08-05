import express, { Request, Response } from "express";
const fs = require("node:fs");
const marked = require("marked");
const router = express.Router();
const {
  getAllBlogs,
  getOneBlog,
  updateBlog,
  createBlog,
  deleteBlog,
} = require("../queries/blog");

router.get("/", async (_: Request, res: Response) => {
  try {
    const result = await getAllBlogs();
    result.forEach((element) => {
      delete element.file_path;
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
router.get("/custom-test/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await getOneBlog(id);
    console.log(result);
    let selectFile = await fs.readFileSync(result.file_path, "utf8").toString();
    let formattedFile = marked.parse(selectFile);
    result.content = formattedFile;
    res.send(formattedFile);
    // res.render("index", { title: result.title, content: formattedFile });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await getOneBlog(id);
    let selectFile = await fs.readFileSync(result.file_path, "utf8");
    result.fileData = selectFile.toString();
    delete result.file_path;
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
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
