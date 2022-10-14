const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const resultMatrix = JSON.parse(JSON.stringify(matrix));
  const rowLen = matrix[0].length;
  const colLen = matrix.length;

  for(let i = 0; i < colLen; i++) {
      for(let j = 0; j < rowLen; j++){
          if(resultMatrix[i][j]) {
              resultMatrix[i][j] = 1;
          } else {
              resultMatrix[i][j] = 0;
          }
      }
  }

  for(let i = 0; i < colLen; i++) {
      for(let j = 0; j < rowLen; j++){

          if(matrix[i][j]) {
              let t = 0;
              for(let k = i - 1; t < colLen; k++) {
                  let m = 0;
                  for(let l = j - 1; m < rowLen; l++){
                      if(k >= 0 && l >= 0) {
                          if(!matrix[k][l]) {
                              resultMatrix[k][l]++;
                          }
                      }
                      m++;
                  }
                  t++;
              }
          }
          
      }
  }
  return resultMatrix;
}

module.exports = {
  minesweeper
};
