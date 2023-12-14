const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
    const revEmail = email.split('').reverse().join('');
    const index = revEmail.slice(0, (revEmail.indexOf('@')));
    return index.split('').reverse().join('');
}

module.exports = {
  getEmailDomain
};
