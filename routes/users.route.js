const express = require("express");
const router = express.Router();
const {ObjectID} = require('mongodb');
const {UserModel} = require('../models/users.model');
const {PostModel} = require('../models/posts.model');

router.get("/", async (req, res) => {
  const query = req.query.search ? {name: req.query.search} : {};
  const docs = await UserModel
    .find(query)
    .exec();
  res.json(docs);
});

router.get("/:id", async (req, res) => {
  const docs = await UserModel
    .findOne({
      _id: ObjectID.createFromHexString(req.params.id),
    }, 'name address.geo').exec();
  res.json(docs);
});

router.get("/:id/posts", async (req, res) => {
  const docs = await PostModel
    .find({
      user: req.params.id,
    })
    .populate('user')
    .exec();
  res.json(docs);
});

router.delete("/:id", async (req, res) => {
  const userId = ObjectID.createFromHexString(req.params.id);
  await UserModel
    .deleteOne({
      _id: id,
    }).exec();
  res.json({
    error: 0,
  });
});

module.exports = router;