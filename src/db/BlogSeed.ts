const { readdir, stat } = require("node:fs/promises");

const { getAllBlogs, createBlog } = require("../queries/blog.ts");
const fs = require("fs");
const getDirFile = async () => {
  try {
    if (!fs.existsSync("./src/db/Blogdb")) {
      fs.mkdirSync("./src/db/Blogdb");
      console.log("made Dir");
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
  let files = await getDirFile();
  for (let i = 0; i < files.length; i++) {
    const sqlObj = {
      title: files[i].replace(/\..*/, ""),
      date_uploaded: await getCreationDate(files[i]),
      file_path: `./src/db/Blogdb/${files[i]}`,
    };
    files[i] = sqlObj;
  }

  for (const file of files) {
    await createBlog(file);
  }
  const allBlogs = await getAllBlogs();
  console.log("Done:", allBlogs);
};
fillSqlDatabase();
