const blogDB = require("../db/dbConfig.js");
const getAllBlogs = async () => {
  try {
    const allBlogs = await blogDB.any(`SELECT * FROM blogs`);
    return allBlogs;
  } catch (error) {
    return error;
  }
};
const getOneBlog = async (id) => {
  try {
    const selectBlog = await blogDB.one(`SELECT * FROM blogs WHERE id=$1`, [
      id,
    ]);
    return selectBlog;
  } catch (error) {
    return error;
  }
};
const updateBlog = async ({ id, title }) => {
  try {
    const updatedBlog = await blogDB.one(
      "UPDATE blogs SET title=$1 WHERE id=$2 RETURNING *",
      [title, id]
    );
    return updatedBlog;
  } catch (error) {
    return error;
  }
};
const createBlog = async ({ title, date_uploaded, file_path }) => {
  try {
    const newBlog = await blogDB.one(
      "INSERT INTO blogs(title, date_uploaded, file_path) VALUES($1,$2,$3) RETURNING *",
      [title, date_uploaded, file_path]
    );
    return newBlog;
  } catch (error) {
    return error;
  }
};
const deleteBlog = async (id) => {
  try {
    const deletedBlog = await blogDB.one(
      "DELETE FROM blogs WHERE id=$1 RETURNING *",
      [id]
    );
    return deletedBlog;
  } catch (error) {
    return error;
  }
};
module.exports = {
  getAllBlogs,
  getOneBlog,
  updateBlog,
  createBlog,
  deleteBlog,
};
