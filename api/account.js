const api = require("../helpers/api");

exports.name = (req, res) => {
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

exports.server = async (req, res) => {
  if (!req.query.token) {
    res.end("No API token provided.");
  }

  api.authenticate(req.query.token);

  try {
    const account = await api.account().get();
    const world = await api.worlds().get(account.world);
    res.end(world.name);
  } catch (error) {
    res.end("Couldn't load server.");
  }
};
