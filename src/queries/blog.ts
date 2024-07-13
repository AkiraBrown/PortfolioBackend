const blogDB = require("../db/dbConfig");
const getAllBlogs = async () => {
  try {
    const allBlogs: [] = await blogDB.any(`SELECT * FROM blogs`);
    return allBlogs;
  } catch (error) {
    return error;
  }
};
const getOneBlog = async (id: string) => {
  try {
    const selectBlog: {} = await blogDB.one(`SELECT * FROM blogs WHERE id=$1`, [
      id,
    ]);
    return selectBlog;
  } catch (error) {
    return error;
  }
};
const updateBlog = async ({ id, description }) => {
  try {
    const updatedBlog = await blogDB.one(
      "UPDATE blogs SET description=$1 WHERE id=$@ RETURNING *",
      [description, id]
    );
    return updatedBlog;
  } catch (error) {
    return error;
  }
};
const createBlog = async ({ title, description, date_uploaded, file_path }) => {
  try {
    const newBlog = await blogDB.one(
      "INSERT INTO blogs(title, description, date_uploaded, file_path) VALUES($1,$2,$3,$4) RETURNING *",
      [title, description, date_uploaded, file_path]
    );
    return newBlog;
  } catch (error) {
    return error;
  }
};
const deleteBlog = async (id: string) => {
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
