const {MongoClient} = require('mongodb');

const dbUrl = 'mongodb://localhost:27017';
const dbName = 'users-list';

async function connect(collection) {
  const client = await MongoClient.connect(dbUrl);
  const db = client.db(dbName);
  return db.collection(collection);
}

function getUsers() {
  return connect('users');
}

function getPosts() {
  return connect('posts');
}

module.exports = {
  connect,
  getUsers,
  getPosts,
};