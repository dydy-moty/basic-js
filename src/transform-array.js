const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let transformArr = [];
  const PARAMS = ['--double-next', '--double-prev', '--discard-next', '--discard-prev'];

  if (!Array.isArray(arr)) { throw new Error('\'arr\' parameter must be an instance of the Array!') }

    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] === PARAMS[0] && i !== arr.length - 1) {
        transformArr.push(arr[i + 1])

      } else if (arr[i] === PARAMS[2]) {
        if (arr[i+2] === PARAMS[3] || arr[i+2] === PARAMS[1]) {
          i += 1;
        }
        i += 1;

      } else if (arr[i] === PARAMS[1] && i !== 0) {
        transformArr.push(transformArr[transformArr.length - 1])

      }  else if (arr[i] === PARAMS[3]) {
        transformArr.pop()

      } else if (arr[i] === PARAMS[3] && i === 0 || arr[i] === PARAMS[1] && i === 0 || arr[i] === PARAMS[0] && i === arr.length - 1) {
        continue;

      } else {
        transformArr.push(arr[i])
      }
    }

  return transformArr;
}

module.exports = {
  transform
};
