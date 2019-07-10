const api = require("../../helpers/api");

module.exports = (req, res) => {
  if (!req.query.token) {
    res.end("No API token provided.");
  }

  api
    .authenticate(req.query.token)
    .account()
    .get()
    .then(account => {
      res.end(account.fractal_level.toString());
    })
    .catch(error => {
      res.end("Couldn't load the fractal level.");
    });
};
