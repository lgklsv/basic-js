const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  const allIdx = [];
  let idx = arr.indexOf(-1)
  while (idx != -1) {
      allIdx.push(idx);
      idx = arr.indexOf(-1, idx + 1);
  }

  while (arr.indexOf(-1) != -1) {
      arr.splice(arr.indexOf(-1), 1);
  }

  arr.sort((a, b) => a - b);

  allIdx.forEach(el => {
      arr.splice(el, 0, -1);
  })
  return arr;

}

module.exports = {
  sortByHeight
};
