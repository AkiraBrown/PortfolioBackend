import express, { Express, Request, Response } from "express";
const morgan = require("morgan");
const cors = require("cors");

/// Controllers
const BlogController = require("./controllers/blog.controller");
const ProjectController = require("./controllers/project.controller");

const app: Express = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use(cors("*"));
app.use("/blogs", BlogController);
app.use("/projects", ProjectController);

app.use("/", (req: Request, res: Response) => {
  console.log("Welcome to my portfolio");
  res.send("Welcome to my portfolio");
});
app.all("*", (req: Request, res: Response) => {
  res.status(404).send("Page Not Found");
});

module.exports = app;
