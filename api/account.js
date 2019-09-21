const humanizeDuration = require('humanize-duration');
const api = require("../helpers/api");
const WXPMissingTo10K = require("../helpers/wxp-missing-to-10k");

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
      res.end(account.fractal_level.toLocaleString());
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

exports.wvwMissingXP = (req, res) => {
  api
    .authenticate(req.query.token)
    .account()
    .get()
    .then(account => {
      res.end(WXPMissingTo10K(account.wvw_rank).toLocaleString());
    })
    .catch(error => {
      res.end("Couldn't load the missing WXP.");
    });
}

exports.age = async (req, res) => {
  const { age, created } = await api.authenticate(req.query.token).account().get();
  const ageInMs = age * 1000;
  const humanizedDuration = humanizeDuration(ageInMs, {
    units: ['h', 'm']
  });
  const createdInMs = new Date().getTime() - new Date(created).getTime();
  const daysSinceAccountCreation = humanizeDuration(createdInMs, {
    units: ['d'],
    maxDecimalPoints: 0
  });
  res.end(humanizedDuration + " over the last " + daysSinceAccountCreation + ".");
};