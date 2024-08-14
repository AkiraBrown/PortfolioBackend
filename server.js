var app = require("./src/app.ts");
require("dotenv").config();
var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
module.exports = app;
