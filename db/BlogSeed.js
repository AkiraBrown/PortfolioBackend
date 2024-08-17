// const { stat } = require("node:fs/promises");
// const { getAllBlogs, createBlog } = require("../queries/blog");
// const fs = require("fs");
// const getDirectoryFiles = async () => {
//   try {
//     if (!fs.existsSync("./db/Blogdb")) {
//       fs.mkdirSync("./db/Blogdb");
//     }
//     const fileArr = await fs.readdirSync("./db/Blogdb", {
//       withFileType: false,
//     });
//     return fileArr;
//   } catch (error) {
//     return error;
//   }
// };

// const getCreationDate = async (fileName) => {
//   try {
//     const { birthtimeMs } = await stat(`./db/Blogdb/${fileName}`);
//     return new Date(birthtimeMs);
//   } catch (error) {
//     return error;
//   }
// };

// const fillSqlDatabase = async () => {
//   const files = await getDirectoryFiles();
//   for (const file of files) {
//     const sqlObj = {
//       title: file.replace(/\..*/, ""),
//       date_uploaded: await getCreationDate(file),
//       file_path: `./db/Blogdb/${file}`,
//     };
//     await createBlog(sqlObj);
//   }
//   const allBlogs = await getAllBlogs();
//   console.log("Done:", allBlogs);
// };
// fillSqlDatabase();

//----Converted to class------/

const { stat } = require("node:fs/promises");
const { getAllBlogs, createBlog } = require("../queries/blog");

class BlogManager {
  constructor() {
    this.dbPath = "./db/Blogdb";
    if (!require("fs").existsSync(this.dbPath)) {
      require("fs").mkdirSync(this.dbPath);
    }
  }

  async getDirectoryFiles() {
    try {
      const fileArr = await require("fs").readdirSync(this.dbPath, {
        withFileType: false,
      });
      return fileArr;
    } catch (error) {
      throw error;
    }
  }

  async getCreationDate(fileName) {
    try {
      const { birthtimeMs } = await stat(`${this.dbPath}/${fileName}`);
      return new Date(birthtimeMs);
    } catch (error) {
      throw error;
    }
  }

  async fillSqlDatabase() {
    const files = await this.getDirectoryFiles();
    //TODO change to array.forEach
    for (const file of files) {
      const sqlObj = {
        title: file.replace(/\..*/, ""),
        date_uploaded: await this.getCreationDate(file),
        file_path: `${this.dbPath}/${file}`,
      };
      await createBlog(sqlObj);
    }
    const allBlogs = await getAllBlogs();
    console.log("Done:", allBlogs);
    let sqlFileContent = `INSERT INTO blogs(title, date_uploaded,file_path) VALUES`;
    const blogArr = allBlogs.map(({ title, date_uploaded, file_path }) => {
      const year = new Date(date_uploaded).getUTCFullYear();
      const month = new Date(date_uploaded).getUTCMonth() + 1;
      const day = new Date(date_uploaded).getUTCDate();
      date_uploaded = `${month}/${day}/${year}`;
      return `('${title}','${date_uploaded.toString()}','${file_path}')`;
    });
    sqlFileContent += blogArr.join(", ");
    console.log(sqlFileContent);
    sqlFileContent += ";";
    require("fs").writeFileSync("./db/blogData.sql", sqlFileContent);
  }

  async run() {
    try {
      await this.fillSqlDatabase();
    } catch (error) {
      throw error;
    }
  }
}

const blogManager = new BlogManager();
blogManager.run().catch((error) => console.error(error));
