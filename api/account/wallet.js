const api = require("../../helpers/api");
const convertToCoinString = require("../../helpers/coins");

const searchWallet = currencyId => currency => {
  return currency.id === currencyId;
};

const getCurrencyInWallet = (currencyId, token) => {
  return api
    .authenticate(token)
    .account()
    .wallet()
    .get()
    .then(wallet => {
      return wallet.find(searchWallet(currencyId)).value;
    });
};

exports.gold = (req, res) => {
  getCurrencyInWallet(1, req.query.token)
    .then(currency => {
      res.end(convertToCoinString(currency));
    })
    .catch(error => {
      res.end("Couldn't load the account's gold.");
    });
};

exports.karma = (req, res) => {
  getCurrencyInWallet(2, req.query.token)
    .then(currency => {
      res.end(currency.toLocaleString());
    })
    .catch(error => {
      res.end("Couldn't load the account's karma.");
    });
};

exports.laurels = (req, res) => {
  getCurrencyInWallet(3, req.query.token)
    .then(currency => {
      res.end(currency.toLocaleString());
    })
    .catch(error => {
      res.end("Couldn't load the account's laurels.");
    });
};

exports.gems = (req, res) => {
  getCurrencyInWallet(4, req.query.token)
    .then(currency => {
      res.end(currency.toLocaleString());
    })
    .catch(error => {
      res.end("Couldn't load the account's gems.");
    });
};

exports.badgesOfHonor = (req, res) => {
  getCurrencyInWallet(15, req.query.token)
    .then(currency => {
      res.end(currency.toLocaleString());
    })
    .catch(error => {
      res.end("Couldn't load the account's badges of honor.");
    });
};
