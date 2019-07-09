const api = require('../../api');

module.exports = (req, res) => {
  if (!req.query.token) {
    res.end("No API token provided.");
  }

  api
    .authenticate(req.query.token)
    .account()
    .get()
    .then(account => {
      res.end(account.name);
    })
    .catch(error => {
      res.end("Couldn't load the account name.");
    });
};
