const db = require("../db/dbConfig");
const getAllPings = async () => {
  try {
    const allPings = await db.any(`SELECT * FROM ping`);
    return allPings;
  } catch (error) {
    return error;
  }
};

const updatePing = async ({}) => {
  try {
    const updatedPing = await db.one(
      "UPDATE ping SET last_ping=$1 WHERE id=$2 RETURNING *",
      [last_ping, id]
    );
    return updatedPing;
  } catch (error) {
    return error;
  }
};

module.exports = {
  updatePing,
  getAllPings,
};
