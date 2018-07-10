/**
 * @fileOverview Generates random value in the Range
 */

/**
 * Gets random value in the min and max range
 * @param {number} min minValue to be included in the range
 * @param {number} max maxValue to be included in the range
 * @returns {number}
 */
const getRandomValue = (max, min) => {
  const n = Math.floor((Math.random() * (max - min + 1)) + min);
  return n;
};

module.exports = getRandomValue;
