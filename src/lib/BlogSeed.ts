const { readdir, stat } = require("node:fs/promises");

// const { getAllBlogs } = require("../queries/blog.ts");
// const db = require("../db/dbConfig.ts");
const getDirFile = async () => {
  try {
    const fileArr = await readdir("../db/Blogdb", { withFileType: false });
    return fileArr;
  } catch (error) {
    return error;
  }
};

const getCreationDate = async (fileName) => {
  try {
    const { birthtimeMs } = await stat(`../db/Blogdb/${fileName}`);
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
      file_path: `../db/Blogdb/${files[i]}`,
    };
    files[i] = sqlObj;
  }
  console.log(files);
};
fillSqlDatabase();
// module.exports = {
//   fillSqlDatabase,
// };
