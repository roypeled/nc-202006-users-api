const express = require("express");
const fs = require("fs");
const router = express.Router();

const posts = require("../db/posts.json");
const comments = require("../db/comments.json");

router.get("/", (req, res) => {
  res.send(posts);
});

router.route("/:id")
  .get((req, res) => {
    const postId = parseInt(req.params.id);
    res.send(posts.find(post => post.id === postId));
  })
  .delete((req, res) => {
    const postId = parseInt(req.params.id);
    const index = posts.findIndex(post => post.id === postId);
    posts.splice(index, 1);
    fs.writeFileSync("../db/posts.json", JSON.stringify(posts));
    res.send(posts);
  });

router.get("/:id/comments", (req, res) => {
  const postId = parseInt(req.params.id);
  res.send(comments.filter(comment => comment.postId === postId));
});

module.exports = router;