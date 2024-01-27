module.exports = (req, res, next) => {
  console.log(`${req.method} request to ${req.hostname}${req.path}`);
  next();
}