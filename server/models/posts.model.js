const { ObjectID } = require('mongodb');
const {Schema, model} = require('mongoose');

const postSchema = new Schema({
  user: {
    type: ObjectID,
    ref: 'User',
  },
  title: String,
  body: String,
});

const PostModel = model('Post', postSchema);

module.exports = {
  PostModel,
};