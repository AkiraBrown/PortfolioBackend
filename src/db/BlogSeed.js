const { stat } = require("node:fs/promises");
const { getAllBlogs, createBlog } = require("../queries/blog.js");
const fs = require("fs");
const getDirectoryFiles = async () => {
  try {
    if (!fs.existsSync("./src/db/Blogdb")) {
      fs.mkdirSync("./src/db/Blogdb");
    }
    const fileArr = await fs.readdirSync("./src/db/Blogdb", {
      withFileType: false,
    });
    return fileArr;
  } catch (error) {
    return error;
  }
};

const getCreationDate = async (fileName) => {
  try {
    const { birthtimeMs } = await stat(`./src/db/Blogdb/${fileName}`);
    return new Date(birthtimeMs);
  } catch (error) {
    return error;
  }
};

const fillSqlDatabase = async () => {
  const files = await getDirectoryFiles();
  for (const file of files) {
    const sqlObj = {
      title: file.replace(/\..*/, ""),
      date_uploaded: await getCreationDate(file),
      file_path: `./src/db/Blogdb/${file}`,
    };
    await createBlog(sqlObj);
  }
  const allBlogs = await getAllBlogs();
  console.log("Done:", allBlogs);
};
fillSqlDatabase();
