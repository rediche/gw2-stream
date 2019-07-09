const client = require("gw2api-client");
const cacheMemory = require("gw2api-client/src/cache/memory");

module.exports = (req, res) => {
  if (!req.query.token) {
    res.end("No API token provided.");
  }

  client()
    .cacheStorage(cacheMemory())
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
