const logger = require('./services/logger');

const express = require('express');
const app = express();

app.use(logger);

app.get('/', (req, res) => {
  res.send('Hello world!');
})

const PORT = process.env.PORT || 3457;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});