const api = require("../helpers/api");

exports.name = (req, res) => {
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
  api.authenticate(req.query.token);

  try {
    const account = await api.account().get();
    const world = await api.worlds().get(account.world);
    res.end(world.name);
  } catch (error) {
    res.end("Couldn't load server.");
  }
};

exports.fractalLevel = (req, res) => {
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

exports.wvwRank = (req, res) => {
  api
    .authenticate(req.query.token)
    .account()
    .get()
    .then(account => {
      res.end(account.wvw_rank.toLocaleString());
    })
    .catch(error => {
      res.end("Couldn't load the WvW rank.");
    });
};