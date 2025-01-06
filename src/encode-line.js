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
  let result = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result = result.concat(`${count}`).concat(str[i]);
      count = 1;
    }
  }
  result = result.split("").filter((item) => item !== "1").join("");
  return result;
}

module.exports = {
  encodeLine
};
