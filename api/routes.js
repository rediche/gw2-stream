const express = require('express');
const router = express.Router();
const account = require('./account');

router.get('/', (req, res) => {
  res.end("Nothing here...");
});

router.get('/account/name', account.name);
router.get('/account/server', account.server);

module.exports = router;