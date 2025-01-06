
const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  for (let i = 0; i < names.length; i++) {
    let isRenamed = false;
    let count = 1;
    for (let j = 0; j <= i; j++) {
      if (names[j] === names[i] && j !== i) {
        if (isRenamed) {
          names[i] = names[i].slice(0, names[i].length - 2).concat(`${count})`);
        } else {
          names[i] = names[i].concat(`(${count})`);
          count++;
        }
        isRenamed = true;
      }
    }
  }
  return names;
}

module.exports = {
  renameFiles
};
