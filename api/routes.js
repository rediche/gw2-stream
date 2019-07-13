const express = require('express');
const router = express.Router();
const account = require('./account');
const masteryPoints = require('./account/mastery-points');
const wallet = require('./account/wallet');
const wvwStats = require('./wvw/stats');
const pvpStats = require('./pvp/stats');

router.get('/', (req, res) => {
  res.redirect('https://gw2.ninja/stream');
});

/**
 * ACCOUNT
 */
router.get('/account/name', account.name);
router.get('/account/server', account.server);
router.get('/account/fractal-level', account.fractalLevel);
router.get('/account/wvw-rank', account.wvwRank);

// Mastery Points
router.get('/account/mastery/points', masteryPoints.total);
router.get('/account/mastery/points/tyria', masteryPoints.tyria);
router.get('/account/mastery/points/maguuma', masteryPoints.maguuma);
router.get('/account/mastery/points/desert', masteryPoints.desert);

// Wallet
router.get('/account/wallet/gold', wallet.gold);
router.get('/account/wallet/karma', wallet.karma);
router.get('/account/wallet/laurels', wallet.laurels);
router.get('/account/wallet/gems', wallet.gems);
router.get('/account/wallet/badges-of-honor', wallet.badgesOfHonor);

/**
 * PvP
 */
router.get('/pvp/stats/rank', pvpStats.rank);

/**
 * WvW
 */
router.get('/wvw/stats/kills', wvwStats.kills);
router.get('/wvw/stats/matchup', wvwStats.matchup);

module.exports = router;