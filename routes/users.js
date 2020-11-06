const express = require("express");
const router = express.Router();
const {getUsers, getPosts, deleteUser} = require('../db');
const {ObjectID} = require('mongodb');

const users = require("../db/users.json");
const posts = require("../db/posts.json");

router.get("/", async (req, res) => {
  const query = req.query.search ? {name: req.query.search} : {};
  (await getUsers())
    .find(query)
    .toArray((err, docs) => {
      res.json(docs);
    });
});

router.get("/:id", async (req, res) => {
  (await getUsers())
    .findOne({
      _id: ObjectID.createFromHexString(req.params.id),
    }, (err, doc) => {
      res.json(doc);
    });
});

router.get("/:id/posts", async (req, res) => {
  (await getPosts())
    .find({
      userId: req.params.id,
    })
    .toArray((err, docs) => {
      res.json(docs);
    });
});

router.delete("/:id", async (req, res) => {
  const userId = ObjectID.createFromHexString(req.params.id);
  (await deleteUser(userId))
    .toArray((err, docs) => {
      res.json(docs);
    });
});

module.exports = router;