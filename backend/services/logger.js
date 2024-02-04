/*
This is a simple logger, which logs every http request
being made into the console.
*/

module.exports = (req, res, next) => {
  console.log(`${req.method} request to ${req.hostname}${req.path}`);
  next();
}