const express = require("express");
const path = require("path");
const app = express();

const {connect} = require('./db');
connect();

const usersRoute = require("./routes/users.route");
const postsRoute = require("./routes/posts.route");

app.set("json spaces", 2);
app.use(express.json());
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);
app.use("/", express.static(path.join(__dirname, 'build')));

app.listen(3001);