/**
 * Convert a number to a string like `1g 2s 3c`
 * @param {Number} coins Coins to be converted to string.
 */
const convertToCoinString = (coins = 0) => {
  const gold = Math.floor(coins / 10000);
  const silver = Math.floor(coins / 100) % 100;
  const copper = Math.floor(coins % 100);

  return `${gold}g ${silver}s ${copper}c`;
};

module.exports = convertToCoinString;