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
  let arr = matrix.map((item) => item);
  for (let row = 0; row < arr.length; row++) {
    arr[row] = arr[row].map((item) => item = 0);
  }
  for (let row = 0; row < arr.length; row++) {
    for (let num = 0; num < arr[row].length; num++) {
      if (matrix[row][num] === true) {
        for (let i = row - 1; i <= row + 1; i++) {
          for (let j = num - 1; j <= num + 1; j++) {
            if (i >= 0 && i < arr[row].length && j >= 0 && j < arr[row].length) {
              if (!matrix[i][j] || i !== row) {
                arr[i][j]++;
              }
            }
          }
        }
      }
    }
  }
  return arr;
}
module.exports = {
  minesweeper
};
