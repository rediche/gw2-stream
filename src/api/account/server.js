const api = require("../../api");

module.exports = async (req, res) => {
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
