# Building a Markdown Blog

This tutorial works across making a fullstack Markdown blog site, assuming you already know what markdown is and have some experience with making a fullstack web app. We'll be using React, React-Router and Tailwindcss for the frontend of the site. For the backend we'll be using ExpressJS, NodeJS to manage our backend server routes.

### Setting Up Our environment

If you don't already have NodeJS and NPM installed refer to this [link](https://nodejs.org/en) to install NodeJS and NPM comes with the NodeJS installation.You verify that you have them installed with these commands in the terminal:

```bash
node -v
npm -v
```

You should get back the version number of what node and npm you have installed.

### Creating a NodeJS Project

For this step we'll create a directory for our project and change the directory to our project directory. Once in the directory we'll then initialize a NodeJS with default values.

```bash
mkdir markdown-backend
cd markdown-backend
npm init -y
```

After initializing our NodeJS project we'll create a `app.js`:

```bash
touch app.js
```

You can check these were created successfully by using `ls` in the terminal. We can now move onto installing the packages we need for this backend to work.

#### For the normal dependencies we need...

- cors
- express
- marked
- pg-promise

**Command to install them all in one:**

```bash
npm i cors dotenv express marked pg-promise
```

#### For the dev dependencies we need...

- morgan
- nodemon

**Command to install them all in one:**

```bash
npm i -D morgan nodemon
```

In the `app.js` we want to provide our routes so that we can manage the GET request that will return our markdown text.

```javascript
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const fs = require("fs");
const marked = require("marked");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(cors("*"));
app.get("/", async (req, res) => {
  res.status(200).send("Welcome World");
});
app.get("/:filename", async (req, res) => {
  const { filename } = req.params;
  const fileContent = fs.readFileSync(
    `./MarkdownStore/${filename}.md`,
    "utf-8"
  );
  const formattedFileContent = marked.parse(fileContent);
  res.send(formattedFileContent);
});

app.listen(3000, () => {
  console.log("Server is running on port: 3000");
});

module.exports = app;
```

In the `app.get` by `/:filename` the route pulls the name of the file you're requesting from a relative directory we'll make that will hold our markdown files, called MarkdownStore. We read the contents of the file using NodeJS' fs module and pass the contents into the package marked. With the contents converted to a html format the type of value for the contents is still a string so we can simply send the contents to our frontend.

### Additional Notes

There are a number of improvements that can be implemented regarding the path to the files and the request query.

- The request parameters will fail if you apply the filename and extension, so validation to the filename can be applied
- a try catch block can be applied here to respond with an error incase of invalid query

<!-- After initializing the NodeJS project we'll then create the `server.js` and `app.js` so we can setup our database -->
