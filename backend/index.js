/*
This file is to create and manage express server
*/

const logger = require('./services/logger');
const mognoose = require('mongoose');
require('./models/User');
const express = require('express');
const session = require('cookie-session');
const cors = require('cors');
const app = express();
const passport = require('passport');
require('dotenv').config();

//Database Connection
mognoose.connect(process.env.MONGO_URI).then(() => {
  console.log('Connection to DB was successfull!');
}).catch((err) => {
  console.log(err);
  throw new Error("Connection to DB failed");
})

//Middleware Connection
app.use(logger);
app.use(cors());
app.use(express.json());
app.use(session({
  keys: process.env.SESSION_KEYS.split(", "),
  //secret: process.env.SESSION_SECRET,
  maxAge: 60 * 60 * 1000 // 1 hour cookie session
}));

require('./services/passport');
app.use(passport.initialize());
app.use(passport.session());



//Routes connection
app.get('/', (req, res) => {
  res.send('Hello world!');
});
require('./routes/authRoutes')(app);
require('./routes/weatherRoutes')(app);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`);
});