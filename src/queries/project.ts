const projectDB = require("../db/dbConfig");
const getAllProjects = async () => {
  try {
    const allProjects: [] = await projectDB.any(`SELECT * FROM projects`);
    return allProjects;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllProjects };
