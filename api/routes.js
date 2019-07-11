const express = require('express');
const router = express.Router();
const account = require('./account');
const masteryPoints = require('./account/mastery-points');
const pvpStats = require('./pvp/stats');

router.get('/', (req, res) => {
  res.end("Nothing here...");
});

/**
 * ACCOUNT
 */
router.get('/account/name', account.name);
router.get('/account/server', account.server);
router.get('/account/fractal-level', account.fractalLevel);
router.get('/account/mastery/points', masteryPoints.total);
router.get('/account/mastery/points/tyria', masteryPoints.tyria);
router.get('/account/mastery/points/maguuma', masteryPoints.maguuma);
router.get('/account/mastery/points/desert', masteryPoints.desert);

/**
 * PvP
 */
router.get('/pvp/stats/rank', pvpStats.rank);

module.exports = router;