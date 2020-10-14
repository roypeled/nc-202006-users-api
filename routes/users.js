const express = require("express");
const router = express.Router();

const users = require("../db/users.json");
const posts = require("../db/posts.json");

router.get("/", (req, res) => {
  res.send(users);
});

router.get("/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  res.send(users.find(user => user.id === userId));
});

router.get("/:id/posts", (req, res) => {
  const userId = parseInt(req.params.id);
  res.send(posts.filter(post => post.userId === userId));
});

module.exports = router;