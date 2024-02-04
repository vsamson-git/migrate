const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  auth: {
    email: String,
    password: String,
    googleId: String
  },
  data: {
    age: Number,
    education: String,
    language: {
      writing: Number,
      speaking: Number,
      listening: Number,
      reading: Number,
      lang: String
    },
    work_experience: {
      canada: Number,
      foreign: Number
    }
  }
});

mongoose.model('User', userSchema);