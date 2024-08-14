"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var morgan = require("morgan");
var cors = require("cors");
/// Controllers
var BlogController = require("./controllers/blog.controller");
var ProjectController = require("./controllers/project.controller");
var app = (0, express_1.default)();
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}
app.use(express_1.default.json());
app.use(cors("*"));
app.use("/blogs", BlogController);
app.use("/projects", ProjectController);
app.use("/", function (req, res) {
    console.log("Welcome to my portfolio");
    res.send("Welcome to my portfolio");
});
app.all("*", function (req, res) {
    res.status(404).send("Page Not Found");
});
module.exports = app;
