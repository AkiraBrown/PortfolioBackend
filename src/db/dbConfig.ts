import { error } from "console";

require("dotenv").config();
const pgp = require("pg-promise")();
const { PG_HOST, PG_PORT, PG_DATABASE, PG_USER, PG_PASSWORD } = process.env;
const cn = {
  host: PG_HOST,
  port: PG_PORT,
  database: PG_DATABASE,
  user: PG_USER,
  password: PG_PASSWORD,
  allowExitOnIdle: true,
};

const db = pgp(cn);
db.connect()
  .then((obj: { client: { serverVersion: any }; done: () => void }) => {
    const serverVersion = obj.client.serverVersion;
    console.log("postgres connection established", serverVersion);
    obj.done();
  })
  .catch((error: { message: any }) => {
    console.log("ERROR", error.message || error);
  });

module.exports = db;
