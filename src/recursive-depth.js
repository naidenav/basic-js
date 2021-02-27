const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
	calculateDepth(value) {
	  if (Array.isArray(value)) {
		if (value.length === 0) {
		  return 1;
		}
		return 1 + Math.max(...value.map(this.calculateDepth, this));
	  }
	  return 0;
	}
  };