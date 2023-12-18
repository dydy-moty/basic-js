const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let current = str[0];
  let countElem = 1;
  let codeString = '';
  for (let i = 1; i <= str.length; i += 1) {
    if (str[i] === current) {
      countElem += 1;
    } else {
      codeString += countElem + current;
      countElem = 1;
      current = str[i];
    }
  }
  return codeString.replace(/1/g, '');
}

module.exports = {
  encodeLine
};
