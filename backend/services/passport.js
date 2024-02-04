/*
This module provides passport settings for different strategies
*/

const passport = require('passport');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = mongoose.model('User');

//local strategy
const LocalStrategy = require('passport-local');
const crypto = require('crypto');

passport.serializeUser((user, cb) => cb(null, user.auth.email));
passport.deserializeUser((data, cb) => cb(null, data));

passport.use(new LocalStrategy(
  { usernameField: "email", passwordField: "password" },
  async function verify(email, password, cb) {
    let user = await User.findOne({ "auth.email": email });
    if (!user) return cb(null, false, { message: "Incorrect username or password." });
    if (await bcrypt.compare(password, user.auth.password)) {
      return cb(null, user);
    }
    return cb(null, false, { message: "Incorrect username or password." });
  }))