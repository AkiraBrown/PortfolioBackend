const db = require("../db/dbConfig");
const getAllBlogs = async () => {
  try {
    const allBlogs = await db.any(`SELECT * FROM blogs`);
    return allBlogs;
  } catch (error) {
    return error;
  }
};
const getOneBlog = async (id) => {
  try {
    const selectBlog = await db.one(`SELECT * FROM blogs WHERE id=$1`, [id]);
    return selectBlog;
  } catch (error) {
    return error;
  }
};
const updateBlog = async ({ id, title }) => {
  try {
    const updatedBlog = await db.one(
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
    const newBlog = await db.one(
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
    const deletedBlog = await db.one(
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
