const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	str = str + ''
	let result = str;
  if (!options.addition && options.addition !== false && options.addition !== null) {
    options.addition = '';
  } else { 
    options.addition = String(options.addition); 
  }
	
	options.separator = options.separator || '+';
	options.additionSeparator = options.additionSeparator || '|';

	let additionString;
	additionString = options.addition;

	if (options.additionRepeatTimes) {
		for (let i = 2; i <= options.additionRepeatTimes; i++) {
			additionString += options.additionSeparator + options.addition;
		}
	}

	if (options.repeatTimes) {	
		for (let j = 2; j <= options.repeatTimes; j++) {
			result += additionString + options.separator + str;
		}
		result += additionString;
	} else {
		result += additionString;
	}
	return result;
};
  