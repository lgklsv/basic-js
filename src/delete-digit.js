const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const strToCheck = String(n);
    let maxSum = 0;

    for(let i = 0; i < strToCheck.length; i++) {
        let arrToCheck = Array.from(strToCheck.slice());
        arrToCheck.splice(i, 1);
        let sumValue = +arrToCheck.join(''); 
        if (sumValue > maxSum) {
            maxSum = sumValue;
        }
    }
  return maxSum;
}

module.exports = {
  deleteDigit
};
