const api = require("../../helpers/api");

exports.kills = (req, res) => {
  api
    .authenticate(req.query.token)
    .account()
    .achievements()
    .get()
    .then(achievements => {
      const achievement = achievements.find(achievement => achievement.id === 283);
      res.end(achievement.current.toLocaleString());
    })
    .catch(error => {
      res.end("Could not load accounts WvW kills.");
    });
};
