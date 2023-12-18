const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  throw new NotImplementedError('Not implemented');
  // const MONTH = date.getMonth();
  // if (!date) {
  //   return 'Unable to determine the time of year!';
  // } else  {
  //   if (!date instanceof Date) {
  //     throw new Error("Invalid date!");
  //   } else {
  //     if (MONTH < 5 && MONTH > 1) {
  //       return 'spring';
  //     } else if ( MONTH < 8 && MONTH > 4 ) {
  //       return 'summer'
  //     } else if ( MONTH < 11 && MONTH > 7 ) {
  //       return 'fall'
  //     } else if ( MONTH > 10 || MONTH === 0 || MONTH === 1 ) {
  //       return 'winter'
  //     }
  //   }
  // }
}

module.exports = {
  getSeason
};
