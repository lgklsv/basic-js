const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  const rowLen = matrix[0].length;
  const colLen = matrix.length

  for(let i = 0; i < rowLen; i++) {
    let prevValue;
    for(let j = 0; j < colLen; j++){
      if(prevValue == 0) {
          continue;
      } else {
          sum += matrix[j][i];
          prevValue = matrix[j][i];
      }
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
