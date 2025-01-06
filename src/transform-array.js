const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr2 initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let arr3 = arr.map((item) => item);
  for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] === '--double-next') {
      if (i < arr3.length - 1) {
        arr3.splice(i, 1, arr3[i + 1]);
      } else {
        arr3.splice(arr3.length - 1, 1);
      }
    }
    else if (arr3[i] === '--discard-prev') {
      if (i > 0) {
        arr3.splice(i - 1, 2);
        i -= 1;
      } else {
        arr3.splice(0, 1);
      }
    }
    else if (arr3[i] === '--discard-next') {
      if (i < arr3.length - 1) {
        if (arr3[i + 2] === '--double-prev' || arr3[i + 2] === '--discard-prev') {
          arr3.splice(i, 3);
        } else {
          arr3.splice(i, 2);
        }
      } else {
      arr3.splice(arr3.length - 1, 1);
      }
    }
    else if (arr3[i] === '--double-prev') {
      if (i > 0) {
        arr3.splice(i, 1, arr3[i - 1]);
      } else {
        arr3.splice(0, 1);
      }
    }
  }
  return arr3;
}

module.exports = {
  transform
};
