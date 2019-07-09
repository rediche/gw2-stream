const api = require("../../api");

module.exports = (req, res) => {
  if (!req.query.token) {
    res.end("No API token provided.");
  }

  api
    .authenticate(req.query.token)
    .account()
    .mastery()
    .points()
    .get()
    .then(masteries => {
      const total = masteries.totals.reduce((total, region) => {
        return region.region !== "Tyria" ? total : total += region.spent;
      }, 0);
      res.end(total.toString());
    })
    .catch(error => {
      res.end("Couldn't load the core mastery points.");
    });
};
