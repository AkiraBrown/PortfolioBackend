const blogDB = require("../db/dbConfig.ts");
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
  console.log(title, date_uploaded, file_path);
  debugger;
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

//---------------//

// import { IDatabase, IMain } from "pg-promise";
// const blogDB: IDatabase<any> & IMain = require("../db/dbConfig");

// interface Blog {
//   id?: number;
//   title: string;
//   date_uploaded?: string;
//   file_path?: string;
// }

// const getAllBlogs = async (): Promise<Blog[]> => {
//   try {
//     const allBlogs = await blogDB.any<Blog>(`SELECT * FROM blogs`);
//     return allBlogs;
//   } catch (error) {
//     throw error;
//   }
// };

// const getOneBlog = async (id: number): Promise<Blog> => {
//   try {
//     const selectBlog = await blogDB.one<Blog>(
//       `SELECT * FROM blogs WHERE id=$1`,
//       [id]
//     );
//     return selectBlog;
//   } catch (error) {
//     throw error;
//   }
// };

// const updateBlog = async ({
//   id,
//   title,
// }: {
//   id: number;
//   title: string;
// }): Promise<Blog> => {
//   try {
//     const updatedBlog = await blogDB.one<Blog>(
//       "UPDATE blogs SET title=$1 WHERE id=$2 RETURNING *",
//       [title, id]
//     );
//     return updatedBlog;
//   } catch (error) {
//     throw error;
//   }
// };

// const createBlog = async ({
//   title,
//   date_uploaded,
//   file_path,
// }: Blog): Promise<Blog> => {
//   try {
//     const newBlog = await blogDB.one<Blog>(
//       "INSERT INTO blogs(title, date_uploaded, file_path) VALUES($1,$2,$3) RETURNING *",
//       [title, date_uploaded, file_path]
//     );
//     return newBlog;
//   } catch (error) {
//     throw error;
//   }
// };

// const deleteBlog = async (id: number): Promise<Blog> => {
//   try {
//     const deletedBlog = await blogDB.one<Blog>(
//       "DELETE FROM blogs WHERE id=$1 RETURNING *",
//       [id]
//     );
//     return deletedBlog;
//   } catch (error) {
//     throw error;
//   }
// };

// export { getAllBlogs, getOneBlog, updateBlog, createBlog, deleteBlog };
