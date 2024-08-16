const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

/// Controllers
const BlogController = require("./controllers/blog.controller.js");
const ProjectController = require("./controllers/project.controller.js");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use(cors("*"));

app.use("/blogs", BlogController);
app.use("/projects", ProjectController);
app.get("/test2", (req, res) => {
  res.send("This is to see what app is doing");
});

app.use("/", (req, res) => {
  res.send("Welcome to my portfolio");
});

app.all("*", (req, res) => {
  res.status(404).send("Page Not Found");
});
module.exports = app;
