const blogDB = require("../db/dbConfig");
const getAllBlogs = async () => {
  try {
    const allBlogs: [] = await blogDB.any(`SELECT * FROM blogs`);
    return allBlogs;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllBlogs };
