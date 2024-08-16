const db = require("../db/dbConfig");
const getAllProjects = async () => {
  try {
    const allProjects = await db.any(`SELECT * FROM projects`);
    return allProjects;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllProjects };
