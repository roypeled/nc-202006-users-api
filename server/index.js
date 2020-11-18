const express = require("express");
const app = express();

const {connect} = require('./db');
connect();

const usersRoute = require("./routes/users.route");
const postsRoute = require("./routes/posts.route");

app.set("json spaces", 2);
app.use(express.json());
app.use("/users", usersRoute);
app.use("/posts", postsRoute);

app.listen(3001);