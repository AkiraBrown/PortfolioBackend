# Building a Markdown Blog

This tutorial works across making a fullstack Markdown blog site, assuming you already know what markdown is and have some experience with making a fullstack web app. We'll be using React, React-Router and Tailwindcss for the frontend of the site. For the backend we'll be using ExpressJS, NodeJS to manage our backend server routes and for the database we're using PostgreSQL.

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

After initializing our NodeJS project we'll create a `server.js` and `app.js`. To do this:

```bash
touch app.js
touch server.js
```

You can check these were created successfully by using `ls` in the terminal. We can now move onto installing the packages we need for this backend to work.

#### For the normal dependencies we need...

- cors
- dotenv
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

<!-- After initializing the NodeJS project we'll then create the `server.js` and `app.js` so we can setup our database -->
