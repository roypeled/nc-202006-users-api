const mongoose = require('mongoose');

let dbUrl = 'mongodb://localhost:27017/users-list';
if(process.env.DB_URL) {
  dbUrl = process.env.DB_URL;
}

async function connect() {
  await mongoose.connect(dbUrl, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  });
}

module.exports = {
  connect,
};