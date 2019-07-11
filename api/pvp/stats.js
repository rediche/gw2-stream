const api = require("../../helpers/api");

exports.rank = (req, res) => {
  if (!req.query.token) {
    res.end("No API token provided.");
  }

  api
    .authenticate(req.query.token)
    .pvp()
    .stats()
    .get()
    .then(stats => {
      const totalRanks = stats.pvp_rank + stats.pvp_rank_rollovers;
      res.end(totalRanks.toString());
    })
    .catch(error => {
      res.end("Couldn't load the PvP rank.");
    });
};