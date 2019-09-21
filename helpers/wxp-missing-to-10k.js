/**
 * Convert rank to a missing amount of WXP.
 * @param {Number} rank Rank to analyze missing WXP from.
 */
const WXPMissingTo10K = rank =>  {
  if (rank >= 1 && rank <= 5) {
    return (rank - 1) * 1000;
  }

  if (rank > 5 && rank <= 10000) {
    return (rank - 5) * 5000 + 4 * 1000;
  }

  if (rank < 1) {
    return 0;
  }

  if (rank > 10000) {
    return xpTo10K(10000);
  }
};

module.exports = WXPMissingTo10K;