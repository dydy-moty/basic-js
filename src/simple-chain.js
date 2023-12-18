const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  head : '',
  length: 0,

  getLength() {
    length = this.length;
    return length;
  },
  addLink(value) {
    if (value !== undefined) {
      if (this.length !== 0) {
        this.head += '~~';
      }
      this.head += '( ' + value + ' )';
      this.length += 1;
      return this;
    }
  },
  removeLink(position) {
    if (position > this.length || Number.isInteger(position) === false || position <= 0) {
      this.head = '';
      this.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
      let ARR = this.head.split('~~');
      ARR.splice(position - 1, 1);
      this.head = ARR.join('~~');
      this.length -= 1;
      return this;
  },
  reverseChain() {
    this.head = this.head.split('~~').reverse().join('~~');
    return this;
  },
  finishChain() {
    const STRING = this.head;
    this.head = '';
    this.length = 0;
    return STRING;
  }
};

module.exports = {
  chainMaker
};
