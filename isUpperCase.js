/**
 * @fileOverview Checks if the string is in uppercase
 */

/**
 * Checks if the string is in uppercase
 * @param {string} s The string to be checked
 * @returns {boolean}
 */
const isUppercase = (s) => {
  let i;
  let b;
  for (i = 0; i < s.length; i += 1) {
    b = s.charCodeAt(i);
    if (s.charAt(i) !== ' ') {
      if ((b < 65) || (b > 90)) {
        return false;
      }
    }
  }
  return true;
};

module.exports = isUppercase;
