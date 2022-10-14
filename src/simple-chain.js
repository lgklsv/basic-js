const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  resArr: [],

  getLength() {
    return this.resArr.length;
  },
  addLink(value) {
      this.resArr.push(`( ${value} )`);
      return this;
  },
  removeLink(position) {
      if(typeof position !== 'number' || position < 1 || position > this.resArr.length) {
          this.resArr = [];
          throw new Error ('You can\'t remove incorrect link!');
      }
      this.resArr.splice(position - 1, 1);
      return this;
  },
  reverseChain() {
      this.resArr.reverse();
      return this;
  },
  finishChain() {
      const resStr =  this.resArr.join('~~'); 
      this.resArr = [];
      return resStr;
  }
};

module.exports = {
  chainMaker
};
