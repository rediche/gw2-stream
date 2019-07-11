const api = require("../../helpers/api");

exports.total = (req, res) => {
  api
    .authenticate(req.query.token)
    .account()
    .mastery()
    .points()
    .get()
    .then(masteries => {
      const total = masteries.totals.reduce(
        (total, region) => (total += region.spent),
        0
      );
      res.end(total.toString());
    })
    .catch(error => {
      res.end("Couldn't load the total mastery points.");
    });
};

exports.tyria = (req, res) => {
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

exports.maguuma = (req, res) => {
  api
    .authenticate(req.query.token)
    .account()
    .mastery()
    .points()
    .get()
    .then(masteries => {
      const total = masteries.totals.reduce((total, region) => {
        return region.region !== "Maguuma" ? total : total += region.spent;
      }, 0);
      res.end(total.toString());
    })
    .catch(error => {
      res.end("Couldn't load the HoT mastery points.");
    });
};

exports.desert = (req, res) => {
  api
    .authenticate(req.query.token)
    .account()
    .mastery()
    .points()
    .get()
    .then(masteries => {
      const total = masteries.totals.reduce((total, region) => {
        return region.region !== "Desert" ? total : total += region.spent;
      }, 0);
      res.end(total.toString());
    })
    .catch(error => {
      res.end("Couldn't load the PoF mastery points.");
    });
};
