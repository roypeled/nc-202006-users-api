const {Schema, model} = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
      type: Number,
      min: 0,
      max: 120,
      validate: {
          validator: v => v%2 === 0,
          message: props => `${props.value} is not even age!`
      },
  },
  username: String,
  email: String,
  address: {
      street: String,
      suite: String,
      city: String,
      zipcode: String,
      geo: {
          lat: Number,
          lng: Number
      }
  },
  phone: String,
  website: String,
});

const UserModel = model('User', userSchema);

module.exports = {
  UserModel,
};