# Why 'fs' is my favourite node module!

In NodeJS there's a huge library of modules available to developers for all of your needs. In my experience, the fs module has been the king so far. ![logo](https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg)

One of my favourite NodeJS modules is fs The fs module stands for 'file system' and allows you to read, write, create and delete files in your system. This can be really helpful in backend systems especially when you want to manage a local store of data. In fact this repository actually uses the fs module to get all markdown files in a particular directory and use information about each file to populate a sql table with information about those markdown files.

In this function "getDirectoryFiles" we...

1. Check if the repository Blogdb.
2. Make the directory if it doesn't exist.
3. Read the directory to get all the file names within the directory. These would be the markdown files that this blog is from.

```javascript
const fs = require("fs");
const getDirectoryFiles = async () => {
  try {
    if (!fs.existsSync("./src/db/Blogdb")) {
      fs.mkdirSync("./src/db/Blogdb");
    }
    const fileArr = await fs.readdirSync("./src/db/Blogdb", {
      withFileType: false,
    });
    return fileArr;
  } catch (error) {
    return error;
  }
};
```

Since we now have a function that can get us an array of all the files that are contained in the directory, I can proceed to use a fs function called 'stat' to get back the creation date of each file.

1. Recieve a fileName e.g `test.md` and pass it through fs' stat function to get back `birthtimeMs`. This is the creation date of the file in milliseconds
2. Convert the `birthtimeMs` into a Date so we can get store the information later in a human readable format.

```javascript
const getCreationDate = async (fileName) => {
  try {
    const { birthtimeMs } = await stat(`./src/db/Blogdb/${fileName}`);
    return new Date(birthtimeMs);
  } catch (error) {
    return error;
  }
};
```

Now we can bring all the information together so we can fill our sql database.

1. Assign a variable to the function call `getDirectoryFiles()` so we have an array of the file names in our target directory.
2. Iterate through the array creating an object with the information to update the server.

   - The `title` property is being assigned to a string that has the file extension removed since we'll be using the name of the file later for the frontend. The regex `/\..*/` removes everything after the '.' character.
   - The `date_uploaded` get's the creation date of the file using the function `getCreationDate`.
   - The `file_path` property is a direct path relative to the root of the backend directory.

3. Query for all entries in the database to ensure that the information was added correctly and you're done.

```javascript
const fillSqlDatabase = async () => {
  const files = await getDirectoryFiles();
  for (const file of files) {
    const sqlObj = {
      title: file.replace(/\..*/, ""),
      date_uploaded: await getCreationDate(file),
      file_path: `./src/db/Blogdb/${file}`,
    };
    await createBlog(sqlObj);
  }
  const allBlogs = await getAllBlogs();
  console.log("Done:", allBlogs);
};
fillSqlDatabase();
```

---

These are some of the very basic uses of the fs module, that you can use to implement features into your NodeJS environment. Some of the more advanced uses I've also been able to enjoy is `fs.createReadStream` that enables you to stream file data from a NodeJS server to an endpoint. I was able to use this stream video, but it can be used to stream other file types.

I really enjoy using `fs` because of how effective it can be at helping to serve data and store data where applicable in my NodeJS server and the module has been important in my learning of the capabilities of NodeJS.

[FS module](https://nodejs.org/api/fs.html)

[NodeJS Docs](https://nodejs.org/docs/latest/api/)
