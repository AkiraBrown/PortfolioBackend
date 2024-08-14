require("dotenv").config();
var pgp = require("pg-promise")();
var _a = process.env, PG_HOST = _a.PG_HOST, PG_PORT = _a.PG_PORT, PG_DATABASE = _a.PG_DATABASE, PG_USER = _a.PG_USER, PG_PASSWORD = _a.PG_PASSWORD;
var cn = {
    host: PG_HOST,
    port: PG_PORT,
    database: PG_DATABASE,
    user: PG_USER,
    password: PG_PASSWORD,
    allowExitOnIdle: true,
};
var db = pgp(cn);
db.connect()
    .then(function (obj) {
    var serverVersion = obj.client.serverVersion;
    console.log("postgres connection established", serverVersion);
    obj.done();
})
    .catch(function (error) {
    console.log("ERROR", error.message || error);
});
module.exports = db;
