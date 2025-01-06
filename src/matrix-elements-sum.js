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
  let sum = matrix[0].reduce((acc, item) => acc + item, 0);
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let isValid = true;
      let count = i;
      while (count >= 0) {
        if (matrix[count][j] === 0) {
          isValid = false;
        }
        count--;
      }
      if (isValid) {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
