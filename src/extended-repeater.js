const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  let strAddition = '';
  let strAdditionString = '';
  if (!options.additionSeparator) { options.additionSeparator = '|'}
  typeof  options.addition !== 'string' ? strAdditionString = String(options.addition) : strAdditionString = options.addition;

  if (options.additionRepeatTimes) {
    for (let i = 0; i < options.additionRepeatTimes; i += 1) {
      strAddition += strAdditionString + options.additionSeparator;
    }
    strAddition = strAddition.slice(0, (strAddition.length - options.additionSeparator.length));
  } else if (!options.addition) {
    strAddition = '';
  } else {
    strAddition = strAdditionString;
  }

  let newString = '';
  let strString = '';
  typeof  str !== 'string' ? strString = String(str) : strString = str;
  if (!options.separator) { options.separator = '+'}

  if (options.repeatTimes) {
    for (let i = 0; i < options.repeatTimes; i += 1) {
      newString += strString + strAddition + options.separator;
    }
    return newString.slice(0, (newString.length - options.separator.length));
  } else {
    return newString = strString + strAdditionString;
  }
}

module.exports = {
  repeater
};
