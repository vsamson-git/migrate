/*
This module provides auth routes with different strategies
from passport.js
*/

const passport = require('passport');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = mongoose.model('User');

module.exports = (app) => {
  // login local strategy
  app.post('/auth/login',
    passport.authenticate('local', { failureMessage: true }),
    (req, res) => {
      res.status(200).send('Logged in!');
    }
  );

  app.post('/auth/register', async (req, res) => {
    let { email, password } = req.body;
    if (await User.findOne({ "auth.email": email })) {
      return res.status(400).send('User Already Exists');
    }
    password = await bcrypt.hash(password, 10);
    let newUser = new User();
    newUser.auth = { ...newUser.auth, email, password };
    await newUser.save();
    return res.status(200).send('Registered user!');
  })

  app.post('/auth/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/auth/user', (req, res) => {
    console.log(req.user);
    res.json(req.user);
  });

}