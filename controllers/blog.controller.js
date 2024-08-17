const express = require("express");
const fs = require("node:fs");
const marked = require("marked");
const router = express.Router();
const { getAllBlogs, getOneBlog, createBlog } = require("../queries/blog");

router.get("/", async (_, res) => {
  try {
    const result = await getAllBlogs();
    if (result.length === 0) {
      throw new Error({ message: `There are no Blogs :( ` });
    }
    result.forEach((element) => {
      delete element.file_path;
      const year = new Date(element.date_uploaded).getUTCFullYear();
      const month = new Date(element.date_uploaded).getUTCMonth() + 1;
      const day = new Date(element.date_uploaded).getUTCDate();
      element.date_uploaded = `${month}/${day}/${year}`;
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message, error: error.error });
  }
});

router.get("/test", async (req, res) => {
  console.log("Here");
  try {
    res.status(200).send("You've hit the Blog route");
  } catch (error) {
    res.status(404).json({ message: error.message, error: error.error });
  }
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await getOneBlog(id);
    if (!result.title) throw new Error("No blogs found");
    let selectFile = await fs.readFileSync(result.file_path, "utf8").toString();
    let formattedFile = marked.parse(selectFile);
    result.content = formattedFile;
    res.status(200).send(formattedFile);
  } catch (error) {
    res.status(500).json({ message: error.message, error: error.error });
  }
});

router.post("/new-blog", async (req, res) => {
  const { title, date_uploaded } = req.body;
  const file_path = `../db/Blogdb/${title.replace(/\s/g, "_")}.md`;
  try {
    const result = await createBlog({ title, date_uploaded, file_path });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message, error: error.error });
  }
});

module.exports = router;
