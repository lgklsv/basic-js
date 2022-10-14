const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  if(String(n).length == 1) {
      return n;
  }
  while(String(n).length > 1) {
      let sum = 0;
      let splitedStr = String(n).split('');
      sum += splitedStr.reduce((acc, cur) => acc + +cur, 0);
      n = sum;
  }
  return n;
} 

module.exports = {
  getSumOfDigits
};
