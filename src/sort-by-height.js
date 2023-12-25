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

  let newArr = arr.slice();
  newArr.sort(function(a, b){return a - b}).splice(0, newArr.lastIndexOf(-1) + 1);
  let resultArr = [];
  let count = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === -1) {
      resultArr.push(arr[i]);
    } else {
      resultArr.push(newArr[count]);
      count += 1;
    }
  }
  return resultArr;
}

module.exports = {
  sortByHeight
};
