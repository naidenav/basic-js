const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    if (!this.chain) {
      return 0;
    } else {
      return this.chain.length;
    }
  },
  addLink(value) {
    if (!this.chain) {
      if (value === undefined) {
        this.chain = [''];
        return this;
      } else {
        this.chain = [`${value}`];
        return this;
      }
    } else {
      if (value === undefined) {
        this.chain.push('');
        return this;
      } else {
        this.chain.push(`${value}`);
        return this;
      }
    }
  },
  removeLink(position) {
    if (!this.chain[position - 1] || typeof(position) != 'number' || !Number.isInteger(position)) {
      delete this.chain;
      throw new Error('Ups');
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    if (this.chain) {
      this.chain.reverse();
      return this;
    } else {
      return this;
    }
  },
  finishChain() {
    if (this.chain) {
      let chainString = `( ${this.chain[0]} )`;
      for (let i = 1; i < this.chain.length; i++) {
        chainString += `~~( ${this.chain[i]} )`;
      }
      delete this.chain;
      return chainString;
    }
  }
};

module.exports = chainMaker;
