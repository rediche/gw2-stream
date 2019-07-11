const api = require("../../helpers/api");
const convertToCoinString = require("../../helpers/coins");

exports.gold = (req, res) => {
  api
    .authenticate(req.query.token)
    .account()
    .wallet()
    .get()
    .then(wallet => {
      const currency = wallet.find(currency => currency.id === 1);
      const coinString = convertToCoinString(currency.value);
      res.end(coinString);
    })
    .catch(error => {
      res.end("Couldn't load the account's gold.");
    });
};

exports.karma = (req, res) => {
  api
    .authenticate(req.query.token)
    .account()
    .wallet()
    .get()
    .then(wallet => {
      const currency = wallet.find(currency => currency.id === 1);
      res.end(currency.value.toLocaleString());
    })
    .catch(error => {
      res.end("Couldn't load the account's gold.");
    });
};
