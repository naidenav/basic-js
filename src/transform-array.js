const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
	if (typeof(arr) != 'object') {
		throw new Error('no array');
	}
	transformArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] != '--discard-next' && arr[i] != '--discard-prev' && arr[i] != '--double-next' && arr[i] != '--double-prev') {
			transformArr.push(arr[i]);
		} else if (arr[i] === '--discard-next' && i != arr.length -1) {
			i++;
		} else if (arr[i] === '--discard-prev' && i != 0 && arr[i - 2] != '--discard-next') {
			transformArr.pop()
		} else if (arr[i] === '--double-next' && i != arr.length -1) {
			transformArr.push(arr[i + 1]);
		} else if (arr[i] === '--double-prev' && i != 0 && arr[i - 2] != '--discard-next') {
			transformArr.push(arr[i - 1]);
		} else if (arr[i] === '--double-prev' && arr[i - 2] == '--discard-next') {
			continue;
		}		
	}
	return transformArr
};
